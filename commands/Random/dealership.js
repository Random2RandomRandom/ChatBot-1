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
            /*message.channel.send("\n" + DataDealership[1].model + " Price: $" + DataDealership[1].price, { file: DataDealership[1].img });*/
           const embed = new Discord.RichEmbed()
  .setTitle("This is your title, it can hold 256 characters")
  .setAuthor("Author Name", "https://i.imgur.com/lm8s41J.png")
  /*
   * Alternatively, use "#00AE86", [0, 174, 134] or an integer number.
   */
  .setColor(0x00AE86)
  .setDescription("This is the main body of text, it can hold 2048 characters.")
  .setFooter("This is the footer text, it can hold 2048 characters", "http://i.imgur.com/w1vhFSR.png")
  .setImage("http://i.imgur.com/yVpymuV.png")
  .setThumbnail("http://i.imgur.com/p2qNFag.png")
  /*
   * Takes a Date object, defaults to current date.
   */
  .setTimestamp()
  .setURL("https://discord.js.org/#/docs/main/indev/class/RichEmbed")
  .addField("This is a field title, it can hold 256 characters",
    "This is a field value, it can hold 2048 characters.")
  /*
   * Inline fields may not display as inline if the thumbnail and/or image is too big.
   */
  .addField("Inline Field", "They can also be inline.", true)
  /*
   * Blank field, useful to create some space.
   */
  .addBlankField(true)
  .addField("Inline Field 3", "You can have a maximum of 25 fields.", true);

  message.channel.send({embed});
        }
    }
}


module.exports = DealershipCommand;
