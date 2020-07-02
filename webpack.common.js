/* eslint-disable */
/*
 * @Descripttion: 
 * @version: 
 * @Author: jie.niu
 * @Date: 2020-07-01 10:20:33
 * @LastEditors: jie.niu
 * @LastEditTime: 2020-07-02 11:51:40
 */
const path = require('path')
const { dirname } = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const templateParameters = {
    BASE_URL: 'http://www.baidu.com/'
}

module.exports = {
    entry: { // 配置多个入口
        main: './src/main.js',
        demo: './src/main.js'
    },
    output: {
        // 输出的文件名
        filename: 'js/[name].bundle.[chunkhash:8].js',
        // 输出的文件目录（绝对地址）
        path: path.resolve(__dirname, 'dist'),
        // 网站根目录
        publicPath: ''
    },
    // devtools: '',
    module: {
        rules: [
            {
                test: /.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader'
                ]
            },
            {
                test: /.less$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'less-loader'
                ]
            },
            {
                test: /\.(gif|jpg|jpeg|png|svg)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            esModule: false,    // file-loader 的配置
                            limit: 8 * 1024,
                            name: '[name].[ext]',
                            outputPath: 'assets/'   // file-loader 的配置
                        }
                    }
                ]
            },
            {
                test: '/.js$/',
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env']
                }
            },
            {
                test: /.vue$/,
                use: 'vue-loader',
                exclude: file => (
                    /node_modules/.test(file) &&
                    !/\.vue\.js/.test(file)
                )
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin(),
        new MiniCssExtractPlugin({
            filename: 'css/style.css'
        }),
        new HtmlWebpackPlugin({
            template: 'public/index.html',
            filename: 'index.html',
            chunks: ['main'],
            title: 'index',
            templateParameters
        }),
        new HtmlWebpackPlugin({
            template: 'public/index.html',
            filename: 'demo.html',
            chunks: ['demo'],
            title: 'demo',
            templateParameters
        }),
    ]

}