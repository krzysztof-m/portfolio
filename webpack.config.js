var path = require('path');

module.exports = {
  entry: {
    App: './src/js/tmp/app.js',
    Vendor: './src/js/tmp/vendor.js' 
  },
  output: {
    filename: '[name].js',
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