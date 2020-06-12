import React from 'react'
import { Link } from 'gatsby'
import getPlayerGames from '../../utilities/player-games'

export default ({ players }) => {
  const allPlayers = players.map(({ data }) => ({
    ...data,
    stats: getPlayerGames(data),
  }))

  return (
    <table>
      <thead>
        <th>Player</th>
        <th>Games</th>
        <th>Lifetime score</th>
        <th>Magic index</th>
      </thead>
      <tbody>
        {allPlayers
          .sort((a, b) =>
            a.stats.lifetimeScore > b.stats.lifetimeScore ? 1 : -1
          )
          .map(player => (
            <tr>
              <td>
                <Link to={`/player/${player.Player_slug}`}>
                  {player.Player_Name}
                </Link>
              </td>
              <td>{Math.round(player.stats.lifetimeGames * 100) / 100}</td>
              <td>{player.stats.lifetimeScore}</td>
              <td>
                {Math.round(
                  (player.stats.lifetimeScore / player.stats.lifetimeGames) *
                    1000
                ) / 1000}{' '}
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  )
}
