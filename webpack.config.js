var path = require('path');

module.exports = {
  entry: './src/js/tmp/vendor.js',
  output: {
    filename: 'Vendor.js',
    path: path.resolve(__dirname, 'src/js')
  },
  module: {
    loaders:  [
      {
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        },
        test: /\.js$/,
        exclude: /node_modules/
      }
    ]
  }
};