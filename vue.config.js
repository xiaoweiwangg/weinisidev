
module.exports = {
  productionSourceMap: false,
  // assetsDir:"./",
  // publicPath:'./',
  devServer: {
    proxy: "http://localhost:8088/"
  },
  transpileDependencies: ['webpack-dev-server/client'],
 chainWebpack: config => {
  config.entry.app = ['babel-polyfill', './src/main.js'];
 }
};
