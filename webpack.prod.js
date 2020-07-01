/*
 * @Descripttion: 
 * @version: 
 * @Author: jie.niu
 * @Date: 2020-07-01 10:20:33
 * @LastEditors: jie.niu
 * @LastEditTime: 2020-07-01 16:09:11
 */ 
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const merge = require('webpack-merge')

let config = require('./webpack.common')
config = Object.assign({}, config, {
    mode: 'production'
})
const newConfig = {
    mode: 'production',
    plugins: [
        new CleanWebpackPlugin()
    ]
}

module.exports = merge(config, newConfig)