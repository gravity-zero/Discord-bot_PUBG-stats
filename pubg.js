const axios = require("axios");
require("dotenv").config();

const ax = axios.create({
	baseURL: "https://api.playbattlegrounds.com/shards/",
	timeout: 10000,
	headers: {
		"Authorization": `Bearer ${process.env.pubgToken}`,
		"Accept": "application/vnd.api+json",
		"Accept-Encoding": "gzip",
	},
});

function getMatchs(players, shards = "steam") {
	const url = `${encodeURI(shards)}/players?filter[playerNames]=${encodeURI(players[0])}`;
	return ax.get(url);
	/*.then((res) => {
     //console.log(res.data.data[0].relationships.matches.data[0].id)
      //res.data.data.forEach(data => {console.log(data.relationships.matches.data[0].id)})
    
    matchId = res.data.data[0].relationships.matches.data[0].id;
     console.log(matchId)

    })*/
}

function getPlayerMatchData(shards) {
  return new Promise((resolve, reject) => {
	id = getMatchs(["GRAVITY-ZERO", "MUNCHJ_"]).then((res) => {
  let matchId = res.data.data[0].relationships.matches.data[0].id;
	

		const url = `${encodeURI(shards)}/matches/${encodeURI(matchId)}`;
		ax.get(url).then((response)=>{
      resolve({response:response, playerId:res.data.data[0].id})
  });
})
})}
//getPlayerMatchData("steam");

module.exports = {
	getMatchs,
	getPlayerMatchData
};
