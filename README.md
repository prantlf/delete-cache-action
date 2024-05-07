# Delete Cache

[![Latest version](https://img.shields.io/npm/v/delete-cache-action) ![Dependency status](https://img.shields.io/librariesio/release/npm/delete-cache-action)](https://www.npmjs.com/package/delete-cache-action)

GitHub action for deleting cache with a specified key.

## Usage

Delete the cache with a specific key:

```yml
- uses: prantlf/delete-cache-action@v2
  with:
    key: newchanges-linux-x64.zip-${{ github.sha }}
```

## Inputs

The following parameters can be specified using the `with` object:

### key

Type: `String`<br>

The cache key to delete. Mandatory.

### token

Type: `String`<br>
Default: `${{ github.token }}`

Authorization token to access the cache in the target repository. Either a GitHub personal access token or the GitHub workflow token. If not provided, the environment variable `GITHUB_TOKEN` will be used as a fallback. And if even that is not set, the GitHub workflow token from the action-execution context will be used as default.

## License

Copyright (C) 2023-2024 Ferdinand Prantl

Licensed under the [MIT License].

[MIT License]: http://en.wikipedia.org/wiki/MIT_License
