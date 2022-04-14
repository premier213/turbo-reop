const path = require('path')
const base = require('config/jest.config.js')
const { compilerOptions } = require('./tsconfig')
const fromRoot = d => path.join(__dirname, d)
module.exports = {
  ...base,
  displayName: 'office Tests',
  modulePaths: [compilerOptions.baseUrl],
  moduleNameMapper: {
    '@src/(.*)': fromRoot('src/$1'),
  },
}
