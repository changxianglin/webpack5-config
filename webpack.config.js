const path = require('path')

module.exports = {
  mode: 'development',
  devtool: false,

  devServer: {
    static: {
      directory: path.resolve(__dirname, './dist'),
    },
    open: true,
    hot: true,
    compress: false,
    port: 8080,
  }
}