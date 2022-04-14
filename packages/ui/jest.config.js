const base = require('../../jest.config')

module.exports = {

  ...base,
  "globals": {
    "ts-jest": {
      "tsConfig": "./tsconfig.json"
    }
  }
  name: 'ui',
  displayName: 'ui Tests',
  testEnvironment: 'node',
}
