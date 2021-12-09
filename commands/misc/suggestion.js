const Discord = require('discord.js')
module.exports = {
    name: 'suggestion',
    aliases: ['suggest'],
    usage: 'Suggestion',
    description: 'Suggests a feature',
    execute: async (client, msg, args) => {

        let suggestion = args.slice(0).join(' ')

        let suggestEmbed = new Discord.MessageEmbed()
            .setColor(`RANDOM`)
            .setFooter(`ID: ${msg.author.id} | Coded by Omega#6666`)
            .setDescription(suggestion)
            .setTitle(`${msg.author.username} Suggests:`)

        msg.channel.send({ embeds: [suggestEmbed] }).then(msg => {
            msg.react('<:yes:909747507033169940>')
            msg.react('<:neutral:909747418101342238>')
            msg.react('<:no:909747574309789747>')
        })

        msg.react(`✅`)

    }
}