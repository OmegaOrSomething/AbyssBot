const blacklist = require(`../../models/blacklist`)

const Discord = require('discord.js')
module.exports = {
    name: 'blacklist',
    description: 'Blacklists Users from using the bot',
    execute: async (client, msg, args) => {

        const User = msg.guild.members.cache.get(args[0])
        if (!User) return msg.reply('Not a valid user!')

        blacklist.findOne({ id: User.user.id }, async (err, data) => {
            if (err) throw err;
            if (data) {
                msg.channel.send(`**${User.displayName} has already been blacklisted**`)
            } else {
                data = new blacklist({ id: User.user.id })
            }
            data.save()
                .cath(err => console.log(err))
            msg.channel.send(`${User.user.tag} has been added to the blacklist!`)
        })

    }
}