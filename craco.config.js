const CracoLessPlugin = require("craco-less");
const { primaryColor, deepGreen } = require("./src/colors");

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              "@primary-color": `${deepGreen}`,
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
