const { defineConfig } = require('@vue/cli-service');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    plugins: [
      new HtmlWebpackPlugin({
        title: 'Egor Zadorin\'s Website',
      }),
    ],
  },
});
