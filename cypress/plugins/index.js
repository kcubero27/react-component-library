module.exports = (on, config) => {
    config.env.webpackFilename = 'webpack.config.js';
    require('@cypress/react/plugins/load-webpack')(on, config, {
        // from the root of the project (folder with cypress.json file)
    });
    return config;
};
