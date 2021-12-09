const Discord = require('discord.js')
module.exports = {
    name: 'kick',
    aliases: ['k'],
    description: 'Kicks users',
    execute: async (client, msg, args) => {

        // Variables 

        const kickUser = msg.mentions.members.first()
        const kickReason = args.slice(1).join(" ")
        const kickEmbed = new Discord.MessageEmbed().setTitle(`Kicked`).setDescription(`**${msg.author.username}** just kicked **${kickUser}** for the reason: **${kickReason}**`).setTimestamp()

        // Permissions

        if (!msg.member.permissions.has(`KICK_MEMBERS`)) return msg.reply(`You do not have the \`KICK_MEMBERS\` permissions.`)
        if (!kickUser) return msg.reply(`Please mention a valid user.`)
        if (!kickReason) return msg.reply(`Please state the reason for this kick`)
        if (!args) return msg.channel.send(`The usage is: \`\`\`$kick [MENTION] [REASON]\`\`\``)

        // Kicking the Member

        if (!kickUser.kickable) return msg.channel.send(`I cannot kick that user.`)

        try {
            kickUser.kick()
            msg.channel.send({ embeds: [kickEmbed] })
        } catch (e) {
            console.log(e)
            msg.reply(`I couldn't do that because of ${e}`)
        }
    }
}