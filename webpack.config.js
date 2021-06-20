const path = require("path");
module.exports = {
  entry: ["babel-polyfill", "./app.jsx"],
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "./"),
  },
  module: {
    rules: [
      {
        test: /.js(x)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          //   options: { presets: ["@babel/preset-react"] },
        },
      },
      {
        test: /\.module\.s(a|c)ss$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: true,
              sourceMap: true,
            },
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: true,
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx", ".module.scss", ".scss"],
  },
  devServer: {
    port: 3000,
  },
};
