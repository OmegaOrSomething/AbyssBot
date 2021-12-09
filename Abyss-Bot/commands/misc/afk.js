const Discord = require('discord.js')
const schema = require('../../models/AfkSchema')
module.exports = {
    name: 'afk',
    // aliases: [''],
    description: 'AFK Command for when people ping you \:D',
    execute: async (client, msg, args) => {

        let data;
        try {
            data = await schema.findOne({
                userId: msg.author.id,
                guildId: msg.guild.id,
            })
            if (!data) {
                data = await schema.create({
                    userId: msg.author.id,
                    guildId: msg.guild.id,
                })
            }
        } catch (e) {
            console.log(e)
        }

        // msg.channel.send(`You are now afk for the reason: ${AFK_Reason}`)
        data.AFK = true
        data.AFK_Reason = args.join(" ")
        await data.save()
        msg.channel.send(`You are now AFK for the reason: **${data.AFK_Reason || "No reason provided"}**`)
        msg.member.setNickname(`[AFK] ${msg.member.displayName}`).catch(e => msg.channel.send(`**ERROR: Couldn't change nicknmae because of role hierarchy**`))

    }
}