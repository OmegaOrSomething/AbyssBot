const Discord = require('discord.js')
module.exports = {
    name: 'unmute',
    description: 'Unmutes the mentioned user',
    execute: async (client, msg, args) => {

        // Variables

        let unmuteRole = msg.guild.roles.cache.find(
            r => r.name === 'Muted'
        )
        let unmuteUser = msg.mentions.members.first()
        let unmuteReason = args.slice(1).join(' ')

        // Conditions

        if (!unmuteUser) {
            msg.reply('Please mention a valid user!')
        }
        if (!unmuteRole) {
            msg.reply('That person is not muted!')
        }
        if (!unmuteReason) {
            msg.reply('Please state the reason for the unmute!')
        }

        // Unmute Action

        unmuteUser.roles.remove(unmuteRole)
        msg.reply(`**${unmuteUser}** has been unmuted for the Reason: **${unmuteReason}**`)

    }
}