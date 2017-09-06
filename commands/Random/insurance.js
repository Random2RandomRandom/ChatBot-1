const commando = require('discord.js-commando');

class addInsuranceRoleCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'addinsurance',
	    guildOnly: true,
            group: 'random',
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
        const member = args.price;
    	const amount = args.amount;
    }
}

module.exports = DiceRollCommand;
