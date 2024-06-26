# Changes

## [3.0.0](https://github.com/prantlf/delete-cache-action/compare/v2.0.6...v3.0.0) (2024-05-07)

### Bug Fixes

* Upgrade dependencies ([8602b37](https://github.com/prantlf/delete-cache-action/commit/8602b37ff32530cf4ca95c446f459d4593070ecb))
* Update built files ([925110d](https://github.com/prantlf/delete-cache-action/commit/925110de41e6e64bfd28cd3bd95324af4d815b6a))

### BREAKING CHANGES

The minimum Node.js version is 20 now. Use the latest
build images and upgrade other GitHub actions too.

## [2.0.6](https://github.com/prantlf/delete-cache-action/compare/v2.0.5...v2.0.6) (2023-10-27)

### Bug Fixes

* Update built files ([84dd34e](https://github.com/prantlf/delete-cache-action/commit/84dd34eee8531715bbd275cdc42927b166db2a88))

## [2.0.5](https://github.com/prantlf/delete-cache-action/compare/v2.0.4...v2.0.5) (2023-10-27)

### Bug Fixes

* Add URL to the failed request error message ([f57bccc](https://github.com/prantlf/delete-cache-action/commit/f57bccc2260cd6ad20265e746038f064b2137e4b))

## [2.0.4](https://github.com/prantlf/delete-cache-action/compare/v2.0.3...v2.0.4) (2023-10-27)

### Bug Fixes

* Wait 5-10s between failing network requet attempts ([7807e88](https://github.com/prantlf/delete-cache-action/commit/7807e88325cd184e3634cf5ee6cf174501b64ac0))

## [2.0.3](https://github.com/prantlf/delete-cache-action/compare/v2.0.2...v2.0.3) (2023-10-21)

### Bug Fixes

* Correct package URLs ([0280b37](https://github.com/prantlf/delete-cache-action/commit/0280b37145e205cd5e4e352ad553376866684a97))

## [2.0.2](https://github.com/prantlf/delete-cache-action/compare/v2.0.1...v2.0.2) (2023-10-21)

### Bug Fixes

* Update the npm package version ([e6107e9](https://github.com/prantlf/delete-cache-action/commit/e6107e98a2c320b02ce873f93d38263c0a93f2a6))

## [2.0.1](https://github.com/prantlf/delete-cache-action/compare/v2.0.0...v2.0.1) (2023-10-21)

### Bug Fixes

* Change icon and user agent ([ec24db0](https://github.com/prantlf/delete-cache-action/commit/ec24db09f4ad4d468191075690c99b2d828c8bbb))

## [2.0.0](https://github.com/prantlf/delete-cache-action/compare/v1.0.0...v2.0.0) (2023-10-19)

### Chores

* Bump Node.js version from 16 to 20 ([1327b1f](https://github.com/prantlf/delete-cache-action/commit/1327b1fb7b1e6ac19d685fd30507849b0737ded0))

### BREAKING CHANGES

Although I do not know what could break, because this action
runs with its own Node.js version, such change in the build environment might
break something unexpectedly. For example, Node.js prefers IPV6 to IPV4 since
17. However, there are no known problems or migration steps necessary.

## 1.0.0 (2023-10-19)

Initial release
