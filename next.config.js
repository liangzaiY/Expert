const path = require("path");

if (typeof require !== "undefined") {
  require.extensions[".less"] = (file) => {};
}
module.exports = {
  cssModules: true, // 开启css modules
  future: {
    webpack5: true,
  },
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
};
