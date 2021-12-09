const Discord = require('discord.js')
module.exports = {
    name: '8ball',
    aliases: ['8b'],
    description: '8 Ball Command! Ask a question and get a reply.',
    execute: async (client, msg, args) => {

        // Variables

        let string = args.slice(0).join(' ')
        let responseArr = [
            "Yes!",
            "No!",
            "Probably!",
            "Probably Not!",
            "I don't know!"
        ]
        let resp = Math.floor(Math.random() * responseArr.length)
        let reply = responseArr[resp]

        // Conditions

        if (args.length < 4) return msg.channel.send(`Your question is too small!`)
        if (!string) return msg.channel.send(`Please Enter a Valid Question.`)

        // Reply

        const replyEmbed = new Discord.MessageEmbed()
            .addField(`Question`, `${string}`)
            .addField(`Response`, `${reply}`)
            .setColor('RANDOM')
            .setFooter(`Coded By Omega#6666`)
            .setTimestamp()

        msg.reply({ embeds: [replyEmbed] })

    }
}