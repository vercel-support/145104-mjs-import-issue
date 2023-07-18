module.exports = {
  env: {
    "jest/globals": true,
  },
  extends: [
    "eslint:recommended",
    "next",
    "turbo",
    "next/core-web-vitals",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier",
  ],
  overrides: [],
  parser: "@typescript-eslint/parser",
  plugins: [
    "react",
    "react-hooks",
    "@typescript-eslint",
  ],
  root: true,
  rules: {
    "@typescript-eslint/ban-ts-comment": "warn",
    "@typescript-eslint/ban-types": "warn",
    "@typescript-eslint/no-empty-function": "warn",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-inferrable-types": "warn",
    "@typescript-eslint/no-unused-vars": "error",

    // if always in blocks
    "block-spacing": ["error", "always"],

    // enforce camelcase for variables (with exceptions)
    camelcase: ["error", { allow: ["_id", "_"] }],

    "eol-last": ["error", "always"],

    "import/order": [],
    "no-async-promise-executor": "warn",
    "no-extra-boolean-cast": "warn",

    // no multiple newlines
    "no-multiple-empty-lines": ["error", { max: 1, maxBOF: 0, maxEOF: 1 }],

    // no trailing whitespace
    "no-trailing-spaces": ["error", { ignoreComments: true }],

    // no unused vars
    "no-unused-vars": "off",
    "no-useless-escape": "off",

    // only allow let/const
    "no-var": ["error"],

    "prefer-const": "error",

    "prefer-rest-params": "warn",
    "react/no-unknown-property": ["error", { ignore: ["jsx", "global"] }],
    "react/prop-types": "off",

    "react/react-in-jsx-scope": "off",

    "space-before-function-paren": "off",

    // space after function declaration before brackets
    "space-before-blocks": ["error", "always"],
  },
  settings: {
    "import/internal-regex": "^shared-lib/",
  },
};
