const commando = require('discord.js-commando');
const fs = require("fs");
class RobbingCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'rob',
            group: 'random',
            memberName: 'rob',
            description: 'Hit a lick'
        });
    }
    async run(message, args) {
        var robbedAmmount = Math.floor(Math.random() * 1000) + 1;
        message.reply("You robbed $" + robbedAmmount);
        let money = JSON.parse(fs.readFileSync("./money.json", "utf8"));
        if (!money[message.author.id]) money[message.author.id] = {
            money: 0
        };
        let userDataMoney= money[message.author.id];
        userDataMoney.money = userDataMoney.money + robbedAmmount;
        message.reply("Your balance is $" + userDataMoney.money);
        fs.writeFile("./money.json", JSON.stringify(money), (err) => {
            if (err) console.error(err)
        });
    }
}

module.exports = RobbingCommand;