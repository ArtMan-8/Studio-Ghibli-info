const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports = {
  entry: { main: './src/main.js' },
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: './js/main.js'
  },
  devtool: `source-map`,
  devServer: {
    contentBase: path.resolve(__dirname, `./public`),
    watchContentBase: true
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use:  ['style-loader', MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/style.css',
    }),
    new HtmlWebpackPlugin({
      inject: false,
      hash: true,
      template: './src/index.html',
      filename: 'index.html'
    }),
    new HtmlWebpackPlugin({
      inject: false,
      hash: true,
      template: './src/films.html',
      filename: 'films.html'
    }),
    new HtmlWebpackPlugin({
      inject: false,
      hash: true,
      template: './src/peoples.html',
      filename: 'peoples.html'
    })
  ]
};
