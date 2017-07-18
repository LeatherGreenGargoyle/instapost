module.exports = {
    "extends": "airbnb",
    "rules": {
        "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
        "react/prop-types": 0,
        "semi": ["error", "never"],
        "no-console": "off",
        "arrow-parens": [2, "as-needed", { "requireForBlockBody": false }],
        "max-len": ["error", 500],
        "no-param-reassign": "off",
        "no-undef": "off",
        "arrow-body-style": "off",
        "no-unused-expressions": ["error", { "allowShortCircuit": true, "allowTernary": true }],
        "linebreak-style": "off",
        "newline-per-chained-call": "off",
        "prefer-stateless-function": [0, { "ignorePureComponents": true }],
        "no-underscore-dangle": ["error", { "allowAfterThis": true }],
        "no-unneeded-ternary": "off",
        "no-plusplus": "off",
        "react/jsx-no-bind": [0, {"allowBind": true}],
        "class-methods-use-this": ["error", { "exceptMethods": ["setToken", "getProfile", "getToken", "logout"] }] 
    }
};