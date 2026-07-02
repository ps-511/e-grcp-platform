module.exports = {
  testEnvironment: "jsdom",

  setupFilesAfterEnv: [
    "<rootDir>/src/tests/setupTests.js"
  ],

  transform: {
    "^.+\\.[jt]sx?$": "babel-jest"
  },

  moduleNameMapper: {
    "\\.(css|scss|sass)$": "identity-obj-proxy"
  },

  testMatch: [
    "**/src/tests/**/*.test.jsx",
    "**/src/tests/**/*.test.js"
  ],

  collectCoverage: true,

  collectCoverageFrom: [
    "src/**/*.{js,jsx}",
    "!src/main.jsx",
    "!src/tests/**"
  ],

  coverageDirectory: "coverage",

  coverageReporters: [
    "text",
    "html",
    "lcov"
  ]
};