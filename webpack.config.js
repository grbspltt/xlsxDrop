var path = require('path'),
  ROOT_PATH = __dirname,
  HtmlWebpackPlugin = require('html-webpack-plugin');
//todo bundle.[hash].js for production
module.exports = {
  entry: [
    'webpack/hot/dev-server',
    'webpack-dev-server/client?http://localhost:8080',
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
      {test:/\.jsx$/, include: path.resolve(ROOT_PATH,'client/src'), loader:'babel'}
    ]
  },
  plugins:[new HtmlWebpackPlugin({
    title:'xls Drop',
    filename:'../index.html',
    template:'default_index.html'
  })]
};