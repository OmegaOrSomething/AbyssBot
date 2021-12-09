const Discord = require('discord.js')
module.exports = {
    name: 'avatar',
    aliases: ['av', 'pfp'],
    description: 'Avatar Command to check your or the user avatar',
    execute: async (client, msg, args) => {

        const user = msg.mentions.users.first() || msg.author;

        var avEmbed = new Discord.MessageEmbed()
            .setTitle(user.username)
            .setColor('111111')
            .setImage(user.displayAvatarURL({ type: 'png', dynamic: true, size: 256 }))

        msg.reply({ embeds: [avEmbed] })
    }
}