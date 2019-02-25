let API_TOKEN = 'be9354083b6bcdd223b7ac822103d2';
module.exports = {
  siteMetadata: {
    title: `Piotr Wolski`,
    description: `Piotr Wolski, Frontend Developer in Wroclaw. Contact me, tel.: 724 121 098, email: p.wolski1000@gmail.com.`,
    author: `Piotr Wolski`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Piotr Wolski Frontend Developer`,
        short_name: `Piotr Wolski`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/manifest-logo.png`, // This path is relative to the root of the site.
      },
      resolve: `gatsby-source-datocms`,
      options: {
        // You can find your read-only API token under the Settings > API tokens
        // section of your administrative area:
        apiToken: API_TOKEN,
  
        // If you are working on development/staging environment, you might want to
        // preview the latest version of records instead of the published one:
        previewMode: false,
  
        // Disable automatic reloading of content when some change occurs on DatoCMS:
        disableLiveReload: false,
  
        // Custom API base URL
        apiUrl: 'https://site-api.datocms.com',
      },
    },
    
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
}
