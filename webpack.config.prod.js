// Plugins
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'production',

    entry: './src/js/main.js',

    output: {
        path: __dirname + '/build',
        //path: path.resolve(__dirname, '/build'),
        filename: 'bundle.js'
    },

    devtool: 'inline-source-map',

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            },
            {
                exclude: [/\.html$/, /\.(js|jsx)$/, /\.css$/, /\.json$/],
                loader: 'url-loader',
                options: {
                    limit: false,
                    name: 'assets/[hash:8].[ext]',
                },
            },
            {
                test: /\.scss$/i,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
        ],
    },

    optimization: {
        splitChunks: {
          chunks: 'all',
          minSize: 0,
          name: 'vendor',
        },
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ]
}