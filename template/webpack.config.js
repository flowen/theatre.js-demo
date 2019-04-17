const webpack = require('webpack')
const path = require('path')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = env => {
  const isProd = env && env.prod
  const config = {
    mode: isProd ? 'production' : 'development',
    performance: { hints: false },
    entry: {
      build: './src/index.js',
    },
    plugins: [
      new webpack.DefinePlugin({
        DEVELOPMENT: !isProd,
      }),
      new CopyWebpackPlugin([{ from: 'src/assets', to: 'assets' }]),
      new MiniCssExtractPlugin({
        // Options similar to the same options in webpackOptions.output
        // both options are optional
        filename: '[name].css',
        chunkFilename: '[id].css',
      }),
      new HtmlWebpackPlugin({
        template: './src/index.html',
        filename: 'index.html',
        title: isProd ? 'Production' : 'Development',
        meta: {
          viewport:
            'width=device-width, initial-scale=1, shrink-to-fit=no, maximum-scale=1.0, user-scalable=no',
        },
      }),
    ],
    output: {
      filename: '[name].js',
      path: path.resolve(__dirname, 'dist'),
    },
    module: {
      rules: [
        {
          test: /\.(glsl|vs|fs|vert|frag)$/,
          use: ['raw-loader', 'glslify-loader'],
        },
        {
          test: /\.js$/,
          use: {
            loader: 'babel-loader',
            options: {
              compact: false,
              presets: [['@babel/preset-env']],
            },
          },
        },
        {
          test: /\.css$/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
              options: {
                hmr: process.env.NODE_ENV === 'development',
              },
            },
            'css-loader',
          ],
        },
      ],
    },
  }

  if (!isProd) {
    config.devtool = '#source-map'
  }

  return config
}
