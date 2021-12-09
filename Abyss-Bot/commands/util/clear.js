const ms = require('ms')
const Discord = require('discord.js')
module.exports = {
    name: 'clear',
    aliases: ['purge'],
    description: 'Clear or Purge Command',
    execute: async (client, msg, args) => {

        if (!msg.member.permissions.has('MANAGE_MESSAGES')) return msg.reply('No permissions <:BT_cry:902545701463015455>')
        if (!args.length || isNaN(args[0]) || parseInt(args[0]) + 1 > 100 || parseInt(args[0]) + 1 < 0) return msg.channel.send("Please make sure you send a valid number between 1 and 100.")
        try{
        const messages = await msg.channel.messages.fetch({ limit: parseInt(args[0]) + 1 })
        const usable = messages.filter((m) => (m.createdTimestamp - Date.now()) < msg('14d' && !m.pinned))
        await msg.delete()
        await msg.channel.bulkDelete(usable)
        } catch(e) {
          msg.reply(`An error occured.`)
        }

        msg.channel.send(`**Cleared ${args}  messages.**`).then(msg => { setTimeout(() => msg.delete(), 3000) })

    }
}