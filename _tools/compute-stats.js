const fs = require('fs')
const csv = require('csv-parser')

const statsPreamble = fs.readFileSync('./stats-preamble.md')

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
            allPlayers[key].games += row['_rounds'] / 3
          }
        })
      }
    })
  })

  writeScores(allPlayers)
}

const writeScores = (allPlayers) => {
  const lines = [statsPreamble.toString()]
  lines.push('## Magic order 🧙')
  lines.push('Name | Lifetime Score | Games played | Magic index')
  lines.push('-|-|-|-')
  allPlayers.sort((a, b) => {
    if (a.score / a.games < b.score / b.games) {
      return -1
    }
    if (a.score / a.games < b.score / b.games) {
      return 1
    }
  })
  allPlayers.forEach((player, index) => {
    lines.push(
      `${player.name} | ${player.score} | ${
        Math.round(player.games * 100) / 100
      } | ${Math.round((player.score / player.games) * 100) / 100}`
    )
  })
  lines.push('')
  lines.push('## Lifetime standing 🧞')
  lines.push('Name | Lifetime Score | Games played ')
  lines.push('-|-|-')
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
      `${player.name} | ${player.score} | ${
        Math.round(player.games * 100) / 100
      }`
    )
  })

  fs.writeFileSync('../STANDING.md', lines.join('\n'))
}

const results = []
fs.createReadStream('../STATS.csv')
  .pipe(csv())
  .on('data', (data) => results.push(data))
  .on('end', () => {
    computeScores(results)
  })
