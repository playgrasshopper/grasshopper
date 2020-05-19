export default player => {
  const games = {}
  let lifetimeScore = 0
  let lifetimeGames = 0
  if (player.Scores) {
    player.Scores.forEach(score => {
      if (score.data.Game) {
        lifetimeScore += score.data.Score
        lifetimeGames += score.data.Game[0].data.Number_of_hops / 3
        games[score.data.Game[0].recordId] = {
          recordId: score.data.Game[0].recordId,
          ...score.data.Game[0].data,
          score: score.data.Score,
        }
      }
    })
  }
  if (player.Hops) {
    player.Hops.forEach(hop => {
      if (hop.data.Game) {
        lifetimeScore += hop.data.Score
        lifetimeGames += hop.data.Game[0].data.Number_of_hops / 3
        if (typeof games[hop.data.Game[0].recordId] === 'undefined') {
          games[hop.data.Game[0].recordId] = {
            recordId: hop.data.Game[0].recordId,
            ...hop.data.Game[0].data,
            score: hop.data.Score,
          }
        } else {
          games[hop.data.Game[0].recordId].score += hop.data.Score
        }
      }
    })
  }
  return { games, lifetimeScore, lifetimeGames }
}
