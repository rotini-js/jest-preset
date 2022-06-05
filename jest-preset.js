module.exports = {
  globals: {
    'ts-jest': {
      diagnostics: {
        ignoreCodes: [
          'TS151001'
        ]
      }
    }
  },
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: [
    '**/__tests__/**/*.test.+(ts|tsx)'
  ],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest'
  }
}
