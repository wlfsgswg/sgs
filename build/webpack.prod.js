const { resolve } = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
module.exports = {
  mode: "production", //生产环境
  devtool: "cheap-module--source",
  entry: {
    bundle: "./index.js"
  },
  module: {
    rules: [
      {
        test: /\.(png|jpg|gif|jpeg)$/,
        use: [
          {
            loader: "url-loader"
            // options: {
            //   name: "[name]_[hash].[ext]",
            //   outputPath: "images/",
            //   limit: 2048
            // }
          }
        ]
      },
      {
        test: /\.(ttf|otf)$/,
        use: ["url-loader"]
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.less$/,
        use: ["style-loader", "css-loader", "less-loader"]
        // 去解析less文件时，不仅要装less-loader还要装less
      },
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
      { test: /\.jsx$/, exclude: /node_modules/, loader: "babel-loader" }

      // babel-loader只是用来和webpack打通@babel/preset-env才是用来转换的模块
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html"
    }),
    new CleanWebpackPlugin({
      root: resolve(__dirname, "../dist"),
      cleanOnceBeforeBuildPatterns: ["**/*", "dist"]
    })
  ],

  performance: {
    hints: "warning", // 枚举
    maxAssetSize: 30000000, // 整数类型（以字节为单位）
    maxEntrypointSize: 50000000, // 整数类型（以字节为单位）
    assetFilter: function(assetFilename) {
      // 提供资源文件名的断言函数
      return assetFilename.endsWith(".css") || assetFilename.endsWith(".js");
    }
  },
  output: {
    filename: "[name]_[hash].js",
    path: resolve(__dirname, "../dist"),
    publicPath: "/" //加上./会造成webpack devserver找不到特定的页面，不加会导致打包的js引入失败
  }
};
// htmlwebpackplugin会在打包结束后自动生成一个html文件，并把打包生成的js自动引入到这个文件中
// plugins会在某一时刻自动替你做些事情
// 现在知道打包文件bundle.js文件出错，sourceMap它是一个映射关系，它能找到没打包前相对应哪里出错
