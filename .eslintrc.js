module.exports = {
    parser: '@typescript-eslint/parser',
    parserOptions: {
        files: ['*.ts', '*.tsx', '*.js', '*.jsx'],
        sourceType: 'module',
        tsconfigRootDir: './',
    },
    ignorePatterns: ['tailwind.config.js'],
    plugins: ['@typescript-eslint/eslint-plugin', 'prettier', 'simple-import-sort'],
    extends: ['next', 'plugin:@typescript-eslint/recommended', 'plugin:prettier/recommended'],
    root: true,
    env: {
        node: true,
        jest: true,
    },
    rules: {
        'simple-import-sort/imports': 'error',
        'simple-import-sort/exports': 'error',
        'no-console': 2,
        '@typescript-eslint/interface-name-prefix': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-namespace': 'off',
        '@typescript-eslint/no-unused-vars': 'off',
        '@next/next/no-img-element': 'off',
    },
    overrides: [
        {
            parserOptions: {
                project: ['./tsconfig.json'], // Specify it only for TypeScript files
            },
            files: ['**/*.js', '**/*.jsx', '**/*.ts', '**/*.tsx'],
            rules: {
                'simple-import-sort/imports': [
                    'error',
                    {
                        groups: [
                            // starts with next,
                            ['^next'],
                            // `react` first,
                            // then starts with react,
                            // then ahooks,
                            ['^react$', '^next', '^react', '^@react', '^ahooks'],
                            // antd related packages,
                            ['^antd'],
                            // Recoil related packages
                            ['^recoil', '^@store'],
                            // any package starts with @
                            ['^@'],
                            // Packages starting with a character
                            ['^[a-z]'],
                            // Packages starting with `@` with multi class
                            ['^@components'],
                            ['^@library'],
                            ['^@store'],
                            ['^@styles'],
                            ['^@public'],
                            // Packages starting with `~`
                            ['^~'],
                            // Packages starting with `~~`
                            ['^~~'],
                            // Imports starting with `../`
                            ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
                            // Imports starting with `./`
                            ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
                            // Style imports
                            ['^.+\\.s?css$'],
                            // Side effect imports
                            ['^\\u0000'],
                        ],
                    },
                ],
            },
        },
    ],
};
