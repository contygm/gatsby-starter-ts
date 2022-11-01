module.exports = {
    transform: {
        '^.+\\.[jt]sx?$': '<rootDir>/jest-preprocess.js'
    },
    testPathIgnorePatterns: [
        `node_modules`,
        `\\.cache`,
        `<rootDir>.*/public`,
        `\\.dist`,
        `<rootDir>.*/static`,
        `node_modules/(?!(gatsby|gatsby-script|gatsby-link)/)`,
        '.*\\.d\\.ts$'
    ],
    globals: {
        __PATH_PREFIX__: ``
    },
    testEnvironmentOptions: {
        url: `http://localhost`
    },
    moduleNameMapper: {
        '\\.(css|scss)$': 'identity-obj-proxy'
    },
    setupFiles: [`<rootDir>/loadershim.js`],
    collectCoverage: true,
    collectCoverageFrom: ['src/**/*.{js, jsx, ts,tsx}'],
    coverageThreshold: {
        // fail if code coverage % is too low
        global: {
            lines: 90
        }
    },
    setupFilesAfterEnv: ['<rootDir>/__mocks__/utils.js'],
    testEnvironment: 'jsdom',
    verbose: true
};
