const path = require('path');

const { NODE_ENV, BABEL_ENV, COMPONENT } = process.env;
const mode = NODE_ENV === 'test' ? 'development' : NODE_ENV || 'development';

// TODO: avoid creating types. For that, we have a new build:types command
module.exports = {
    mode,
    devtool: 'source-map',
    // TODO: how to create a .js file of each .ts or tsx file?
    entry: path.resolve(__dirname, `./packages/${COMPONENT}/index.ts`),
    resolve: {
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
                loader: 'ts-loader',
            },
            {
                test: /\.(css|scss)$/,
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
    output: {
        filename: '[name].js',
        path: path.resolve(
            __dirname,
            `packages/${COMPONENT}/dist/${BABEL_ENV}`
        ),
    },
    plugins: [],
};
