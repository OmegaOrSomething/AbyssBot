const { MessageAttachment } = require('discord.js')

module.exports = {
    name: 'kill-myself',
    aliases: ['km'],
    description: 'Zac asked me to kill myself',
    execute(client, msg, args) {

        msg.reply(`${msg.author} hung themselves...<:BT_RIP:903152421130371073> You will not be remembered <3`)
    }
}