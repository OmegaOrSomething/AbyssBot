const Discord = require('discord.js')
module.exports = {
    name: 'mute',
    description: 'Mute Command for adding the muted role to people',
    execute: async (client, msg, args) => {

        // Variables

        var muteUser = msg.mentions.members.first()
        var muteReason = args.slice(1).join(' ')
        var muteRole = msg.guild.roles.cache.find(r => r.name === 'Muted')

        // Conditions or Permissions

        if (!msg.member.permissions.has('MANAGE_MESSAGES')) return msg.reply('You do not have permissions to mute people!')
        if (!muteUser) return msg.reply('Please mentions a valid user to mute')
        if (!muteRole) return msg.reply("There is no `MUTED` Role in the server! Please make one if you want to use this command.")
        if (!muteReason) return msg.reply('Specify a reason for the mute!');

        // Mute Action

        muteUser.roles.add(muteRole);
        msg.reply(`Succesfully added the role **${muteRole.name}** to **${muteUser}** for Reason: **${muteReason}**`)

    }
}