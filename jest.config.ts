import type { Config } from '@jest/types'

const config: Config.InitialOptions = {
  testEnvironment: 'jest-environment-jsdom',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  moduleNameMapper: {
    '^@/(.+)': '<rootDir>/src/$1',
    '\\.(css|scss)$': 'identity-obj-proxy'
  },
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
    '\\.(webp|svg|png|jpg|jpeg|gif)$': '<rootDir>/jestFileTransformer.js'
  },
  setupFilesAfterEnv: ['<rootDir>/testingLibrary.config.ts'],
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.jest.json'
    },
    envMode: 'test',
    basePath: ''
  },
  testMatch: [
    '**/src/tests/**/*.test.+(ts|tsx|js|jsx)',
    '**/src/components/**/*.test.+(ts|tsx|js|jsx)',
    '**/src/hooks/**/*.test.+(ts|tsx|js|jsx)',
    '**/src/ducks/**/*.test.+(ts|tsx|js|jsx)'
  ]
}

export default config
