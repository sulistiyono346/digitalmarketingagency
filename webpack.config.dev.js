const merge = require("webpack-merge");
const commonConfig = require("./webpack.config.common");

module.exports = merge(commonConfig, {
  mode: "development",
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.svg/,
        use: ["@svgr/webpack"],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          {
            loader: "css-loader", // translates CSS into CommonJS
            options: {
              importLoaders: 1,
            },
          },
          "postcss-loader", // post process the compiled CSS
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        type: "asset/resource",
        generator: {
          // adding a hash to the file
          filename: "images/static/[name].[hash][ext]",
        },
      },
    ],
  },
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000,
  },
  devServer: {
    historyApiFallback: true,
  },
});
