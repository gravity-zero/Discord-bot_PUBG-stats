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
  if (message.content === `${config.prefix}ping`) {
    message.channel.send('Pong.');
  } else if (message.content === `${config.prefix}beep`) {
    message.channel.send('Boop.');
  }
    else if (message.content === `${config.quest}pubg`) {
     // pubg.getMatchs(["GRAVITY-ZERO", "MUNCHJ"], "steam").then(res => message.channel.send(JSON.stringify(res.data)));
     pubg.getMatchs(["GRAVITY-ZERO", "MUNCHJ"], "steam").then((res) => {
       message.channel.send(res.data.data[0].relationships.matches.data[0].id),
        (err) => {
          message.channel.send(err);
        }
      })
    
}})
client.login(process.env.discordToken);



//Player ID PUBG = ' account.d5f57c2e720b4bd9a0509b2019a7639e '