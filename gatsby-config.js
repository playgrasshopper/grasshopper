module.exports = {
  siteMetadata: {
    title: `Grasshopper`,
    description: `A serious sport that blends the best features of cricket, tennis, ultimate frisbee, soccer, baseball, and Super Mario Kart..`,
    author: `@playgrasshopper`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utilities/typography`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/content`,
        name: `content`,
      },
    },
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-airtable`,
      options: {
        apiKey: process.env.AIRTABLE_KEY,
        concurrency: 5,
        tables: [
          {
            baseId: `apptrTRbAB1QFZe05`,
            tableName: `Players`,
            tableLinks: [`League`],
          },
          {
            baseId: `apptrTRbAB1QFZe05`,
            tableName: `Games`,
            tableLinks: [`Game League`, `Game Scores`, `Game Hops`],
          },
          {
            baseId: `apptrTRbAB1QFZe05`,
            tableName: `Leagues`,
          },
          {
            baseId: `apptrTRbAB1QFZe05`,
            tableName: `Hops`,
          },
          {
            baseId: `apptrTRbAB1QFZe05`,
            tableName: `Magic`,
          },
          {
            baseId: `apptrTRbAB1QFZe05`,
            tableName: `Scores`,
            tableLinks: [`Player`],
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/logo.png`,
      },
    },
  ],
}
