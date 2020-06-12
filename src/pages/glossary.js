import React, { Fragment } from 'react'
import { graphql } from 'gatsby'
import { Container } from '../components/common/container'
import Layout from '../components/layout'

export default ({ data }) => (
  <Layout title="Glossary">
    <Container>
      <dl>
        {data.allGlossaryYaml.nodes.map(({ term, definition }) => (
          <Fragment key={term} t>
            <dt>{term}</dt>
            <dd>{definition}</dd>
          </Fragment>
        ))}
      </dl>
    </Container>
  </Layout>
)

export const query = graphql`
  query {
    allGlossaryYaml(sort: { fields: term }) {
      nodes {
        term
        definition
      }
    }
  }
`
