module.exports = {
    "env": {
        "node": true
    },
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "project": "tsconfig.json",
        "sourceType": "module"
    },
    "plugins": [
        "@typescript-eslint",
    ],
    "extends": [
        "eslint:recommended",
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/recommended"
    ],
    "rules": {
        "@typescript-eslint/array-type": "error",
        "@typescript-eslint/ban-types": "error",
        "@typescript-eslint/class-name-casing": "error",
        "@typescript-eslint/interface-name-prefix": "error",
        "@typescript-eslint/no-explicit-any": "error",
        "@typescript-eslint/no-inferrable-types": "error",
        "@typescript-eslint/no-require-imports": "error",
        "@typescript-eslint/no-unnecessary-type-assertion": "off",
        "@typescript-eslint/restrict-plus-operands": "off",
        "arrow-body-style": "error",
        "curly": "error",
        "no-debugger": "error",
        "no-multiple-empty-lines": "error",
        "no-new-wrappers": "error",
        "no-return-await": "error",
        "no-throw-literal": "error",
        "no-var": "error",
        "object-shorthand": "error",
        "prefer-const": "error",
        "radix": "error",
        "use-isnan": "error",
    }
};
