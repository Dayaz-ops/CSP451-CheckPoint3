export default [
  {
    ignores: ["coverage/**", "node_modules/**"],
  },
  {
    files: ["**/*.js"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "commonjs"
    },
    rules: {
      "no-unused-vars": "error",
      "no-undef": "error"
    }
  }
];
