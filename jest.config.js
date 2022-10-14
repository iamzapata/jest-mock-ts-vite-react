export default {
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/jest-setup.ts"],
  moduleNameMapper: {
    "\\.(css|less)$": "identity-obj-proxy",
  },
}
