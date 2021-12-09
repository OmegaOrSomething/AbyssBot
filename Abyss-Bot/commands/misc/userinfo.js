const Discord = require('discord.js')
const moment = require('moment')
module.exports = {
    name: 'userinfo',
    aliases: ['whois', 'who', 'ui'],
    description: 'Shows the mentioned user information or the author information',
    execute: async (client, msg, args) => {

        const Target = msg.mentions.users.first() || msg.author;
        const Member = msg.guild.members.cache.get(Target.id)

        try {
            const Response = new Discord.MessageEmbed()
                .setAuthor(`${Target.username}`, Target.displayAvatarURL({ dynamic: true }))
                .setThumbnail(Target.displayAvatarURL({ dynamic: true }))
                .setColor('RANDOM')
                .addField("UserID", `${Target.id}`, false)
                .addField("Roles", `${Member.roles.cache.map(r => r).join(' ').replace('@everyone', ' ')}`)
                .addField('Server Member Since', `${moment(Member.joinedAt).format('MMMM Do YYYY, h:mm:ss a')}\n**-** ${moment(Member.joinedAt).startOf('day').fromNow()}`)
                .addField('Discord Member Since', `${moment(Target.createdAt).format('MMMM Do YYYY, h:mm:ss a')}\n**-** ${moment(Target.createdAt).startOf('day').fromNow()}`)

            msg.reply({ embeds: [Response] })
        } catch (err) {
            msg.reply(`An Error Occured! Please contact Omega#6666 and report it to him ASAP!`)
            msg.channel.send(`**ERROR:**\n\`\`\`${err}\`\`\``)
            console.log(err)
        }
    }
}