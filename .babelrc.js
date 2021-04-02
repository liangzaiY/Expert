module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        useBuiltIns: "entry",
        corejs: "3.10.0",
        targets: {
          chrome: "60",
          ie: "11",
        },
      },
    ],
    [
      "@babel/preset-react",
      {
        development: process.env.NODE_ENV === "development",
      },
    ],
  ],
  plugins: [
    ["@babel/plugin-proposal-decorators", { legacy: true }],
    ["@babel/plugin-proposal-class-properties", { loose: true }],
    "@babel/plugin-syntax-dynamic-import",
  ],
};
