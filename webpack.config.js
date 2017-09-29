'use strict';

const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports={
    entry:{
        index : './app.ts'
    },

    module:{
        rules:[ {
            test : /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
        }, {
            test : /\.css$/,
            exclude: /node_modules/,
            loader : ExtractTextPlugin.extract('style-loader','css-loader')
        },{
            test :/\.html/,
            loaders : ['html-loader']
        },{
            test :/\.inc/,
            loaders : ['html-loader']
        } ,{
            test: /\.(eot|woff|svg|ttf|woff2|gif)(\?|$)/,
            loader: 'url-loader?limit=1000&name=./[name].[ext]'
        },{
            test: /\.(png|jpg)$/,
            loader: 'url-loader?limit=1200'   //当图片大小超过limit后的参数大小，就会自动启动base64编码图片
        },{
            test: /\.ts$/,
            loader: ['ts-loader'],
            exclude : /node_modules/
        }]
    },
    resolve : {
        extensions: ['*', '.js', '.jsx','.json','.ts','.tsx','.css']            //解析模块，后缀名自动补全
    },

    devtool: 'inline-source-map'
};