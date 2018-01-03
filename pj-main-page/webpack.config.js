'use strict';
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const webpack = require('webpack');
// 定义了一些文件夹的路径
const ROOT_PATH = path.resolve(__dirname);
const APP_PATH = path.resolve(ROOT_PATH, 'app');
const BUILD_PATH = path.resolve(ROOT_PATH, 'build');
// Template的文件夹路径
const TEM_PATH = path.resolve(ROOT_PATH, 'app');
const COMPASS_PATH = path.resolve(ROOT_PATH, "node_modules/compass-mixins/lib");

module.exports = {
  // 配置Server
  devServer: {
    contentBase: APP_PATH,
    historyApiFallback: true,
    hot: true,
    inline: true,
    compress: true,
    port: 9000,
  },
  entry: {
    app: path.resolve(APP_PATH, 'index.js'),
  },
  output: {
    path: BUILD_PATH,
    filename: 'index.js'
  },
  module: {
    loaders: [{
      test: /\.scss$/,
      use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: ['css-loader', 'sass-loader?includePaths[]=' + COMPASS_PATH]
      })
    }, {
      test: /\.(png|jpg)$/,
      loader: 'url-loader?limit=5120'
    }]
  },
  plugins: [
    new ExtractTextPlugin('styles.css'),
    new HtmlWebpackPlugin({
      template: path.resolve(TEM_PATH, 'index.html'),
      filename: 'index.html',
    }),
  ]
};
