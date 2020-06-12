import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import { TextContainer } from '../components/common/container'

export default ({ data }) => {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark
  return (
    <Layout title={frontmatter.title}>
      <TextContainer>
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </TextContainer>
    </Layout>
  )
}

export const query = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
      }
    }
  }
`
