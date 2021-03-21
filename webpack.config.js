const path = require('path');
// THIS SHOULD BE DIFFERENT PER EACH COMPONENT
const pkg = require('./package.json');

const aliases = {
    '@kcubero27/button-demo': path.resolve(
        __dirname,
        './packages/button-demo/src/button.tsx'
    ),
};

const mode =
    process.env.NODE_ENV === 'test'
        ? 'development'
        : process.env.NODE_ENV || 'development';

module.exports = {
    mode,
    entry: {
        Button: path.resolve(
            __dirname,
            './packages/button-demo/src/button.tsx'
        ),
    },
    resolve: {
        alias: aliases,
        extensions: ['.ts', '.tsx', '.js'],
        modules: ['node_modules'],
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx|ts|tsx)$/,
                exclude: [/node_modules/],
                use: ['babel-loader'],
            },
            {
                test: /\.(ts|tsx)$/,
                exclude: [/node_modules/, /\.test.(ts|tsx)$/],
                use: ['ts-loader'],
            },
            {
                test: /\.(css|scss)$/,
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
    output: {
        filename: pkg.main,
        publicPath: '/',
        path: path.resolve(__dirname, 'dist'),
        libraryTarget: 'commonjs',
    },
    plugins: [],
};
