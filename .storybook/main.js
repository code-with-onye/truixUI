
module.exports = {
  stories: ['../stories/**/*.stories.@(ts|tsx|js|jsx|mdx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-a11y',
    {
    name: '@storybook/addon-postcss',
     options: {
      postcssLoaderOptions: {
        implementation: require('postcss'),
      },
    },
   },
  ],
   
  // https://storybook.js.org/docs/react/configure/typescript#mainjs-configuration
  typescript: {
    check: true, // type-check stories during Storybook build
  },
};
