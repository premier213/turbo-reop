const path = require('path')
const base = require('config/jest.config.js')
const { compilerOptions } = require('./tsconfig')
const fromRoot = d => path.join(__dirname, d)
const nextJest = require('next/jest')
const createJestConfig = nextJest({
  dir: './',
})
const customJestConfig = {
  ...base,
  displayName: 'front Tests',
  modulePaths: [compilerOptions.baseUrl],
  moduleNameMapper: {
    '@src/(.*)': fromRoot('src/$1'),
  },
  moduleDirectories: ['node_modules', '<rootDir>/'],
  testEnvironment: 'jest-environment-jsdom',
}

module.exports = createJestConfig(customJestConfig)
