module.exports = {
  root: true,
  parserOptions: {
    // Required for certain syntax usages
    "ecmaVersion": 8,
  },
  env: {
    es6: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "google",
  ],
  rules: {
    quotes: ["error", "double"],
  },
};
