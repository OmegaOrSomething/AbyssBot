const { MessageActionRow, MessageButton } = require('discord.js')
module.exports = {
    name: 'invite',
    aliases: ['inv'],
    description: 'Invite command to invite the bot to your server',
    execute: async (client, msg, args) => {

        const row = new MessageActionRow().addComponents(
            new MessageButton()
                .setLabel("Invite Link")
                .setURL('https://discord.com/api/oauth2/authorize?client_id=897035686123802674&permissions=8&scope=bot%20applications.commands')
                .setStyle("LINK")
        )

        msg.reply({ content: "Click the following button to invite the bot to your server!", components: [row] })

    }
}