const Discord = require('discord.js');
const config = require('./config.json');
const client = new Discord.Client();
const pubg = require('./pubg.js');
require("dotenv").config();


client.on('ready', () => {
  console.log(`${client.user.tag.split("#")[0]} Connected to discord mother fucker !!!`);
  client.user.setActivity(`follow Gravity'z stats`);
  /*console.log(client.users.cache.get('Gravity-Zero#8981').send("try"));*/
  return console.log(pubg);
});


client.on('message', message => {
  const user = message.author;

    if(message.content === message.content){

        if(user.bot) return;
        var arr = [];
        var messageUser = message.content;
        arr.push(messageUser)
        console.log("0", arr);
        
        pubg.getPlayerMatchData(arr, "steam")
        .then((res) => {
          let firstpart = res.response.data.data.attributes;
          let participants = res.response.data.included;
          participants.forEach((participant) => {
            if (
              participant.type == "participant" &&
              participant.attributes.stats.playerId == res.playerId
            ) {
              let globalStats = participant.attributes.stats;
              let rank = "Team Rank: " + globalStats.winPlace;
              let kill = "Kill: " + globalStats.kills;
              let dbno = "DBNO: " + globalStats.DBNOs;
              let assist = "Assist: " + globalStats.assists;
              let dmg = "Damage: " + globalStats.damageDealt;
              let stats = rank + "\n" + kill + "\n" + dbno + "\n" + assist + "\n" + dmg;
              console.log(stats);
              message.channel.send("mapname: " + JSON.stringify(firstpart.mapName) + "\n" + stats);
            }
			  });
      });
    }
});

client.login(process.env.discordToken);
