module.exports = {
  /**
   * buildId - 字符串类型，构建的唯一标示
   * dev - Boolean型，判断你是否在开发环境下
   * isServer - Boolean 型，为true使用在服务端, 为false使用在客户端.
   * defaultLoaders - 对象型 ，内部加载器, 你可以如下配置
   *     babel - 对象型，配置 babel-loader.
   *     hotSelfAccept - 对象型， hot-self-accept-loader配置选项.这个加载器只能用于高阶案例。如 @zeit/next-typescript添加顶层 typescript 页面。
   */
  webpack: (config, { buildId, dev, isServer, defaultLoaders }) => {
    if (dev) {
      config.module.rules.push({
        test: /\.(js|jsx|ts|tsx)$/,
        loader: "eslint-loader",
        enforce: "pre", // 编译前检查
        exclude: [/node_modules/, /\.next/], // 不检测的文件
        // include: [resolve('src')], // 指定检查的目录
        options: {
          // 这里的配置项参数将会被传递到 eslint 的 CLIEngine
          formatter: require("eslint-friendly-formatter"), // 指定错误报告的格式规范
        },
      });
    }
    return config;
  },
};
