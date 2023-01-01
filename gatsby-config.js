module.exports = {
  // siteMetadata: {
  //   siteUrl: `https://sammychris.github.io`,
  // },
  // pathPrefix: "/sammychris.github.io",
  pathPrefix: "https://sammychris.github.io",
  siteMetadata: {
    title: `SammyChris`,
    description: `Samuel Christopher - Portfolio`,
    author: `@sammychris`,
    url: `https://sammychris.github.io`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: `${__dirname}/src/markdown-pages`,
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`, // Needed for dynamic images
  ],
};
