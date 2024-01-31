const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const webpackConfig = {
  name: 'client',
  devServer: {
    static: './dist'
  },
  entry: {
    client: './src/index.js'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader'
      },
      {
        test: /\.js$/,
        use: 'ts-loader'
      },
      // Handle css imports using MiniCssExtractPlugin to create single styles.css
      // See plugin below
      {
        test: /\.css$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          'css-loader'
        ]
      }
    ]
  },
  optimization: {
    runtimeChunk: 'single'
  },
  plugins: [
    new webpack.ProgressPlugin(),
    new MiniCssExtractPlugin({
      filename: 'styles.css'
    }),
    // https://github.com/jantimon/html-webpack-plugin#options
    new HtmlWebpackPlugin() // uses index.ejs as the template for generating the index.html
  ],
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  }
};

module.exports = webpackConfig;
