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
            test: /\.scss$/i,
            use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader']
          },
        ],
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ]
}