const commando = require('discord.js-commando');
const bot = new commando.Client();
const fs = require("fs");
bot.registry.registerGroup('random','Random');

bot.registry.registerDefaults();
bot.registry.registerCommandsIn(__dirname + "/commands");


client.on('message', message => {
  if (message.content === 'ping') {
    message.reply('pong');
  }
});
bot.login(process.env.BOT_TOKEN);

