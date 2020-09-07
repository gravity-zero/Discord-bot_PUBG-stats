const axios = require("axios");
const discord = require('./bot.js');
require("dotenv").config();
playerName = discord.arr;

const ax = axios.create({
	baseURL: "https://api.playbattlegrounds.com/shards/",
	timeout: 10000,
	headers: {
		"Authorization": `Bearer ${process.env.pubgToken}`,
		"Accept": "application/vnd.api+json",
		"Accept-Encoding": "gzip",
	},
});

/*Get ID of the Last Match Player*/
function getMatchs(playerName, shards = "steam") {
  console.log("1",playerName);
	const url = `${encodeURI(shards)}/players?filter[playerNames]=${encodeURI(playerName[0])}`;
	return ax.get(url);
}

/*Get stats by ID Match & Select the Player by ID*/
function getPlayerMatchData(playerName, shards) {
  return new Promise((resolve, reject) => {
    
	  id = getMatchs(playerName).then((res) => { 
      let matchId = res.data.data[0].relationships.matches.data[0].id;
      const url = `${encodeURI(shards)}/matches/${encodeURI(matchId)}`;
  
	    ax.get(url).then((response)=>{
        resolve({response:response, playerId:res.data.data[0].id})
      });
    });
  },
)};

module.exports = {
	getMatchs,
	getPlayerMatchData
};
