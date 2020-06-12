import React, { Fragment } from 'react'
import { graphql } from 'gatsby'
import slugify from 'slugify'
import { Container } from '../components/common/container'
import Layout from '../components/layout'
import styled from '@emotion/styled'

const Glossary = styled.dl`
  dt {
    font-weight: bold;
  }
`
export default ({ data }) => (
  <Layout title="Glossary">
    <Container>
      <Glossary>
        {data.allGlossaryYaml.nodes.map(({ term, definition }) => (
          <Fragment key={term} t>
            <dt id={slugify(term)}>{term}</dt>
            <dd>{definition}</dd>
          </Fragment>
        ))}
      </Glossary>
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
