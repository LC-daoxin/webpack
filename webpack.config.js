const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    mode: 'development',
    /* optimization: {
        usedExports: true // tree shaking development
    }, */
    devtool: 'cheap-module-eval-source-map',
    entry: './src/index.js',
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, 'dist')
    },
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
            }, {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader",
                options: {
                    presets: [['@babel/preset-env',{ // 写业务代码用
                        targets: {
                            edge: "17",
                            firefox: "60",
                            chrome: "67",
                            safari: "11.1",
                        },
                        useBuiltIns: 'usage'
                    }]]
                    /* "plugins": [[
                        "@babel/plugin-transform-runtime", // 写库项目代码用
                        {
                            "absoluteRuntime": false,
                            "corejs": 2,
                            "helpers": true,
                            "regenerator": true,
                            "useESModules": false
                        }
                    ]] */
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'index.html'
        }),
        new CleanWebpackPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ],
    devServer: {
        inline: true,
        open: true,
        host: '0.0.0.0',
        port: 8080,
        compress: true,
        hot: true,
        hotOnly: true
    }
};