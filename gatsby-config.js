module.exports = {
  siteMetadata: {
    title: 'Piotr Wolski Frontend Developer',
  },
  plugins: [
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: 'd0v97bwihzbp',
        accessToken: '182b0d1015e9708603f95a5af715b69733eac2fa67956ba6405860a62b87c58a',
      }
    },
    'gatsby-plugin-react-helmet',

  ],
}