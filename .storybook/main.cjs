const tsconfigPaths = require("vite-tsconfig-paths");
const svgr = require("vite-plugin-svgr");

module.exports = {
  stories: [
    "../src/components/**/*.stories.tsx",
    "../src/widgets/**/*.stories.tsx",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    {
      name: "@storybook/addon-postcss",
      options: {
        postcssLoaderOptions: {
          implementation: require("postcss"),
        },
      },
    },
  ],
  framework: "@storybook/react",
  core: {
    builder: "@storybook/builder-vite",
  },
  features: {
    storyStoreV7: true,
  },
  async viteFinal(config) {
    return {
      ...config,
      plugins: [...config.plugins, svgr(), tsconfigPaths.default()],
    };
  },
};
