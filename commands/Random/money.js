const commando = require('discord.js-commando');
const fs = require("fs");
class MoneyCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'money',
            group: 'random',
            memberName: 'money',
            description: 'Balance'
        });
    }
    async run(message, args) {
        let money = JSON.parse(fs.readFileSync("./money.json", "utf8"));
        if (!money[message.author.id]) money[message.author.id] = {
            money: 0
        };
        let userDataMoney = money[message.author.id];
        message.reply("Your balance is $" + userDataMoney.money);
           fs.writeFile("./money.json", JSON.stringify(money), (err) => {
            if (err) console.error(err)
        });
    }
}

module.exports = MoneyCommand;