module.exports = {
  parser: "babel-eslint",
  rules: {
    semi: 0,
    quotes: [2, "single"]
  },
  extends: ["airbnb"],
  parserOptions: {
    ecmaVersion: 6,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true
    }
  }
};
