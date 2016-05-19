var path = require('path'),
  ROOT_PATH = __dirname,
  HtmlWebpackPlugin = require('html-webpack-plugin'),
  OpenBrowserPlugin = require('open-browser-webpack-plugin');
//todo bundle.[hash].js for production

var url = 'http://localhost:8080';

module.exports = {
  entry: [
    'webpack/hot/dev-server',
    'webpack-dev-server/client?'+url,
    path.resolve(ROOT_PATH,'client/src/main.jsx')],
  output:{
    path:'client/build/js/',
    filename: 'bundle.js',
    publicPath: 'js'
  },
  resolve:{
    extensions:['','.js','.jsx'],
    path: ROOT_PATH
  },
  module:{
    loaders:[
      {test:/\.jsx$|\.js$/, include: path.resolve(ROOT_PATH,'client/src'), loader:'babel'}
    ]
  },
  plugins:[
    new HtmlWebpackPlugin({
      title:'xls Drop',
      filename:'../index.html',
      template:'default_index.html'
    }),
    new OpenBrowserPlugin({url: url})
  ],
  node:{
    //https://github.com/webpack/jade-loader/issues/8 --webpack xlsx package errors
    fs:'empty'
  }
};