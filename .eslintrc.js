const { Template } = require("webpack");

module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": "plugin:vue/vue3-strongly-recommended",
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "vue"
    ],
    "rules": {
        "vue/html-closing-bracket-newline": ["error", {
            "singleline": "never",
            "multiline": "never"
        }],
        "vue/html-self-closing": ["error", {
        "html": {
            "void": "always",
            "normal": "never",
            "component": "always"
        },
        "svg": "always",
        "math": "always"
        }],
        'vue/multi-word-component-names': 'off'
    }
}
