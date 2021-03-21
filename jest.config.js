module.exports = {
    modulePathIgnorePatterns: [
        'node_modules',
        '.storybook',
        'storybook-static',
        'cypress',
        'coverage',
    ],
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    moduleNameMapper: {
        '.+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2|svg)$':
            'jest-transform-stub',
    },
    transform: {
        '^.+\\.(ts|js|jsx|tsx)$': 'babel-jest',
    },
    verbose: true,
    setupFilesAfterEnv: ['<rootDir>/jest-setup.js'],
    testMatch: ['**/?(*.)+(test).[jt]s?(x)'],
};
