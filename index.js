module.exports = {
    'extends': 'airbnb-base/legacy',
    'globals': {
    },
    'settings': {
    },
    'rules': {
        //set to warning
        'comma-dangle': [1, 'always-multiline'],
        'space-before-function-paren': [1, { 'anonymous': 'always', 'named': 'never' }],
        'quotes': [ 1, 'single', { 'avoidEscape': true }],
        'object-curly-spacing': [1, 'always'],
        'spaced-comment': [1, 'always', { 'exceptions': ['-', '+'], 'markers': ['=', '!'] }],
        'space-infix-ops': 1,
        'key-spacing': [1, { 'beforeColon': false, 'afterColon': true }],
        'space-before-blocks': 1,
        'comma-spacing': [1, { 'before': false, 'after': true }],
        'no-unused-vars': [1, { 'vars': 'local', 'args': 'after-used' }],
        'no-else-return': 1,
        'no-multi-spaces': 1,
        'new-cap': [1, { 'newIsCap': true }],
        'one-var': [1, 'never'],
        'no-spaced-func': 1,
        'no-unused-expressions': 1,
        'no-nested-ternary': 1,
        'newline-per-chained-call': [1, { 'ignoreChainWithDepth': 4 }],
        'global-require': 1,
        'import/no-unresolved': [1, { 'commonjs': true }],
        'no-underscore-dangle': [1, { 'allowAfterThis': false }],
        'wrap-iife': [1, 'outside'],

        //turned off
        'radix': 0,
        'strict': 0,
        'consistent-return': 0,
        'padded-blocks': 0,
        'no-param-reassign': 0,
        'quote-props': 0,
        'vars-on-top': 0,
        'indent': [1, 4, { 'SwitchCase': 1 }],
        'max-len': 0,
        'no-console': 2,
        'func-names': 0,
        'no-shadow': [1, {'allow': ['err']}],
        'callback-return': [2, ['callback', 'cb', 'next', 'done']],
        'no-use-before-define': [1, {'functions': false}],
    }
};
