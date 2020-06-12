import React from 'react'
import { Container } from '../components/common/container'
import Layout from '../components/layout'
import { Link, graphql } from 'gatsby'

export default ({ data }) => (
  <Layout title="Leagues">
    <Container>
      <h1>Leagues!</h1>
      <ul>
        {data.allAirtable.nodes.map(({ data }) => (
          <li>
            <Link to={`/league/${data.League_slug}`}>{data.Name}</Link>
          </li>
        ))}
      </ul>
    </Container>
  </Layout>
)

export const query = graphql`
  query {
    allAirtable(
      filter: { table: { eq: "Leagues" } }
      sort: { fields: data___Name }
    ) {
      nodes {
        data {
          Name
          League_slug
        }
      }
    }
  }
`
