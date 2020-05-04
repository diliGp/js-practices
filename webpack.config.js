const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    mode: 'none',
    devServer: {
        contentBase: path.resolve(__dirname, 'dist'),
        hot: true,
        clientLogLevel: 'silent'
    },
    plugins: [
        new HtmlWebpackPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                        plugins: [
                            'transform-class-properties'
                        ]
                    }
                }

            },
            {
                test: /\.worker\.js$/i,
                loader: 'worker-loder'
            }
        ]
    }
}