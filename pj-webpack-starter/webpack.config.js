const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
// 定义了一些文件夹的路径
const ROOT_PATH = path.resolve(__dirname);
const APP_PATH = path.resolve(ROOT_PATH, 'app');
const BUILD_PATH = path.resolve(ROOT_PATH, 'build');
// Template的文件夹路径
const TEM_PATH = path.resolve(ROOT_PATH, 'templates');

module.exports = {
  // 配置Server
  devServer: {
    contentBase: APP_PATH,
    historyApiFallback: true,
    hot: true,
    inline: true,
    compress: true,
    port: 9000,
    // 接口地址代理
    // proxy: {
    //   '/api/*': {
    //     target: 'http://localhost:5000',
    //     secure: false
    //   }
    // }
  },
  // 项目的文件夹 可以直接用文件夹名称 默认会找index.js 也可以确定是哪个文件名字
  entry: {
    app: path.resolve(APP_PATH, 'index.js'),
    mobile: path.resolve(APP_PATH, 'mobile.js'),
    // 添加要打包在vendors里面的库
    vendors: ['jquery', 'moment']
  },
  // 输出的文件名 合并以后的js会命名为[name].[hash].js
  output: {
    path: BUILD_PATH,
    filename: '[name].[hash].js'
  },
  module: {
    // css loader
    // loaders: [{
    //   test: /\.css$/,
    //   loaders: ['style-loader', 'css-loader'],
    //   include: APP_PATH
    // }]

    // preLoaders编译报错 不支持
    // preLoaders: [{
    //   test: /\.jsx?$/,
    //   include: APP_PATH,
    //   loader: 'jshint-loader'
    // }],
    loaders: [{
      test: /\.scss$/,
      loaders: ['style-loader', 'css-loader?sourceMap', 'sass-loader?sourceMap'],
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
  // 添加我们的插件 会自动生成一个html文件
  plugins: [
    // 这个使用uglifyJs压缩你的js代码
    // new webpack.optimize.UglifyJsPlugin({ minimize: true }),
    // 把入口文件里面的数组打包成verdors.js
    new webpack.optimize.CommonsChunkPlugin({ name: 'vendors', filename: 'vendors.js' }),
    // new HtmlWebpackPlugin({
    //   title: 'Hello World APP'
    // }),
    // 创建了两个HtmlWebpackPlugin的实例，生成两个页面
    new HtmlWebpackPlugin({
      title: 'Hello World App',
      template: path.resolve(TEM_PATH, 'index.html'),
      filename: 'index.html',
      // chunks这个参数告诉插件要引用entry里面的哪几个入口
      chunks: ['app', 'vendors'],
      // 要把script插入到标签里
      inject: 'body'
    }),
    new HtmlWebpackPlugin({
      title: 'Hello Mobile App',
      template: path.resolve(TEM_PATH, 'mobile.html'),
      filename: 'mobile.html',
      chunks: ['mobile', 'vendors'],
      inject: 'body'
    })
    // method 1
    // provide $, jQuery and window.jQuery to every script
    // new webpack.ProvidePlugin({
    //   $: "jquery",
    //   jQuery: "jquery",
    //   "window.jQuery": "jquery"
    // })
  ],
  devtool: 'eval-source-map',
  // jshint: {
  //   'esnext': true
  // },
};
