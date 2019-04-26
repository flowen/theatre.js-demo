const webpack = require('webpack')
const path = require('path')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const WebpackMd5Hash = require('webpack-md5-hash')
// const CleanWebpackPlugin = require('clean-webpack-plugin')
const WriteFilePlugin = require('write-file-webpack-plugin')

module.exports = env => {
  const isProd = env && env.prod
  const config = {
    mode: isProd ? 'production' : 'development',
    performance: { hints: false },
    entry: {
      build: './src/index.js',
    },
    plugins: [
      // new CleanWebpackPlugin('dist', {}),
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
      new WebpackMd5Hash(),
      new WriteFilePlugin(),
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
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              compact: false,
              presets: [['@babel/preset-env']],
            },
          },
        },
        {
          test: /\.scss$/,
          use: [
            'style-loader',
            MiniCssExtractPlugin.loader,
            'css-loader',
            'postcss-loader',
            'sass-loader',
          ],
        },
        // {
        //   test: /\.css$/,
        //   use: [
        //     {
        //       loader: MiniCssExtractPlugin.loader,
        //       options: {
        //         hmr: process.env.NODE_ENV === 'development',
        //       },
        //     },
        //     'css-loader',
        //   ],
        // },
        {
          test: /\.mp3$/,
          loader: 'file-loader',
        },
      ],
    },
  }

  if (!isProd) {
    config.devtool = '#source-map'
  }

  return config
}
