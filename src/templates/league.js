import React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../components/layout'
import { Container } from '../components/common/container'

export default ({ data }) => {
  const { allAirtable } = data
  const league = allAirtable.nodes[0].data
  return (
    <Layout title={league.Name}>
      <Container>
        <h1>{league.Name}</h1>
        <h2>Players</h2>
        <ul>
          {league.Players.map(({ data }) => (
            <li>
              <Link to={`/player/${data.Player_slug}`}>{data.Player_Name}</Link>
            </li>
          ))}
        </ul>
      </Container>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    allAirtable(
      filter: { table: { eq: "Leagues" }, data: { League_slug: { eq: $slug } } }
    ) {
      nodes {
        data {
          Name
          Players {
            data {
              Player_Name
              Player_slug
            }
          }
        }
      }
    }
  }
`
