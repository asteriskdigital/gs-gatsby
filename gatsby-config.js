module.exports = {
  siteMetadata: {
    title: `My New Gatsby Site`,
    siteUrl: `https://asterisk.digital/demos/gatsby/`,
    description: `Description for my Gatsby site`,
    pathPrefix: `/demos/gatsby`,
  },
  plugins: [
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          name: `markdown-pages`,
          path: `${__dirname}/src/posts`,
        },
      },
      `gatsby-plugin-react-helmet`
    ]
}