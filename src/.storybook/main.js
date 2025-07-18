module.exports = {
  stories: ["../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-a11y",
    "@storybook/addon-controls",
    "@storybook/addon-viewport"
  ],
  framework: {
    name: "@storybook/react",
    options: {}
  },
  docs: {
    autodocs: true
  }
};
