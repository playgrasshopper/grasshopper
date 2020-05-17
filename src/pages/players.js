import React from 'react'
import { Container } from '../components/common/container'
import Layout from '../components/layout'
import { Link, graphql } from 'gatsby'

export default ({ data }) => (
  <Layout title="Players">
    <Container>
      <h1>Players!</h1>
      <ul>
        {data.allAirtable.nodes.map(({ data }) => (
          <li>
            <Link to={`/player/${data.Player_slug}`}>{data.Player_Name}</Link>
          </li>
        ))}
      </ul>
    </Container>
  </Layout>
)

export const query = graphql`
  {
    allAirtable(filter: { table: { eq: "Players" } }) {
      nodes {
        data {
          Player_Name
          Player_slug
          League {
            data {
              Name
            }
          }
          Nickname
        }
      }
    }
  }
`
