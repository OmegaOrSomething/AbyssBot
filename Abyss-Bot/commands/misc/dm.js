const Discord = require('discord.js')
module.exports = {
    name: 'dm',
    aliases: ['direct-message'],
    description: 'DMs the mentioned user.',
    execute: async (client, msg, args) => {

        if (!msg.member.permissions.has('ADMINISTRATOR')) return msg.reply("I'm Sorry! You cannot do that!")

        const user = msg.mentions.members.first() || msg.guild.members.fetch(args[0])
        if (!user) return msg.reply(`A valid user wasn't mentioned!`)

        const str = args.slice(1).join(' ')
        user.send(str)
        msg.reply('Message Sent to the User!')

        // var dmLogger = new Discord.MessageEmbed()
        //     .setTitle(`DM Sent`)
        //     .setColor('RANDOM')
        //     .setTimestamp()
        //     .addField('Message sent by', msg.author.tag)
        //     .addField('Message sent to', user)
        //     .addField('Message Content', str)
        //     .setFooter('DM Command by Omega!')

        //     msg.channel.send({ embeds: [dmLogger] })

    }
}