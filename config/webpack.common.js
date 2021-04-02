const paths = require("./paths");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const imageInlineSizeLimit = 4 * 1024;
module.exports = function (options) {
  return {
    mode: options.mode,
    entry: paths.appSrc,
    output: {
      path: paths.appBuild,
      publicPath: "/",
    },
    cache: {
      // 使用持久化缓存
      type: "filesystem", //memory:使用内容缓存 filesystem：使用文件缓存
    },
    devtool: false,
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: [
            {
              loader: "babel-loader",
              // options: {
              //   presets: [
              //     [
              //       "@babel/preset-env",
              //       {
              //         useBuiltIns: "entry",
              //         corejs: "3.10.0",
              //         targets: {
              //           chrome: "60",
              //         },
              //       },
              //     ],
              //     "@babel/preset-react",
              //   ],
              // },
            },
          ],
        },
        {
          test: /\.(le|c)ss$/,
          exclude: /node_modules/, //排除node_modules下面的样式文件
          use: [
            {
              loader: "style-loader",
            },
            {
              loader: "css-loader",
            },
            {
              loader: "less-loader",
              options: {
                lessOptions: {
                  strictMath: true,
                },
              },
            },
          ],
        },
        {
          test: [/\.bmp$/, /\.gif$/, /\.jpg$/, /\.jpeg$/, /\.png$/],
          type: "asset",
          parser: {
            dataUrlCondition: {
              maxSize: imageInlineSizeLimit, //4kb
            },
          },
        },
        {
          test: /\.(eot|svg|ttf|woff|woff2)$/,
          type: "asset/resource",
        },
      ],
    },
    resolve: {
      modules: [paths.appNodeModules],
      extensions: [".js", ".jsx", ".css", ".ts", ".tsx", ".less"],
      alias: {
        moment$: "moment/moment.js",
        "@src": paths.appSrc,
        "@public": paths.appPublic,
      },
    },
    devServer: {},
    plugins: [
      new HtmlWebpackPlugin({
        template: "./public/index.html",
      }),
      ...options.plugins,
    ],
    stats: options.stats, // 打包日志发生错误和新的编译时输出
  };
};
