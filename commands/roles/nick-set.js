const Discord = require('discord.js')
module.exports = {
    name: 'nick-set',
    aliases: ['nick-change', 'nick', 'ns'],
    description: 'Changes mentioned user nick name.',
    execute: async (client, msg, args) => {

        // Variables

        const mentionedUser = msg.mentions.members.first() || await msg.guild.members.fetch(args[0])
        const nickToChange = args.slice(1).join(' ')

        // Returned Messages or Conditions

        if(msg.author.id !== '408952667751055360') return;
        if (!mentionedUser) return msg.reply(`Please mention a valid user.`)
        if (!nickToChange) return msg.reply(`Please mention a nickname to change to.`)

        // Changing Nickname

        try {
            mentionedUser.setNickname(nickToChange)
            msg.reply(`I changed ${mentionedUser.toString()}'s Nickname to **${nickToChange}**`)
        } catch (e) {
            console.log(e)
            msg.reply(`I cannot change that user's nickname!`)
        }

    }
}