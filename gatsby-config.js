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
     {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "data",
        path: `${__dirname}/src/data`
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "img",
        path: `${__dirname}/src/pages/images/`
      }
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp"
  ],
}
