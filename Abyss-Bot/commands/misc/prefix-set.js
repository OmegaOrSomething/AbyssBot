const prefixSchema = require(`../../models/prefix`)

const Discord = require('discord.js')
module.exports = {
    name: 'prefix-set',
    description: 'Custom Prefix',
    execute: async (client, msg, args) => {

        const res = await args.join(" ")
        if (!res) return msg.reply('Please specify a prefix to change to.')
        prefixSchema.findOne({ Guild: msg.guild.id }, async (err, data) => {
            if (err) throw err;
            if (data) {
                prefixSchema.findOneAndDelete({
                    Guild: msg.guild.id,
                    Prefix: res
                })
                data.save()
                msg.channel.send(`Your prefix has been updated to **${res}**`)
            } else {
                data = new prefixSchema({
                    Guild: msg.guild.id,
                    Prefix: res
                })
                data.save()
                msg.channel.send(`Custom prefix in this server is now set to **${res}**`)
            }
        })

    }
}