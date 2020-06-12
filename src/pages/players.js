import React from 'React'
import { Container } from '../components/common/container'
import Layout from '../components/layout'
import PlayerList from '../components/common/player-list'
import { graphql } from 'gatsby'

export default ({ data }) => (
  <Layout title="Players">
    <Container>
      <h1>Players!</h1>
      <PlayerList players={data.allAirtable.nodes} />
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
          Scores {
            data {
              Score
              Game {
                recordId
                data {
                  Date
                  Number_of_hops
                  Game_League {
                    data {
                      Name
                      League_slug
                    }
                  }
                }
              }
            }
          }
          Hops {
            data {
              Score
              Game {
                recordId
                data {
                  Date
                  Number_of_hops
                  Game_League {
                    data {
                      Name
                      League_slug
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`
