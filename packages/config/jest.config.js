/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */

module.exports = {
  resetMocks: true,
  preset: 'ts-jest',
  testMatch: ['**/__tests__/**/*.ts?(x)', '**/?(*.)+(test).ts?(x)'],
  testEnvironment: 'jsdom',
}
