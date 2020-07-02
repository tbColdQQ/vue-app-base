/* eslint-disable */
/*
 * @Descripttion: 
 * @version: 
 * @Author: jie.niu
 * @Date: 2020-07-01 10:20:33
 * @LastEditors: jie.niu
 * @LastEditTime: 2020-07-02 15:22:02
 */ 
const merge = require('webpack-merge')
const path = require('path')
let config = require('./webpack.common')
config = merge(config, {
    mode: 'development',
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        contentBase: path.resolve(__dirname, 'public'),
        port: 8888,
        overlay: {
            warnings: true,
            errors: true
        },
        proxy: {
            '/api': {
                target: 'https://api.github.com',
                changeOrigin: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    }, 
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'eslint-loader',
                enforce: 'pre',
                options: {
                    formatter: require('eslint-friendly-formatter'), // 指定错误报告的格式规范
                    emitWarning: false // true：在命令行和控制台输出警告，不会使得编译失败 | false：会强制 eslint-loader 将 lint 错误输出为编译错误，同时也意味着 lint 错误将会导致编译失败
                }
            },
            {
                test: /\.vue$/,
                exclude: /node_modules/,
                loader: 'eslint-loader',
                enforce: 'pre',
                options: {
                    formatter: require('eslint-friendly-formatter'), // 指定错误报告的格式规范
                    emitWarning: false // true：在命令行和控制台输出警告，不会使得编译失败 | false：会强制 eslint-loader 将 lint 错误输出为编译错误，同时也意味着 lint 错误将会导致编译失败
                }
            }
        ]
    }
})
module.exports = config