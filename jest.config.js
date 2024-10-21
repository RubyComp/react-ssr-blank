const nextJest = require('next/jest')

const createJestConfig = nextJest({
	dir: './',
})

const customJestConfig = {
	testEnvironment: 'jest-environment-jsdom',
	moduleNameMapper: {
		'^@/components/(.*)$': '<rootDir>/src/components/$1',
		'^@/hooks/(.*)$': '<rootDir>/src/hooks/$1',
		'^@/style/(.*)$': '<rootDir>/src/style/$1',
	},
	setupFilesAfterEnv: ['@testing-library/jest-dom'],
}

module.exports = createJestConfig(customJestConfig)
