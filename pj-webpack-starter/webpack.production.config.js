const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const ROOT_PATH = path.resolve(__dirname);
const APP_PATH = path.resolve(ROOT_PATH, 'app');
const BUILD_PATH = path.resolve(ROOT_PATH, 'build');
const TEM_PATH = path.resolve(ROOT_PATH, 'templates');

module.exports = {
  entry: {
    app: path.resolve(APP_PATH, 'index.js'),
    mobile: path.resolve(APP_PATH, 'mobile.js'),
    vendors: ['jquery', 'moment']
  },
  output: {
    path: BUILD_PATH,
    filename: '[name].[hash].js'
  },
  module: {
    loaders: [{
      test: /\.scss$/,
      loaders: ['style-loader', 'css-loader', 'sass-loader'],
      include: APP_PATH
    }, {
      test: /\.(png|jpg)$/,
      loader: 'url-loader?limit=40000'
    }, {
      test: /\.jsx?$/,
      loader: 'babel-loader',
      include: APP_PATH,
      query: {
        presets: ['es2015']
      }
    }]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({ minimize: true }),
    new webpack.optimize.CommonsChunkPlugin({ name: 'vendors', filename: 'vendors.js' }),
    new HtmlWebpackPlugin({
      title: 'Hello World App',
      template: path.resolve(TEM_PATH, 'index.html'),
      filename: 'index.html',
      chunks: ['app', 'vendors'],
      inject: 'body'
    }),
    new HtmlWebpackPlugin({
      title: 'Hello Mobile App',
      template: path.resolve(TEM_PATH, 'mobile.html'),
      filename: 'mobile.html',
      chunks: ['mobile', 'vendors'],
      inject: 'body'
    })
  ]
};
