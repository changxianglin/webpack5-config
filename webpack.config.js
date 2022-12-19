const path = require('path')

let mode = 'development'

if(process.env.NODE_ENV === 'production') {
  mode = 'production'
}

module.exports = {
  mode: mode,
  devtool: "source-map",

  devServer: {
    static: {
      directory: path.resolve(__dirname, './dist'),
    },
    open: true,
    hot: true,
    compress: false,
    port: 8080,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        }
      }
    ]
  }
}