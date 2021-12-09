const Discord = require('discord.js')
module.exports = {
    name: 'truth',
    aliases: ['t', 'tr'],
    description: 'Truth Command for Truth or Dare',
    execute(client, msg, args) {

        var truthArr = [
            "When was the last time you lied?",
            "When was the last time you cried?",
            "What's your biggest fear?",
            "What's your biggest fantasy?",
            "What's something you're glad your mom doesn't know about you?",
            "Have you ever cheated on someone?",
            "What's the worst thing you've ever done?",
            "What's a secret you've never told anyone?",
            "Do you have a hidden talent?",
            "Who was your first celebrity crush?",
            "Have you ever cheated in an exam?",
            "What's the most drunk you've ever been?",
            "Have you ever broken the law?",
            "What's the most embarrassing thing you've ever done?",
            "What's your biggest insecurity?",
            "What's the biggest mistake you've ever made?",
            "What's the most disgusting thing you've ever done?",
            "Who would you like to kiss in this server?",
            "What's the worst thing anyone's ever done to you?",
            "Have you ever had a run in with the law?",
            "What's your worst habit?",
            "What's the worst thing you've ever said to anyone?",
            "Have you ever peed in the shower?",
            "What's the strangest dream you've had?",
            "Have you ever been caught doing something you shouldn't have?",
            "What's your biggest regret?",
            "What's the biggest misconception about you?",
            "Where's the weirdest place you've had sex?",
            "Why did your last relationship break down?",
            "What's the most trouble you've been in?"
        ]

        let r = Math.floor(Math.random() * truthArr.length)
        let r2 = truthArr[r]

        var truthEmbed = new Discord.MessageEmbed()
            .setTitle('Truth')
            .setColor('RANDOM')
            .setDescription(`Your **Truth** Question is:\n**${r2}**`)
            .setTimestamp()
            .setFooter(`Coded by Omega#6666`)

        msg.reply({ embeds: [truthEmbed] })

    }
}