const fs = require('fs')
const csv = require('csv-parser')
const md5 = require('md5')
const Moniker = require('moniker')
const leagueName = Moniker.generator([Moniker.adjective, Moniker.noun], {
  glue: ' ',
})

const computeScores = (data) => {
  const leagues = {}
  const allPlayers = []
  data.forEach((row) => {
    const players = []
    Object.keys(row).forEach((name) => {
      if (name.substr(0, 1) !== '_' && row[name].trim() !== '') {
        players.push(name)
        const foundPlayer = allPlayers.find((obj) => obj.name === name)
        if (!foundPlayer) {
          allPlayers.push({ name: name, score: 0 })
        }
        allPlayers.forEach((player, key) => {
          if (player.name === name) {
            allPlayers[key].score += parseInt(row[name], 10)
          }
        })
      }
    })
    const leagueHash = md5(players.join(''))
    if (typeof leagues[leagueHash] === 'undefined') {
      let name = leagueName.choose()
      name = name.charAt(0).toUpperCase() + name.slice(1)
      leagues[leagueHash] = {
        players: players,
        name: `The ${name}s`,
        games: [],
      }
    }
    leagues[leagueHash].games.push(row)
  })

  writeScores(leagues, allPlayers)
}

const writeScores = (leagues, allPlayers) => {
  console.log(allPlayers)
  const lines = []
  lines.push('## Lifetime scores')
  lines.push('Name | Score')
  lines.push('-|-')
  allPlayers.sort((a, b) => {
    if (a.score > b.score) {
      return -1
    }
    if (a.score < b.score) {
      return 1
    }
  })
  allPlayers.forEach((player) => {
    lines.push(`${player.name} | ${player.score}`)
  })
  lines.push('')
  Object.keys(leagues).forEach((key) => {
    const league = leagues[key]
    if (league.players.length === 0) {
      return
    }
    lines.push(`## ${league.name}`)
    lines.push('')
    league.players.forEach((player) => {
      lines.push(` - ${player}`)
    })
    lines.push('')
    lines.push('### Standing')

    lines.push('')
    lines.push('### Games')
  })

  fs.writeFileSync('../LEAGUES.md', lines.join('\n'))
}

const results = []
fs.createReadStream('../STATS.csv')
  .pipe(csv())
  .on('data', (data) => results.push(data))
  .on('end', () => {
    computeScores(results)
  })
