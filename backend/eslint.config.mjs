import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
    languageOptions: {
      globals: {
        ...globals.node, // Use Node.js global variables like `require` and `process`
        ...globals.es2021, // Modern JavaScript globals
      },
    },
    settings: {
      react: {
        version: "detect", // Automatically detect the React version
      },
    },
  },
  pluginJs.configs.recommended, // Include recommended JavaScript rules
  pluginReact.configs.flat.recommended, // Include recommended React rules
];
