let API_TOKEN = process.env.API_TOKEN
API_TOKEN = 'be9354083b6bcdd223b7ac822103d2';
module.exports = {
  siteMetadata: {
    title: 'Piotr Wolski Frontend Developer',
  },
  plugins: [
    {
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
        // apiUrl: 'https://site-api.datocms.com',
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/img/`,
      },
    },
  ],
}





