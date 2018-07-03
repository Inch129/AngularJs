
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: './js/index.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js',
    publicPath: "dist/"
  },
  watch: true,
  module: {
        rules: [
            {
                test: /\.js/,
                loader: 'babel-loader',
                exclude: /(node_modules)/,
                options: { 
                  presets: ['env']
                }
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
            }
        ]},

    watchOptions: {
      aggregateTimeout: 200
    },

    devServer: {
      overlay: true
    }

};