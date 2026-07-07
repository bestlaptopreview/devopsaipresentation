import js from "@eslint/js";

export default [
  js.configs.recommended,
  {
    files: ["scripts/**/*.js"],
    languageOptions: {
      sourceType: "commonjs",
      globals: {
        require: "readonly",
        process: "readonly",
        console: "readonly",
        setTimeout: "readonly",
      },
    },
  },
];
