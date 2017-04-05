const path = require('path')
const webpack = require('webpack')

module.exports = function (env) {
  const nodeEnv = env && env.prod === 'true' ? 'production' : 'development'
  return {
    entry: { vendor: [path.join(__dirname, 'vendors.js')] },
    output: {
      path: path.join(__dirname, 'dll'),
      filename: 'dll.vendor_libs.js',
      library: 'vendor_libs'
    },
    plugins: [
      new webpack.DefinePlugin({ 'process.env': { NODE_ENV: JSON.stringify(nodeEnv) } }),
      new webpack.DllPlugin({
        path: path.join(__dirname, 'dll', 'vendor_libs-manifest.json'),
        name: 'vendor_libs',
        context: path.resolve(__dirname, 'src')
      }),
      new webpack.optimize.UglifyJsPlugin({
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
        output: { comments: false }
      })
    ],
    resolve: { modules: [path.resolve(__dirname, 'node_modules')] }
  }
}
