const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
module.exports = {
    entry: './src/index.js',
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, 'dist')
    },
    mode: 'development',
    module: {
        rules:[
            {
                test: /\.png$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        name: '[name]_[hash:10].[ext]',
                        outputPath: 'images',
                        limit: 100000
                        // publicPath: path.resolve(__dirname, 'dist/images')
                    }
                }
            }, {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 2,
                            modules: true
                        }
                    },
                    'sass-loader',
                    'postcss-loader'
                ]
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'index.html'
        })
    ]
}