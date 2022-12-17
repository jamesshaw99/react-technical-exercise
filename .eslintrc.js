module.exports = {
    env: {
    browser: true,
    es2021: true
    },
    extends: [
    'plugin:react/recommended',
    'standard'
    ],
    overrides: [
    ],
    parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
    },
    plugins: [
    'react'
    ],
    rules: {
        'indent': ['error', 4],
        'semi': ['error', 'always'],
        'react/boolean-prop-naming': 'off',
        'react/button-has-type': 'off',
        'react/default-props-match-prop-types': 'off',
        'react/destructuring-assignment': 'off',
        'react/display-name': 'off',
        'react/forbid-component-props': 'off',
        'react/forbid-dom-props': 'off',
        'react/forbid-elements': 'off',
        'react/forbid-foreign-prop-types': 'off',
        'react/forbid-prop-types': 'off',
        'react/function-component-definition': [
            'error',
            {
                'namedComponents': 'arrow-function',
                'unnamedComponents': 'arrow-function'
            }
        ],
        'react/jsx-boolean-value': 'off',
        'react/jsx-child-element-spacing': 'off',
        'react/jsx-closing-bracket-location': ['error', 'tag-aligned'],
        'react/jsx-closing-tag-location': 'error',
        'react/jsx-curly-brace-presence': [
            'error',
            {
                'children': 'never',
                'props': 'always'
            }
        ],
        'react/jsx-curly-newline': 'off',
        'react/jsx-curly-spacing': [
            'error',
            {
                'when': 'never',
                'children': true
            }
        ],
        'react/jsx-equals-spacing': ['error', 'never'],
        'react/jsx-filename-extension': 'off',
        'react/jsx-first-prop-new-line': ['error', 'never'],
        'react/jsx-fragments': ['error', 'element'],
        'react/jsx-handler-names': 'off',
        'react/jsx-indent': [
            'error',
            4,
            {
                'checkAttributes': true
            }
        ],
        'react/jsx-indent-props': 'error',
        'react/jsx-key': 'off',
        'react/jsx-max-depth': 'off',
        'react/jsx-max-props-per-line': 'error',
        'react/jsx-no-bind': [
            'error',
            {
                'allowArrowFunctions': true,
                'allowBind': true
            }
        ],
        'react/jsx-no-comment-textnodes': 'error',
        'react/jsx-no-duplicate-props': 'error',
        'react/jsx-no-literals': 'off',
        'react/jsx-no-script-url': 'off',
        'react/jsx-no-target-blank': 'error',
        'react/jsx-no-undef': 'error',
        'react/jsx-no-useless-fragment': 'error',
        'react/jsx-one-expression-per-line': 'off',
        'react/jsx-pascal-case': 'off',
        'react/jsx-props-no-multi-spaces': 'off',
        'react/jsx-props-no-spreading': 'off',
        'react/jsx-sort-default-props': 'error',
        'react/jsx-sort-props': [
            'error',
            {
                'ignoreCase': true
            }
        ],
        'react/jsx-space-before-closing': 'off', // Deprecated
        'react/jsx-tag-spacing': [
            'error',
            {
                'afterOpening': 'never',
                'beforeClosing': 'never',
                'beforeSelfClosing': 'always',
                'closingSlash': 'never'
            }
        ],
        'react/jsx-uses-react': 'error',
        'react/jsx-uses-vars': 'error',
        'react/jsx-wrap-multilines': [
            'error',
            {
                'arrow': 'parens-new-line',
                'assignment': 'parens-new-line',
                'condition': 'parens-new-line',
                'declaration': 'parens-new-line',
                'logical': 'ignore',
                'prop': 'ignore',
                'return': 'parens-new-line'
            }
        ],
        'react/no-access-state-in-setstate': 'error',
        'react/no-adjacent-inline-elements': 'error',
        'react/no-array-index-key': 'off',
        'react/no-children-prop': 'error',
        'react/no-danger': 'error',
        'react/no-danger-with-children': 'error',
        'react/no-deprecated': 'error',
        'react/no-did-mount-set-state': 'off',
        'react/no-did-update-set-state': 'off',
        'react/no-direct-mutation-state': 'off',
        'react/no-find-dom-node': 'off',
        'react/no-is-mounted': 'error',
        'react/no-multi-comp': 'off',
        'react/no-redundant-should-component-update': 'error',
        'react/no-render-return-value': 'error',
        'react/no-set-state': 'off',
        'react/no-string-refs': 'error',
        'react/no-this-in-sfc': 'error',
        'react/no-typos': 'error',
        'react/no-unescaped-entities': 'error',
        'react/no-unknown-property': 'error',
        'react/no-unsafe': 'off',
        'react/no-unused-prop-types': 'warn',
        'react/no-unused-state': 'error',
        'react/no-will-update-set-state': ['error', 'disallow-in-func'],
        'react/prefer-es6-class': ['error', 'always'],
        'react/prefer-read-only-props': 'off',
        'react/prefer-stateless-function': 'off',
        'react/prop-types': 'off',
        'react/react-in-jsx-scope': 'error',
        'react/require-default-props': 'off',
        'react/require-optimization': 'off',
        'react/require-render-return': 'error',
        'react/self-closing-comp': 'error',
        'react/sort-comp': 'error',
        'react/sort-prop-types': 'error',
        'react/state-in-constructor': ['error', 'always'],
        'react/static-property-placement': 'off',
        'react/style-prop-object': 'error',
        'react/void-dom-elements-no-children': 'error',
        'quotes': ['warn', 'backtick', { 'avoidEscape': true }],
        'accessor-pairs': ['warn', { setWithoutGet: true, getWithoutSet: false, enforceForClassMembers: true }],
            'array-bracket-newline': ['warn', 'consistent'],
            'array-bracket-spacing': ['error', 'never'],
            'array-callback-return': 'warn',
            'array-element-newline': ['warn', 'consistent'],
            'arrow-body-style': ['error', 'as-needed'],
            'arrow-parens': ['error', 'as-needed'],
            'arrow-spacing': ['error', { 'before': true, 'after': true }],
            'block-spacing': ['error', 'always'],
            'camelcase': ['error', { 'properties': 'always', 'ignoreDestructuring': true, 'ignoreImports': false }],
            'capitalized-comments': ['error', 'always', { 'ignoreInlineComments': true, 'ignoreConsecutiveComments': true }],
            'comma-dangle': 'error',
            'comma-style': ['error', 'last'],
            'computed-property-spacing': ['error', 'never'],
            'curly': ['error', 'all'],
            'default-case': 'warn',
            'dot-location': ['error', 'property'],
            'dot-notation': 'warn',
            'eol-last': 'warn',
            'eqeqeq': ['error', 'smart'],
            'for-direction': 'error',
            'func-name-matching': 'warn',
            'func-names': ['warn', 'always'],
            'function-call-argument-newline': ['warn', 'consistent'],
            'function-paren-newline': ['warn', 'consistent'],
            'generator-star-spacing': 'warn',
            'getter-return': 'error',
            'grouped-accessor-pairs': ['warn', 'getBeforeSet'],
            'guard-for-in': 'warn',
            'implicit-arrow-linebreak': ['warn', 'beside'],
            'jsx-quotes': ['error', 'prefer-single'],
            'key-spacing': 'error',
            'keyword-spacing': 'error',
            'lines-around-comment': ['warn', { 'allowBlockStart': true }],
            'lines-between-class-members': 'error',
            'max-classes-per-file': ['warn', 1],
            'max-len': ['error', { 'code': 210, 'ignoreRegExpLiterals': true, 'ignoreUrls': true }], // Might shorten later if too long
            'max-nested-callbacks': ['error', 5],
            'max-params': ['error', 7], // Use an object with keys instead...
            'max-statements-per-line': ['error', { 'max': 7 }], // Just to catch egregious cases
            'new-parens': ['error', 'always'],
            'newline-per-chained-call': ['error', { 'ignoreChainWithDepth': 2 }],
            'no-alert': 'error',
            'no-async-promise-executor': 'error',
            'no-await-in-loop': 'warn',
            'no-bitwise': ['warn', { "allow": ["<<", ">>", "|", "&"] }],
            'no-caller': 'error',
            'no-case-declarations': 'error',
            'no-compare-neg-zero': 'error',
            'no-cond-assign': 'error',
            'no-confusing-arrow': 'warn',
            'no-constant-condition': 'error',
            'no-constructor-return': 'error',
            'no-control-regex': 'error',
            'no-debugger': 'error',
            'no-delete-var': 'error',
            'no-dupe-args': 'error',
            'no-dupe-else-if': 'error',
            'no-dupe-keys': 'error',
            'no-duplicate-case': 'error',
            'no-duplicate-imports': 'error',
            'no-empty': 'error',
            'no-empty-character-class': 'error',
            'no-empty-pattern': 'error',
            'no-eval': 'error',
            'no-ex-assign': 'error',
            'no-extend-native': 'error',
            'no-extra-bind': 'error',
            'no-extra-boolean-cast': 'error',
            'no-fallthrough': 'error',
            'no-floating-decimal': 'error',
            'no-func-assign': 'error',
            'no-global-assign': 'error',
            'no-implicit-coercion': 'warn',
            'no-implied-eval': 'error',
            'no-import-assign': 'error',
            'no-inner-declarations': 'error',
            'no-invalid-regexp': 'error',
            //'no-invalid-this': 'error', // binding the function the the context in its signature invalidates this rule
            'no-irregular-whitespace': 'error',
            'no-iterator': 'error',
            'no-labels': 'error',
            'no-lone-blocks': 'error',
            'no-lonely-if': 'warn',
            'no-misleading-character-class': 'error',
            'no-mixed-spaces-and-tabs': 'error',
            'no-mixed-operators': 'error',
            'no-multi-spaces': 'error',
            'no-multi-str': 'warn',
            'no-multiple-empty-lines': ['error', { 'max': 1, 'maxEOF': 0 }],
            // 'no-nested-ternary': 'error', Temporarily removed whilst gauging how used this is.
            'no-new': 'warn',
            'no-new-func': 'error',
            'no-new-object': 'error',
            'no-new-wrappers': 'error',
            'no-obj-calls': 'error',
            'no-octal': 'error',
            'no-octal-escape': 'error',
            'no-param-reassign': 'error', // Might need to disable
            'no-proto': 'error',
            'no-prototype-builtins': 'error',
            'no-redeclare': 'error',
            'no-regex-spaces': 'error',
            'no-return-assign': 'error',
            'no-return-await': 'error',
            'no-script-url': 'error',
            'no-self-assign': 'error',
            'no-setter-return': 'error',
            'no-shadow': 'warn',
            'no-shadow-restricted-names': 'error',
            'no-sparse-arrays': 'error',
            'no-template-curly-in-string': 'warn',
            'no-trailing-spaces': 'error',
            'no-undef': 'error',
            'no-undef-init': 'error', // Use null instead...
            'no-unexpected-multiline': 'error',
            'no-unmodified-loop-condition': 'warn',
            'no-unneeded-ternary': 'error',
            'no-unreachable': 'error',
            'no-unsafe-finally': 'error',
            'no-unsafe-negation': 'error',
            'no-unused-labels': 'error',
            'no-unused-vars': 'off', // We use the typescript one instead
            'no-useless-call': 'error',
            'no-useless-catch': 'error',
            'no-useless-computed-key': 'error',
            'no-useless-concat': 'error',
            'no-useless-escape': 'error',
            'no-useless-rename': 'error',
            'no-useless-return': 'error',
            'no-var': 'error',
            'no-void': [
                'warn',
                {
                    'allowAsStatement': true
                }
            ],
            'no-with': 'error',
            'no-whitespace-before-property': 'error',
            'object-curly-newline': ['error', { 'multiline': true, 'consistent': true }],
            'object-curly-spacing': ['error', 'always'],
            'object-property-newline': 'warn',
            'object-shorthand': 'warn',
            'one-var': 'off', // Conflicts with sort-vars.
            'one-var-declaration-per-line': ['error', 'always'],
            // 'operator-linebreak': ['error', 'before'],
            // 'operator-linebreak': ['error', 'after'], // TODO (ASHLEY): Uncomment and fix this, commented because it breaks to build somehow
            'padded-blocks': ['error', 'never'],
            'padding-line-between-statements': [ // This one is really cool.
                'error',
                { 'blankLine': 'always', 'prev': 'const', 'next': '*' },
                { 'blankLine': 'always', 'prev': 'let', 'next': '*' },
                { 'blankLine': 'always', 'prev': 'multiline-const', 'next': '*' },
                { 'blankLine': 'always', 'prev': 'multiline-let', 'next': '*' },
                { 'blankLine': 'always', 'prev': 'import', 'next': '*' },
                { 'blankLine': 'never', 'prev': 'import', 'next': 'import' }
            ],
            'prefer-arrow-callback': ['error', { 'allowUnboundThis': false }],
            'prefer-const': 'error',
            // 'prefer-destructuring': 'warn',
            'prefer-exponentiation-operator': 'error',
            'prefer-numeric-literals': 'warn',
            'prefer-object-spread': 'error',
            'prefer-promise-reject-errors': 'error',
            'prefer-regex-literals': 'error',
            'prefer-rest-params': 'error',
            'prefer-spread': 'error',
            'prefer-template': 'error',
            'quote-props': ['warn', 'as-needed'],
            'require-atomic-updates': 'error',
            'require-yield': 'error',
            'rest-spread-spacing': ['error', 'never'],
            'semi-spacing': ['warn', { 'before': false, 'after': true }],
            'semi-style': 'warn',
            'sort-keys': ['warn', 'asc'],
            'sort-imports': [
                'error',
                {
                    'ignoreCase': true,
                    'memberSyntaxSortOrder': ['all', 'multiple', 'single', 'none']
                }
            ],
            'sort-vars': [
                'error',
                {
                    'ignoreCase': true
                }
            ],
            'space-before-blocks': ['warn', 'always'],
            'space-infix-ops': 'error',
            'space-unary-ops': ['error', { 'words': true, 'nonwords': false }],
            'spaced-comment': 'error',
            'switch-colon-spacing': 'error',
            'template-curly-spacing': 'warn',
            'template-tag-spacing': 'error',
            'use-isnan': 'error',
            'valid-typeof': 'error',
            'wrap-iife': ['error', 'inside'],
            'yield-star-spacing': 'warn',
            'yoda': ['error', 'never']
    },
    "settings": {
        "react": {
          "version": "detect"
        }
      }
}
