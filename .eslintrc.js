module.exports = {
  extends: ["react-app", "prettier", "plugin:prettier/recommended"],
  plugins: ["prettier", "jest"],
  parser: "babel-eslint",
  env: {
    browser: true,
    es6: true,
    "jest/globals": true,
  },
  settings: {
    react: {
      version: "detect",
    },
  },
  rules: {
    "prettier/prettier": "warn",
  },
};