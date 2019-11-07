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
        // host: '0.0.0.0',
        port: 8080,
        compress: true,
        hot: true,
        overlay: true,
        clientLogLevel: 'none', // 当使用内联模式(inline mode)时，会在开发工具(DevTools)的控制台(console)显示消息，例如：在重新加载之前，在一个错误之前，或者 模块热替换(Hot Module Replacement) 启用时。默认值是 info。
        // hotOnly: true
    }
}
module.exports = merge(commonConfig, devConfig)