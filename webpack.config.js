const webpack = require("webpack");
const path = require("path");

module.exports = {
  entry:  ['babel-polyfill',  "./src/index.js"],

  output: {
    path: path.resolve("public/assets"),
    filename: "bundle.js",
    publicPath: "assets"
  },
  devServer: {
    inline: true,
    contentBase: "./public",
    port: 3000,
    historyApiFallback: true
  },
  resolve: {
    extensions: [".js", ".jsx"],
    alias: {
      modules: path.join(__dirname, "/node_modules")
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: [
          {
            loader: "babel-loader",
            query: {
              presets: ["react"]
            }
          }
        ]
      },
      {
        test: /(\.css|\.scss)$/,
        loaders: ["style-loader", "css-loader"]
      }
    ]
  }
};
