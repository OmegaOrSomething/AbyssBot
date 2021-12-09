const Discord = require('discord.js')
module.exports = {
    name: 'guildlist',
    aliases: ['gl'],
    description: 'Bruh',
    execute: async (client, msg, args) => {

      if(!msg.author.id === '408952667751055360') return;

        client.guilds.cache.forEach(guild => {
            msg.channel.send(`${guild.name} | ${guild.id}`);
        })

    }
}