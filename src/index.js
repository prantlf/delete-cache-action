if (typeof global.crypto !== 'object') {
  global.crypto = {}
}
if (typeof global.crypto.getRandomValues !== 'function') {
  global.crypto.getRandomValues = getRandomValues
}

const core = require('@actions/core')
const { context } = require('@actions/github');
const httpm = require('@actions/http-client')
const MersenneTwister = require('mersenne-twister')

const twister = new MersenneTwister(Math.random() * Number.MAX_SAFE_INTEGER)
function getRandomValues(dest) {
  for (let i = dest.length; --i >= 0;) {
    dest[i] = Math.floor(twister.random() * 256)
  }
  return dest
}

const { owner, repo } = context.repo;
const { GITHUB_TOKEN: envToken } = process.env

async function request(token, key) {
  const http = new httpm.HttpClient()
  const url = `https://api.github.com/repos/${owner}/${repo}/actions/caches?key=${key}`
  core.info(`DELETE ${url}`)
  const res = await http.del(url, {
		Accept: 'Accept: application/vnd.github+json',
		Authorization: `Bearer ${token}`,
    'User-Agent': 'prantlf/delete-cache-action',
    'X-GitHub-Api-Version': '2022-11-28'
	})
  if (res.message.statusCode !== 200) {
    const err = new Error(`DELETE ${url} failed: ${res.message.statusCode} ${res.message.statusMessage}`)
    err.response = res
    throw err
  }
  return JSON.parse(await res.readBody())
}

function delay() {
  const delay = (5 + 5 * Math.random()) * 1000
  core.info(`Wait ${delay} ms before trying again`)
  return new Promise(resolve => setTimeout(resolve, delay))
}

async function retry(action) {
  for (let attempt = 0;;) {
    try {
      return await action()
    } catch (err) {
      if (++attempt === 3) throw err
      core.warning(err)
    }
    await delay()
  }
}

function requestSafely(token, key) {
  return retry(() => request(token, key))
}

async function run() {
  const key = core.getInput('key')
  if (!key) throw new Error('missing key')
  core.info(`Delete cache with key "${key}"`)

  const token = core.getInput('token') || envToken
  if (!token) throw new Error('missing token')

  const { total_count } = await requestSafely(token, key)
  core.info(`${total_count} item deleted`)
}

run().catch(err => core.setFailed(err))
