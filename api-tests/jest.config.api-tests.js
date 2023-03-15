module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  globals: {
    'ts-jest': {
      tsconfig: './api-tests/tsconfig.api-tests.json',
    },
  },
};
