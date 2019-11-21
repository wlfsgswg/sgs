const { resolve } = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const webpack = require("webpack");
module.exports = {
  // mode: 'production',//生产环境
  mode: "development", //开发环境
  // inline-source-map使用inline-source-map会把bundle错误一一映射到打包前出错的地方，并且把bundle.js.map文件直接注入打包文件
  // cheap-inline-source-map如果加个cheap，打包只告诉行，build速度更快
  // cheap-module-inline-source-map 加上module，引入的module里面的错误也能出来
  // eval打包最快
  devtool: "cheap-module-eval-source-map",
  entry: {
    bundle: "./index.js"
  },
  devServer: {
    contentBase: "./dist",
    // open: true,
    // historyApiFallback: true,
    port: 5555,
    hot: true,
    hotOnly: true,
    host: "127.0.0.1"
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
      cleanOnceBeforeBuildPatterns: ["**/*", "dist"]
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
  // optimization:{
  //     useExports:true,
  // },
  output: {
    filename: "[name].js",
    path: resolve(__dirname, "dist"),
    publicPath: "/" //加上./会造成webpack devserver找不到特定的页面，不加会导致打包的js引入失败
  }
};
// htmlwebpackplugin会在打包结束后自动生成一个html文件，并把打包生成的js自动引入到这个文件中
// plugins会在某一时刻自动替你做些事情
// 现在知道打包文件bundle.js文件出错，sourceMap它是一个映射关系，它能找到没打包前相对应哪里出错
