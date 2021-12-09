const prefixSchema = require(`../../models/prefix`)
const prefix = require(`../../config.json`).prefix

const Discord = require('discord.js')
module.exports = {
    name: 'prefix-reset',
    description: 'Resets your prefix',
    execute: async (client, msg, args) => {

        await prefixSchema.findOneAndDelete({ Guild: msg.guild.id })
        msg.channel.send(`The prefix has been reset to **${prefix}**`)

    }
}