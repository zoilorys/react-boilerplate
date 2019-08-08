const { join, resolve } = require('path');

const Dotenv = require('dotenv-webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

const { NODE_ENV, ANALYZE } = process.env;

const environment = NODE_ENV || 'development';
const isDev = environment === 'development';

module.exports = {
  mode: environment,
  devtool: isDev ? 'source-maps' : undefined,

  entry: join(__dirname, 'src', 'index.js'),
  output: {
    path: join(__dirname, 'dist'),
    publicPath: '/',
    filename: 'bundle.js',
  },

  resolve: {
    alias: {
      ...(isDev
        ? {
            'react-dom': '@hot-loader/react-dom',
          }
        : {}),
      'react-router-dom': 'react-router-dom',
      components: resolve(__dirname, 'src/components'),
      containers: resolve(__dirname, 'src/containers'),
      actions: resolve(__dirname, 'src/redux/actions'),
      helpers: resolve(__dirname, 'src/helpers'),
      api: resolve(__dirname, 'src/api'),
      services: resolve(__dirname, 'src/services'),
      config: resolve(__dirname, 'src/config'),
      assets: resolve(__dirname, 'src/assets'),
    },
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: [/node_modules/],
        use: [
          {
            loader: 'babel-loader',
            options: {
              ...(isDev
                ? {
                    plugins: ['react-hot-loader/babel'],
                    cacheDirectory: true,
                  }
                : null),
            },
          },
        ],
      },
      {
        test: /\.css$/,
        exclude: [/node_modules/],
        use: [
          ...(isDev ? ['css-hot-loader'] : []),
          { loader: MiniCssExtractPlugin.loader },
          { loader: 'css-loader', options: { importLoaders: 1, modules: true } },
          { loader: 'postcss-loader' },
        ],
      },
      {
        test: /\.(png|gif|jpg|jpeg|svg|xml)$/,
        use: ['file-loader'],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ['file-loader'],
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: join(__dirname, 'src', 'index.html'),
    }),
    new MiniCssExtractPlugin({
      filename: 'bundle.css',
    }),
    new Dotenv(),
    ...(ANALYZE ? [new BundleAnalyzerPlugin()] : []),
  ],

  optimization: {
    splitChunks: {
      chunks: 'all',
      minChunks: 2,
    },
  },

  devServer: {
    port: 3000,
    historyApiFallback: true,
  },
};
