/*const commando = require('discord.js-commando');
const bot = new commando.Client();
const fs = require("fs");
bot.registry.registerGroup('random','Random');

bot.registry.registerDefaults();
bot.registry.registerCommandsIn(__dirname + "/commands");


var http = require('http'); http.createServer(function (req, res) { res.writeHead(200, {'Content-Type': 'text/plain'}); res.send('it is running\n'); }).listen(process.env.PORT || 5000);
bot.login(process.env.BOT_TOKEN);*/
const Discord = require('discord.js');
const client = new Discord.Client();
var http = require('http'); http.createServer(function (req, res) { res.writeHead(200, {'Content-Type': 'text/plain'}); res.send('it is running\n'); }).listen(process.env.PORT || 5000);

client.on('ready', () => {
  //client.setStreaming('Snake Alerter 2k17');
  console.log('I am ready!');
});
var _stop = false;
client.on('message', message => {
  if (message.author.id === '262024270152990723') {
    if(message.content === "!chat_botstart"){ message.reply('Snake Alerting has started'); _stop=false;}
    else if(message.content === "!chat_botstop"){ message.reply('Snake Alerting has stopped'); _stop=true;}
  }
  if(_stop){return;}
  if (message.author.id === '303733714381307904' && "292613692674277377") {
    client.sendMessage(':snake:')  ;
  }
});
client.login(process.env.USER_TOKEN);
