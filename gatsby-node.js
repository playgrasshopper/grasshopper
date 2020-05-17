const path = require(`path`)
exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions
  const contentTemplate = path.resolve(`src/templates/content.js`)
  const playerTemplate = path.resolve(`src/templates/player.js`)
  const leagueTemplate = path.resolve(`src/templates/league.js`)
  const gameTemplate = path.resolve(`src/templates/game.js`)
  const result = await graphql(`
    {
      allMarkdownRemark(limit: 1000) {
        edges {
          node {
            frontmatter {
              path
            }
          }
        }
      }
      players: allAirtable(filter: { table: { eq: "Players" } }) {
        nodes {
          data {
            Player_slug
          }
        }
      }
      leagues: allAirtable(filter: { table: { eq: "Leagues" } }) {
        nodes {
          data {
            League_slug
          }
        }
      }
      games: allAirtable(filter: { table: { eq: "Games" } }) {
        nodes {
          recordId
        }
      }
    }
  `)
  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }
  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.path,
      component: contentTemplate,
      context: {},
    })
  })

  result.data.players.nodes.forEach(({ data }) => {
    createPage({
      path: `/player/${data.Player_slug}`,
      component: playerTemplate,
      context: { slug: data.Player_slug },
    })
  })

  result.data.leagues.nodes.forEach(({ data }) => {
    createPage({
      path: `/league/${data.League_slug}`,
      component: leagueTemplate,
      context: { slug: data.League_slug },
    })
  })

  result.data.games.nodes.forEach(node => {
    createPage({
      path: `/game/${node.recordId}`,
      component: gameTemplate,
      context: { recordId: node.recordId },
    })
  })
}
