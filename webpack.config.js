const path = require('path');

module.exports = {
    output: { chunkFilename: 'js/[name].js?id=[chunkhash]' },
    resolve: {
        extensions: ["*", ".js", ".jsx", ".ts", ".tsx"],
        alias: {
            '@': path.resolve('resources/js'),
        },
    },
};
