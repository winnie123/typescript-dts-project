'use strict';

const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Merge = require('webpack-merge');
const CommonConfig = require('./webpack.config.js');

module.exports=Merge(CommonConfig, {
    output: {
        path: __dirname + '/_build',
        filename: 'js/[name].devBundle.js'
    },
    devServer: {
        contentBase: __dirname
    },
    plugins: [
        new HtmlWebpackPlugin({
            title:'Typescript 声明文件demo',
            filename:'index.html',
            template:'index.html'
        })
    ]
});