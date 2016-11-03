const webpack = require('webpack');
const prod = process.argv.indexOf('-p') !== -1;


const config = {
  entry: './src/index.js',
  output: {
    path: './build',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js/,
        loader: 'babel'
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      process: {
        env: {
          NODE_ENV: prod? '"production"':'"development"'
        }
      }
    })
  ]
}

if (prod) {
  config.plugins.push(new webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: false,
      screw_ie8: true
    }
  }));
}

module.exports = config;
