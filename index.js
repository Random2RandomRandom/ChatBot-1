//const commando = require('discord.js-commando');
//const bot = new commando.Client();
//const fs = require("fs");
//bot.registry.registerGroup('random','Random');
//bot.registry.registerDefaults();
//bot.registry.registerCommandsIn(__dirname + "/commands");

//bot.login(process.env.BOT_TOKEN);

// Requires
const Discord = require('discord.js')

// Create an instance of a Discord client
const client = new Discord.Client()

// The bot is ready
client.on('ready', () => {
  console.log('Bot Started')
})

client.login(process.env.BOT_TOKEN)
/*const Discord = require("discord.js");
const fs = require("fs");
const client = new Discord.Client();
client.login("");

let points = JSON.parse(fs.readFileSync("./points.json", "utf8"));
let money = JSON.parse(fs.readFileSync("./money.json", "utf8"));
const prefix = "+";

client.on("message", message => {
  if (!message.content.startsWith(prefix)) return;
  if (message.author.bot) return;

  if (!points[message.author.id]) points[message.author.id] = {
    points: 0,
    level: 0
  };
   if (!money[message.author.id]) money[message.author.id] = {
    money: 0
  };
  let userData = points[message.author.id];
  userData.points++;

  let userDataMoney= money[message.author.id];

  let curLevel = Math.floor(0.1 * Math.sqrt(userData.points));
  if (curLevel > userData.level) {
    // Level up!
    userData.level = curLevel;
    message.reply(`You"ve leveled up to level **${curLevel}**! Ain"t that dandy?`);
  }

  if (message.content.startsWith(prefix + "level")) {
    message.reply(`You are currently level ${userData.level}, with ${userData.points} points.`);
  }
    if (message.content.startsWith(prefix + "money")) {
    message.reply(`You current balance is $ ${userDataMoney.money}.`);
  }
  fs.writeFile("./points.json", JSON.stringify(points), (err) => {
    if (err) console.error(err)
  });
  fs.writeFile("./money.json", JSON.stringify(money), (err) => {
    if (err) console.error(err)
  });
});*/
