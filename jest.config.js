/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/configuration
 */

module.exports = {
  roots:["<rootDir>/src"],
  collectCoverage: true,
  coverageDirectory: "coverage",
  coverageProvider: "v8",
  collectCoverageFrom:["<rootDir>/src/**/*.ts"],
  transform:{
    '.+\\.ts$' : 'ts-jest'
  }

  
};
