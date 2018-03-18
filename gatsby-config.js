module.exports = {
  siteMetadata: {
    title: "Teatralium",
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-styled-components",
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: 'UA-56018864-6',
      },
    },
  ],
}
