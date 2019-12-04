const path = require('path');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { developmentURL, port } = require('./config');

const filesToWatch = ['./**/*.php', './dist/*.js', './dist/*.css'];

module.exports = {
  entry: './src/js/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.bundle.js',
    publicPath: '/dist',
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: '../',
              hmr: process.env.NODE_ENV === 'development',
            },
          },
          // 'vue-style-loader',
          'css-loader',
          // 'postcss-loader'
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              plugins: [
                require('postcss-import'),
                require('tailwindcss'),
                require('autoprefixer'),
                require('cssnano')({ preset: 'default' }),
              ],
              minimize: true,
            },
          },
        ],
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10000,
              name: './fonts/[hash].[ext]',
              mimetype: 'application/font-woff',
              publicPath: function(url) {
                return url.replace(/fonts/, '../dist/fonts');
              },
            },
          },
        ],
      },
      {
        test: /\.svg$/,
        loader: 'vue-svg-loader',
      },
    ],
  },
  resolve: {
    alias: {
      vue: 'vue/dist/vue.js',
      jquery: 'jquery/dist/jquery.js',
    },
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
      ignoreOrder: false, // Enable to remove warnings about conflicting order
    }),
    new VueLoaderPlugin(),
    new BrowserSyncPlugin({
      host: 'localhost',
      port: port,
      files: filesToWatch,
      proxy: developmentURL,
    }),
  ],
  performance: {
    hints: false,
  },
};
