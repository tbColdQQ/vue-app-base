/* eslint-disable */
/*
 * @Descripttion: 
 * @version: 
 * @Author: jie.niu
 * @Date: 2020-07-01 10:20:33
 * @LastEditors: jie.niu
 * @LastEditTime: 2020-07-01 14:19:17
 */ 
let config = require('./webpack.common')
config = Object.assign({}, config, {
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: 'eslint-loader',
                enforce: 'pre'
            }
        ]
    }
})
module.exports = config