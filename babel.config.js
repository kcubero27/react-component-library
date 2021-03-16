const { NODE_ENV } = process.env;
const isTest = NODE_ENV === 'test';

module.exports = {
    presets: [
        [
            '@babel/preset-env',
            {
                ...(isTest && { targets: { node: true } }),
                ...(!isTest && {
                    targets: {
                        browsers: [
                            'last 2 Chrome versions',
                            'last 2 Firefox versions',
                            'last 2 Safari versions',
                            'last 2 iOS versions',
                            'last 1 Android version',
                            'last 1 ChromeAndroid version',
                        ],
                    },
                }),
            },
        ],
        [
            '@babel/preset-react',
            {
                runtime: 'automatic',
            },
        ],
        '@babel/preset-typescript',
    ],
    plugins: ['@babel/plugin-proposal-class-properties'],
};
