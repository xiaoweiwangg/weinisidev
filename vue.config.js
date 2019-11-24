
module.exports = {
  productionSourceMap: false,
  // assetsDir:"./",
  // publicPath:'../../',
  devServer: {
    proxy: "http://localhost:8088"
  }
};
