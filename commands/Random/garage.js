const commando = require('discord.js-commando');
const fs = require("fs");
class GarageCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'garage',
            group: 'random',
            memberName: 'garage',
            description: 'garage'
        });
    }
    async run(message, args) {
        let garage = JSON.parse(fs.readFileSync("./garage.json", "utf8"));
        if (!garage[message.author.id]) {
            message.reply("Your garage is empty");
        } else {
            if (!garage[message.author.id]) garage[message.author.id] = {
                vehicles: []
            };
            let userDataGarage = garage[message.author.id];
            message.reply("Vehicles: " + userDataGarage.model +"\n",{file: userDataGarage.img});
        }
    }
}

module.exports = GarageCommand;