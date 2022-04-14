const path = require('path')

const fromRoot = d => path.join(__dirname, d)

module.exports = {
  roots: [
    fromRoot('apps/front'),
    fromRoot('apps/office'),
    fromRoot('packages/ui'),
  ],
  resetMocks: true,
  coveragePathIgnorePatterns: [],
  collectCoverageFrom: ['<rootDir>/**/*.{js,ts,tsx}'],
  coverageThreshold: null,
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.tsx?$': 'esbuild-jest',
    '^.+\\.jsx?$': 'esbuild-jest',
  },
  setupFilesAfterEnv: ['@testing-library/jest-dom'],
  moduleDirectories: ['node_modules'],
  moduleFileExtensions: ['js', 'jsx', 'json', 'ts', 'tsx'],
  moduleNameMapper: {
    '@front/(.*)': fromRoot('apps/front/src/$1'),
    '@office/(.*)': fromRoot('apps/office/src/$1'),
    '@ui/(.*)': fromRoot('packages/ui/src/$1'),
  },
}
