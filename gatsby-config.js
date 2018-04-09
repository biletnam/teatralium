module.exports = {
  siteMetadata: {
    title: "Teatralium",
    siteUrl: `https://teatralium.com`
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-styled-components",
    "gatsby-transformer-json",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "UA-56018864-6"
      }
    },
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 1280,
              linkImagesToOriginal: false
            }
          }
        ]
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "img",
        path: `${__dirname}/src/pages/images/`
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "reviews",
        path: `${__dirname}/src/data/reviews/`
      }
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp"
  ]
};
