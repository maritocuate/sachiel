const { resolve } = require('path')

// Plugins
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/js/main.js',

    output: {
        path: resolve(__dirname, '/build'),
        filename: 'bundle.js'
    },

    devServer: {
        contentBase: resolve(__dirname, 'public'),
        inline: true,
        publicPath: '/',
        port: 8600
    },

    devtool: 'inline-source-map',

    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.scss$/i,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
        ],
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ]
}