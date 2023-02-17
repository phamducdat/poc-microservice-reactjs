const path = require('path');

module.exports = {
    entry: './src/components',
    output: {
        path: path.resolve(__dirname, 'dist'),
        library: 'MyComponent',
        libraryTarget: 'umd',
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
        ],
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
};
