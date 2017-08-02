/**
 * Created by rqzheng on 2017/8/2.
 */
//生成dll文件的webpack配置文件
const webpack = require('webpack');
const path = require('path');
const AssetsPlugin = require('assets-webpack-plugin');

const vendors = [
    'react',
    'react-dom',
    'react-router-dom',
    "redux",
    'react-redux',
    "localforage",
    'redux-logger',
    'redux-thunk',
];

module.exports = {
    output: {
        path: path.resolve('dist/js'),
        filename: '[name]_[chunkhash:6].js',
        library: '[name]',
    },
    entry: {
        "dll": vendors
    },
    plugins: [
        new webpack.DllPlugin({
            path: 'dist/config/manifest.json',
            name: '[name]',
            context: __dirname
        }),
        new AssetsPlugin({
            filename: 'bundle-config.json',
            path: 'dist/config/'
        }),
    ]
}