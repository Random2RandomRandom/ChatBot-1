/*const commando = require('discord.js-commando');
const bot = new commando.Client();
const fs = require("fs");
bot.registry.registerGroup('random','Random');

bot.registry.registerDefaults();
bot.registry.registerCommandsIn(__dirname + "/commands") ;


var http = require('http'); http.createServer(function (req, res) { res.writeHead(200, {'Content-Type': 'text/plain'}); res.send('it is running\n'); }).listen(process.env.PORT || 5000);
bot.login(process.env.BOT_TOKEN);*/
/*
const Discord = require('discord.js');
const client = new Discord.Client();
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
  if(_stop == true){console.log("stopped");return;}
  if (message.author.id === '303733714381307904' || message.author.id==="292613692674277377") {
    message.reply(':snake:')  ;
    console.log("send");
  }
});
client.login(process.env.USER_TOKEN);
*/

const commando = require('discord.js-commando');
const bot = new commando.Client();
const fs = require("fs");
var pg = require("pg");
bot.registry.registerGroup('random', 'Random');

var connectionString = process.env.DATABASE_URL;
bot.registry.registerDefaults();
bot.registry.registerCommandsIn(__dirname + "/commands");
client.on('ready', () => {
  console.log("test");
  var client = new pg.Client(process.env.DATABASE_URL);
  client.connect();
  
  client.query('CREATE DATABASE IF NOT EXISTS `globaldb`');
  client.query('CREATE TABLE IF NOT EXISTS `globaldb`.`insurance` (     
      `userid` VARCHAR(22) NOT NULL,
      `roleid` VARCHAR(22) NOT NULL,
      `added_byid` VARCHAR(22),
      `createdAtDate` date NOT NULL,
      `removeAtDate` date NOT NULL,
      PRIMARY KEY (`userid`,`roleid`)
    )'
  );
});
//var http = require('http'); http.createServer(function (req, res) { res.writeHead(200, {'Content-Type': 'text/plain'}); res.send('it is running\n'); }).listen(process.env.PORT || 5000);
bot.login(process.env.USER_TOKEN);
