/**
 * @Author: Detcx 
 * @Date: 2018-09-30 09:44:59 
 * @Last Modified by: Detcx
 * @Last Modified time: 2018-11-20 17:39:53
 * @description development
 */

const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  mode: 'development',
  devtool: false,
  entry: './src/main.jsx', // index.jsx main.jsx entry.jsx
  output: {
    filename: 'js/[name]bundle.js',
    chunkFilename: 'js/[name].bundle[chunkhash:6].js', // 'js/[id].bundle[chunkhash:6].js'
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
    
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
      automaticNameDelimiter: '-'
    }
  },
  module: {
    rules: [
      {
        test: /\.(jsx?|es6)$/,
        exclude: path.resolve(__dirname, 'node_modules'),
        use: 'babel-loader'
      }
    ]
  },

  devServer: {
    hot: true,
    open: true,
    https: false,
    port: '8058',
    publicPath: '/',
    host: 'localhost',
    historyApiFallback: true,
    contentBase: path.resolve(__dirname, 'dist'),
  },

  resolve: {
    mainFields: ['main'],
    extensions: ['.js', '.jsx', '.es6'],
    modules: [path.resolve(__dirname, 'node_modules')]
  },

  plugins: [
    new CleanWebpackPlugin(['dist']),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      title: 'webpack-onDemand-v4',
	    favicon: __dirname + '/favicon.ico',
      template: __dirname + '/index.html'
    })
  ]
}
