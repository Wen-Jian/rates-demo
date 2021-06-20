// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html

module.exports = {
  // Automatically clear mock calls and instances between every test
  clearMocks: true,

  // The directory where Jest should output its coverage files
  coverageDirectory: "coverage",

  moduleNameMapper: {
    "^.+\\.module\\.(css|sass|scss)$": "identity-obj-proxy",
  },

  // verbose: true,

  // testEnvironment: "@testing-library/jest-dom",
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["./tests/setupFile.js"],
};
