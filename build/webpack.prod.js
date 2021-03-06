const path = require('path');
const webpack = require('webpack');
const { merge } = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpackBaseConfig = require('./webpack.base.js');

module.exports = merge(webpackBaseConfig, {
    devtool: 'source-map',
    mode: 'production',
    entry: {
        main: path.resolve(__dirname, '../src/index.js')
    },
    output: {
        path: path.resolve(__dirname, '../lib'),
        filename: 'zf-ui.min.js',
        publicPath: '/lib/',
        library: 'zf-ui',
        libraryTarget: 'umd',
        umdNamedDefine: true
    },
    externals: {
        vue: {
            root: 'Vue',
            commonjs: 'vue',
            commonjs2: 'vue',
            amd: 'vue'
        }
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
        }),
        new MiniCssExtractPlugin({
            filename: 'styles/zf-ui.min.css'
        })
    ]
});
