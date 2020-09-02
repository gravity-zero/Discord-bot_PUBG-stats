const axios = require('axios');
require("dotenv").config();

class getApi{
  constructor (apiUrl){
  const ax = axios.create({
    baseURL: 'https://api.playbattlegrounds.com/shards/',
    timeout: 10000,
    headers:{
    'Authorization': `Bearer ${process.env.pubgToken}`,
    'Accept': 'application/vnd.api+json',
    'Accept-Encoding': 'gzip'
    }
  })
  }
}

/*
* Get Last player Match
* @param {String} - player name
* @param {String} - Default pc-eu
*/
function getMatchs(players, shards) {
  const url = `${encodeURI(shards)}/players?filter[playerNames]=${encodeURI(players[0])}`;
  return ax.get(url)