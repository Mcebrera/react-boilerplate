const path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');

module.exports = {
  entry: ['./src/index.js', 'webpack-hot-middleware/client'],
  output: {
    filename: 'bundle_index.js',
    path: path.resolve(__dirname, './public'),
    publicPath: '/'
  },
  mode: 'development',
  devtool: 'inline-source-map',
  module: {
    rules: [{ 
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: {
          presets: ["env", "react"]
        }
      },
      { test: /\.css$/, use: ['style-loader', 'css-loader'] }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({template: './src/index.html'}),
    new webpack.HotModuleReplacementPlugin(),
  ]
};