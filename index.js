const commando = require('discord.js-commando');
const bot = new commando.Client();
const fs = require("fs");
bot.registry.registerGroup('random','Random');

bot.registry.registerDefaults();
bot.registry.registerCommandsIn(__dirname + "/commands");



bot.login(process.env.BOT_TOKEN);

