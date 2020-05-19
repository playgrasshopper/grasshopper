import React from 'react'
import { Container } from '../components/common/container'
import Layout from '../components/layout'
import getPlayerGames from '../utilities/player-games'
import { Link, graphql } from 'gatsby'

export default ({ data }) => (
  <Layout title="Players">
    <Container>
      <h1>Players!</h1>
      <table>
        <thead>
          <th>Player</th>
          <th>Games</th>
          <th>Lifetime score</th>
          <th>Magic index</th>
        </thead>
        <tbody>
          {data.allAirtable.nodes.map(({ data }) => {
            const { lifetimeScore, lifetimeGames } = getPlayerGames(data)
            return (
              <tr>
                <td>
                  <Link to={`/player/${data.Player_slug}`}>
                    {data.Player_Name}
                  </Link>
                </td>
                <td>{Math.round(lifetimeGames * 100) / 100}</td>
                <td>{lifetimeScore}</td>
                <td>
                  {Math.round((lifetimeScore / lifetimeGames) * 1000) / 1000}{' '}
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
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
