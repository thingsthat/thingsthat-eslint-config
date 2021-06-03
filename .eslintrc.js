module.exports = {
    env: {
        node: true,
        es6: true,
        mocha: true,
    },
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module',
    },
    extends: [
        'eslint:recommended',
        'plugin:vue/vue3-strongly-recommended',
        'plugin:i18next/recommended',
    ],
    plugins: [
        'jsdoc',
        'vue',
        'i18next',
    ],
    rules: {
        'prefer-template': 2,
        'no-case-declarations': 0,
        'no-cond-assign': 0,
        'no-irregular-whitespace': 2,
        'no-unexpected-multiline': 2,
        'valid-jsdoc': 0,
        'curly': [2, 'multi-line'],
        'no-caller': 2,
        'no-extend-native': 2,
        'no-extra-bind': 2,
        'no-invalid-this': 2,
        'no-multi-spaces': 2,
        'no-multi-str': 2,
        'no-new-wrappers': 2,
        'no-throw-literal': 2,
        'no-with': 2,
        'no-unused-vars': [2, {
            'args': 'none',
        }],
        'array-bracket-newline': 0,
        'array-bracket-spacing': [2, 'never'],
        'array-element-newline': 0,
        'block-spacing': [2, 'never'],
        'brace-style': 2,
        'camelcase': [2, {
            'properties': 'never',
        }],
        'comma-dangle': [2, 'always-multiline'],
        'comma-spacing': 2,
        'comma-style': 2,
        'computed-property-spacing': 2,
        'eol-last': 2,
        'func-call-spacing': 2,
        'indent': [
            'error', 4, {
                'CallExpression': {
                    'arguments': 2,
                },
                'FunctionDeclaration': {
                    'body': 1,
                    'parameters': 2,
                },
                'FunctionExpression': {
                    'body': 1,
                    'parameters': 2,
                },
                'MemberExpression': 2,
                'ObjectExpression': 1,
                'SwitchCase': 1,
                'ignoredNodes': [
                    'ConditionalExpression',
                ],
            },
        ],
        'key-spacing': 2,
        'keyword-spacing': 2,
        'linebreak-style': 2,
        'max-len': 0,
        'no-console': 0,
        'no-array-constructor': 2,
        'no-mixed-spaces-and-tabs': 2,
        'no-multiple-empty-lines': [2, {
            'max': 2,
        }],
        'no-new-object': 2,
        'no-tabs': 2,
        'no-trailing-spaces': 0,
        'object-curly-spacing': 2,
        'one-var': [2, {
            'var': 'never',
            'let': 'never',
            'const': 'never',
        }],
        'padded-blocks': 0,
        'quote-props': [2, 'consistent'],
        'quotes': [2, 'single', {
            'allowTemplateLiterals': true,
        }],
        'require-jsdoc': 0,
        'semi': 2,
        'semi-spacing': 2,
        'space-before-blocks': 2,
        'space-before-function-paren': [2, {
            'asyncArrow': 'always',
            'anonymous': 'never',
            'named': 'never',
        }],
        'spaced-comment': [2, 'always'],
        'switch-colon-spacing': 2,
        'arrow-parens': [2, 'always'],
        'constructor-super': 2,
        'generator-star-spacing': [2, 'after'],
        'no-new-symbol': 2,
        'no-this-before-super': 2,
        'no-var': 2,
        'prefer-const': ['error', {
            'destructuring': 'all',
        }],
        'prefer-rest-params': 2,
        'prefer-spread': 2,
        'rest-spread-spacing': 2,
        'yield-star-spacing': [2, 'after'],
        'no-useless-escape': 0,

        'jsdoc/check-alignment': 1, 
        'jsdoc/check-examples': 1,
        'jsdoc/check-indentation': 1,
        'jsdoc/check-param-names': 1, 
        'jsdoc/check-syntax': 1,
        'jsdoc/check-tag-names': 1, 
        'jsdoc/check-types': 1, 
        'jsdoc/implements-on-classes': 1, 
        'jsdoc/match-description': 1,
        'jsdoc/newline-after-description': 1, 
        'jsdoc/no-types': 0,
        'jsdoc/no-undefined-types': 1, 
        'jsdoc/require-description': 1,
        'jsdoc/require-description-complete-sentence': 1,
        'jsdoc/require-example': 0,
        'jsdoc/require-hyphen-before-param-description': 1,
        'jsdoc/require-param': 1, 
        'jsdoc/require-param-description': 1, 
        'jsdoc/require-param-name': 1, 
        'jsdoc/require-param-type': 1, 
        'jsdoc/require-returns': 0, 
        'jsdoc/require-returns-check': 1, 
        'jsdoc/require-returns-description': 1, 
        'jsdoc/require-returns-type': 1, 
        'jsdoc/valid-types': 1,
        'jsdoc/require-jsdoc': 0,
    
        'vue/no-v-html': 0,
        'vue/html-indent': ['error', 4, {
            'attribute': 2,
            'baseIndent': 1,
            'closeBracket': 0,
            'alignAttributesVertically': false,
        }],
        'vue/singleline-html-element-content-newline': 0,
        'vue/no-bare-strings-in-template': 1,

        'vue/no-deprecated-destroyed-lifecycle': 0,
        'vue/no-deprecated-v-on-native-modifier': 0,
        'vue/no-deprecated-filter': 0,
        'vue/no-deprecated-dollar-scopedslots-api': 0,

        'vue/max-attributes-per-line': ['error', {
            'singleline': {
                'max': 4,
                'allowFirstLine': true,
            },      
            'multiline': {
                'max': 1,
                'allowFirstLine': false,
            },
        }],

        'i18next/no-literal-string': [1, {
            'ignoreAttribute': ['class'],
            'ignore': ['active'],
        }],
    },
};
