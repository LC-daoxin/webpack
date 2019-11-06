// const path = require('path');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
// const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack');
const merge = require('webpack-merge')
const commonConfig = require('./webpack.common')
const devConfig = {
    mode: 'development',
    /* optimization: {
        usedExports: true // tree shaking development
    }, */
    devtool: 'cheap-module-eval-source-map',
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    devServer: {
        inline: true,
        open: true,
        host: '0.0.0.0',
        port: 8080,
        compress: true,
        hot: true,
        // hotOnly: true
    }
}
module.exports = merge(commonConfig, devConfig)