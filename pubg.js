const axios = require('axios');
require("dotenv").config();

const ax = axios.create({
  baseURL: 'https://api.playbattlegrounds.com/shards/',
	timeout: 10000,
  headers:{
  'Authorization': `Bearer ${process.env.pubgToken}`,
  'Accept': 'application/vnd.api+json',
  'Accept-Encoding': 'gzip'
  }
})

/*
* Get Last player Match
* @param {String} - player name
* @param {String} - Default pc-eu
*/
async function getMatchs(players, shards) {
  const url = `${encodeURI(shards)}/players?filter[playerNames]=${encodeURI(players[0])}`;
  
  const playersMatch = await ax.get(url)
    .then(res => JSON.stringify(res.data))
    .catch(err => {console.log(err, "HOHO")
    return err;
    })
    console.log(playersMatch)
  return playersMatch;
}
getMatchs(["GRAVITY-ZERO", "MUNCHJ"], "steam");
console.log(getMatchs);

async function getPlayerMatchData(matchId, shards = "steam") {

}

module.exports = {
  getMatchs/*,
	getPlayerMatchData,
	getMatchListData*/
}

/*fetch("steam/players?filter[playerNames]=GRAVITY-ZERO")
.then(function(response) {
  return response.blob();
})
.catch(function(error) {
  console.log('Il y a eu un problème avec l\'opération fetch: ' + error.message);
});*/
