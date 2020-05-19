import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'
import { Container } from '../components/common/container'
import getPlayerGames from '../utilities/player-games'

export default ({ data }) => {
  const { allAirtable } = data
  const player = allAirtable.nodes[0].data
  const { games, lifetimeScore, lifetimeGames } = getPlayerGames(player)
  const gameList = Object.values(games).sort((a, b) => {
    return a.Date > b.Date ? -1 : 1
  })

  return (
    <Layout title={player.Player_Name}>
      <Container>
        <h1>{player.Nickname}</h1>
        <p>
          <strong>Lifetime score:</strong>
          {lifetimeScore}
        </p>
        <p>
          <strong>Lifetime games:</strong>
          {lifetimeGames}
        </p>
        <h3>{player.Player_Name}</h3>
        <p>{player.Bio}</p>
        {player.Glamor_Shot && <img src={player.Glamor_Shot[0].url} alt="" />}
        <h2>Games</h2>
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>League</th>
              <th>Score</th>
            </tr>
          </thead>
          <tbody>
            {gameList.map(game => (
              <tr>
                <td>
                  <Link to={`/game/${game.recordId}`}>{game.Date}</Link>
                </td>
                <td>
                  <Link to={`/leage/${game.Game_League[0].data.League_slug}`}>
                    {game.Game_League[0].data.Name}
                  </Link>
                </td>
                <td>{game.score}</td>
              </tr>
            ))}
          </tbody>
        </table>
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
