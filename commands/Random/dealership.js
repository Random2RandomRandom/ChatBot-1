const commando = require('discord.js-commando');
const fs = require("fs");
class DealershipCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'dealership',
            group: 'random',
            memberName: 'dealership',
            description: 'dealership'
        });
    }
    async run(message, args) {
        let deal_command = args.split(' ');
        let dealership = JSON.parse(fs.readFileSync("./dealership.json", "utf8"));
        let DataDealership = [];
        for (var prop in dealership) {
            DataDealership.push(dealership[prop]);
        }
        if (deal_command[0] === "buy") {
            var obj = [];
            obj.push(message.author.id);
            obj.push(DataDealership[deal_command[1]]);
            fs.writeFile("./garage.json", JSON.stringify(obj), (err) => {
                if (err) console.error(err)
            });
        }
        else {
            message.channel.send("\n" + DataDealership[0].model + " Price: $" + DataDealership[0].price, { file: DataDealership[0].img });
            message.channel.send("\n" + DataDealership[1].model + " Price: $" + DataDealership[1].price, { file: DataDealership[1].img });
        }
    }
}


module.exports = DealershipCommand;