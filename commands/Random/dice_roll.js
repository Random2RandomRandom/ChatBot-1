const commando = require('discord.js-commando');

class addInsuranceRoleCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'addinsurance',
            group: 'group_insurance',
            memberName: 'insurance',
			description: 'Add insurance to user!.Default is 7 days.',
			examples: ['addinsurance @Crawl#3208 7', 'addinsurance Crawl'],
			args: [
				{
					key: 'member',
					label: 'user',
					prompt: 'What user would you like to add insurance to?',
					type: 'member'
				},
                {
                  key: 'days',
                  prompt: 'how many days should it last?',
                  type: 'integer'
                  //default: 7
                }
			]
        });
    }
    async run(message, args) {
        var roll = Math.floor(Math.random()*6) +1;
        message.reply("You rolled a " + roll);
    }
}

module.exports = DiceRollCommand;
