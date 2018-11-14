const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const appDir = '../app';
const distDir = '../dist';

module.exports = {
  entry: path.join(__dirname, appDir, 'app.js'),
  output: {
    path: path.join(__dirname, distDir),
    filename: 'bundle.js'
  },
  mode: process.env.NODE_ENV || 'development',
  resolve: {
    modules: [path.resolve(__dirname, appDir), 'node_modules']
  },
  devServer: {
    contentBase: path.join(__dirname, appDir)
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, appDir, 'index.html')
    })
  ]
}