module.exports = {
  extends: ["react-app", "prettier"],
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
    "@typescript-eslint/no-unused-vars": ["warn", { varsIgnorePattern: "^_" }],
    "prettier/prettier": "warn",
  },
};
