module.exports = {
    maxWorkers: "50%",
    preset: "ts-jest",
    testEnvironment: "jsdom",
    verbose: true,
    silent: true,
    passWithNoTests: true,
    snapshotSerializers: ["jest-emotion"],
    collectCoverage: true,
    coverageReporters: ["text-summary"],
    transform: {
        "\\.m?jsx?$": "jest-esm-transformer"
    },
    moduleNameMapper: {
        "\\.svg": "@ssg-b2b/__devtools__/tests/svgrMock"
    },
    rootDir: "./",
    setupFilesAfterEnv: ["jest-extended", "<rootDir>/tests/jest-setup.js"],
};
