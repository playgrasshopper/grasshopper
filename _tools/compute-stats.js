const fs = require('fs')
const csv = require('csv-parser')

const computeScores = (data) => {
  const allPlayers = []
  data.forEach((row) => {
    const players = []
    Object.keys(row).forEach((name) => {
      if (name.substr(0, 1) !== '_' && row[name].trim() !== '') {
        players.push(name)
        const foundPlayer = allPlayers.find((obj) => obj.name === name)
        if (!foundPlayer) {
          allPlayers.push({ name: name, score: 0, games: 0 })
        }
        allPlayers.forEach((player, key) => {
          if (player.name === name) {
            allPlayers[key].score += parseInt(row[name], 10)
            allPlayers[key].games++
          }
        })
      }
    })
  })

  writeScores(allPlayers)
}

const writeScores = (allPlayers) => {
  const lines = []
  lines.push('## All player standing')
  lines.push('')
  lines.push('Name | Score | Games played | Magic index')
  lines.push('-|-|-|-')
  allPlayers.sort((a, b) => {
    if (a.score > b.score) {
      return -1
    }
    if (a.score < b.score) {
      return 1
    }
  })
  allPlayers.forEach((player) => {
    lines.push(
      `${player.name} | ${player.score} | ${player.games} | ${
        Math.round((player.score / player.games) * 100) / 100
      }`
    )
  })
  lines.push('')

  fs.writeFileSync('../STANDING.md', lines.join('\n'))
}

const results = []
fs.createReadStream('../STATS.csv')
  .pipe(csv())
  .on('data', (data) => results.push(data))
  .on('end', () => {
    computeScores(results)
  })
