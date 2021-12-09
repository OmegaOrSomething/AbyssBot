const Discord = require('discord.js')
module.exports = {
    name: 'report',
    description: 'Report Command',
    execute: async (client, msg, args) => {

        const user = msg.mentions.users.first()
        const str = args.slice(1).join(" ")

        if (!user) return msg.reply(`**<:BT_no:902755950279131186> Please mention a valid user!**`)
        if (!str) return msg.reply(`**<:BT_no:902755950279131186> Please give us the reason you're reporting the user!**`)

        var reportEmbed = new Discord.MessageEmbed()
            .setColor('#a1c38c')
            .setTitle("Report")
            .addField('User Reporting', `${msg.author.tag}`)
            .addField("Reported User", `${user.tag}`)
            .addField('Reason for report', `${str}`)
            .setTimestamp()

        msg.channel.send({ embeds: [reportEmbed] })

    }
}