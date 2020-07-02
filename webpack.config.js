/* eslint-disable */
/*
 * @Descripttion: 
 * @version: 
 * @Author: jie.niu
 * @Date: 2020-07-01 11:51:29
 * @LastEditors: jie.niu
 * @LastEditTime: 2020-07-02 11:31:00
 */ 

const prodConfig = require('./webpack.prod')
const config = require('./webpack.dev')

module.exports = (env, argsv) => {
    if(env === 'production') {
        return { ...prodConfig }
    }else {
        return { ...config }
    }
}