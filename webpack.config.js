const webpack = require('webpack')
const HappyPack = require('happypack')
const path = require('path')
// const autoprefixer = require('autoprefixer')

const sourcePath = path.join(__dirname, './src')
const staticsPath = path.join(__dirname, './static')

module.exports = function () {

  const nodeEnv = process.env.NODE_ENV ? 'production' : 'development'
  const isProd = nodeEnv === 'production'

  const plugins = [
    new webpack.DefinePlugin({ 'process.env': { NODE_ENV: JSON.stringify(nodeEnv) } }),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      children: true,
      async: true,
      minChunks: Infinity
    }),
    new HappyPack({
      verbose: false,
      id: 'scss',
      threads: 2,
      loaders: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader']
    }),
    new HappyPack({
      verbose: false,
      id: 'eslint',
      threads: 2,
      loaders: ['eslint-loader']
    }),
    new HappyPack({
      verbose: false,
      id: 'js',
      threads: 2,
      loaders: ['babel-loader?cacheDirectory']
    }),
    new webpack.DllReferencePlugin({
      context: path.join(__dirname, 'dll'),
      manifest: require('./dll/vendor_libs-manifest.json')
    })
  ]
  let methods = []
  if (isProd) {
    plugins.push(
      new webpack.optimize.UglifyJsPlugin({
        sourceMap: false,
        compress: {
          warnings: false,
          screw_ie8: true,
          conditionals: true,
          unused: true,
          comparisons: true,
          sequences: true,
          dead_code: true,
          evaluate: true,
          if_return: true,
          join_vars: true,
        },
        output: { comments: false },
      })
    )
  } else { plugins.push(new webpack.HotModuleReplacementPlugin()) }
  return {
    devtool: isProd ? 'source-map' : 'eval',
    cache: true,
    context: sourcePath,
    entry: { main: './index.ts' },
    output: {
      path: staticsPath,
      publicPath: '/static/',
      filename: 'bundle.js'
    },
    module: {
      rules: [
        ...methods,
        {
          test: /\.tsx$/,
          enforce: 'pre',
          exclude: [/node_modules/],
          loader: 'tslint-loader',
          options: { /* Loader options go here */ }
        },
        {
          test: /\.tsx$/,
          exclude: [/node_modules/],
          loader: ['awesome-typescript-loader']
        },
        {
          test: /\.js$/,
          exclude: [/node_modules/],
          use: ['happypack/loader?id=js', 'happypack/loader?id=eslint']
        },
        {
          test: /\.scss$/,
          exclude: [/node_modules/],
          use: ['happypack/loader?id=scss']
        },
        {
          test: /\.(eot|svg|ttf|woff|woff2)$/,
          use: ['file-loader?name=./fonts/[name].[ext]']
        },
        {
          test: /\.(jpe?g|png|gif|svg)$/i,
          exclude: [/node_modules/],
          use: ['url-loader?limit=10000', 'img-loader?progressive=true']
        }
      ]
    },
    resolve: {
      extensions: ['.jsx', '.js', '.tsx', '.ts', '.scss'],
      modules: [path.resolve(__dirname, 'node_modules')]
    },
    plugins,
    performance: isProd && {
      maxAssetSize: 100000,
      maxEntrypointSize: 600000,
      hints: 'warning'
    },
    stats: { colors: { green: '\u001b[32m' } },
    devServer: {
      contentBase: './',
      historyApiFallback: true,
      port: 3000,
      compress: isProd,
      inline: !isProd,
      hot: !isProd,
      stats: {
        assets: true,
        children: false,
        chunks: false,
        hash: false,
        modules: false,
        publicPath: false,
        timings: true,
        version: false,
        warnings: true,
        colors: { green: '\u001b[32m' }
      }
    }
  }
}
