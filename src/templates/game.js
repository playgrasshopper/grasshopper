import React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../components/layout'
import { Container } from '../components/common/container'

const GameScoreTable = ({ scores }) => (
  <>
    {scores
      .sort((a, b) => (a.data.Score > b.data.Score ? -1 : 1))
      .map(({ data }) => (
        <tr>
          <td>
            <Link to={`/player/${data.Player[0].data.Player_slug}`}>
              {data.Player[0].data.Player_Name}
            </Link>
          </td>
          <td>{data.Score}</td>
        </tr>
      ))}
  </>
)

export default ({ data }) => {
  const { allAirtable } = data
  const game = allAirtable.nodes[0].data
  return (
    <Layout title={game.Name}>
      <Container>
        <h1>
          {game.Name} {game.Date}
        </h1>
        <p>
          <Link to={`/league/${game.Game_League[0].data.League_slug}`}>
            {game.Game_League[0].data.Name}
          </Link>
        </p>
        <table>
          <thead>
            <tr>
              <th>Player</th>
              <th>Score</th>
            </tr>
          </thead>
          <tbody>
            {game.Game_Scores && <GameScoreTable scores={game.Game_Scores} />}
          </tbody>
        </table>
      </Container>
    </Layout>
  )
}

export const query = graphql`
  query($recordId: String!) {
    allAirtable(
      filter: { table: { eq: "Games" }, recordId: { eq: $recordId } }
    ) {
      nodes {
        data {
          Game_League {
            data {
              League_slug
              Name
            }
          }
          Game_Scores {
            data {
              Score
              Player {
                data {
                  Player_slug
                  Player_Name
                  Nickname
                }
              }
            }
          }
        }
      }
    }
  }
`
