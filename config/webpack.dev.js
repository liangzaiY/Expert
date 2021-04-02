const paths = require("./paths");
module.exports = require("./webpack.common")({
  mode: "development",
  plugins: [
    new ESLintPlugin({
      fix: true, //启用eslint自动修复功能
      extensions: ["js", "jsx", "ts", "tsx"],
      context: paths.appSrc, //文件根目录
      exclude: "/node_modules", //指定要排除的文件/目录
      cache: true, //缓存
    }),
  ],
  stats: "errors-only", //只在发生错误或者有新的编译时输出
});
