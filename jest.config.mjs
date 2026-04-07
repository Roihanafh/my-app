import nextJest from 'next/jest.js'

const createJestConfig = nextJest({
  dir: './',
})

const config = {
  testEnvironment: 'jsdom',
  modulePaths: ['<rootDir>/src/'],
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
  collectCoverage: true,
  collectCoverageFrom: [
    'src/pages/**/*.{ts,tsx}',
    'src/components/**/*.{ts,tsx}',
    '!**/*.d.ts',
    '!**/node_modules/**',
    '!**/.next/**',
    '!**/coverage/**',
    '!**/pages/api/**',
    '!**/__test__/**',
    '!src/middleware.ts',
    '!src/pages/_app.tsx',
    '!src/pages/_document.tsx',
  ],
}

export default createJestConfig(config)