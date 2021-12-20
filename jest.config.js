module.exports = {
    maxWorkers: "50%",
    preset: "ts-jest",
    testEnvironment: "jsdom",
    verbose: true,
    silent: true,
    passWithNoTests: true,
    snapshotSerializers: ["@emotion/jest"],
    collectCoverage: true,
    coverageReporters: ["text-summary"],
    rootDir: "./",
    setupFilesAfterEnv: ["jest-extended", "<rootDir>/tests/jest-setup.js"],
};
