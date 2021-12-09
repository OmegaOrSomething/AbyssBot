const Discord = require('discord.js')
module.exports = {
    name: 'spam',
    aliases: ['s'],
    description: 'Spam Command',
    execute: async (client, msg, args) => {

        let memberMention = msg.mentions.members.first()
        
        for(i=1;i<=5;i++) {
            msg.channel.send(`${memberMention} was spammed by ${msg.author.username}`)
        }

    }
}