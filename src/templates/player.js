import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import { Container } from '../components/common/container'

export default ({ data }) => {
  const { allAirtable } = data
  const player = allAirtable.nodes[0].data
  return (
    <Layout title={player.Player_Name}>
      <Container>
        <h1>{player.Nickname}</h1>
        <h3>{player.Player_Name}</h3>
        <p>{player.Bio}</p>
        {player.Glamor_Shot && <img src={player.Glamor_Shot[0].url} alt="" />}
      </Container>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    allAirtable(
      filter: { table: { eq: "Players" }, data: { Player_slug: { eq: $slug } } }
    ) {
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
          Bio
          Glamor_Shot {
            url
            thumbnails {
              large {
                url
              }
              full {
                url
              }
            }
          }
        }
      }
    }
  }
`
