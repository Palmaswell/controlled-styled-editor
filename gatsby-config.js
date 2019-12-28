module.exports = {
  siteMetadata: {
    siteName: 'Style Editor',
    title: 'Style Editor',
    description: 'Style Editor experiment',
    lang: 'en-US'
  },
  plugins: [
    'gatsby-plugin-theme-ui',
    'gatsby-plugin-typescript',
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography',
      },
    },
  ],
};
