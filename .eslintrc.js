module.exports = {
    parser: '@typescript-eslint/parser', // Specifies the ESLint parser
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended'
    ],
    settings: {
        react: {
            version: 'detect'
        }
    },
    env: {
        browser: true,
        node: true,
        es6: true
    },
    plugins: ['@typescript-eslint', 'react'],
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        },
        ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
        sourceType: 'module' // Allows for the use of imports
    },
    rules: {
        'react/prop-types': 'off', // Disable prop-types as we use TypeScript for type checking
        '@typescript-eslint/explicit-function-return-type': 'off'
    },
    ignorePatterns: [
        '__mocks__/**/*',
        '.gitignore',
        '.prettierignore',
        'loadershim.js'
    ],
    overrides: [
        // Override some TypeScript rules just for .js files
        {
            files: ['*.js'],
            rules: {
                '@typescript-eslint/no-var-requires': 'off' //
            }
        }
    ]
};
