const Discord = require('discord.js')
module.exports = {
    name: 'dare',
    aliases: ['d', 'dr'],
    description: 'Dare Command for Truth Or Dare',
    execute: async (client, msg, args) => {

        let dareArr = [
            "Make up a song and voice record yourself singing it. Send it to me when you’re done",
            "Video yourself eating a tablespoon of butter and send it to me",
            "Prank call someone and try to talk for 5 minutes straight. Take a screenshot of the call",
            "Eat a spoonful of any condiment of my choosing",
            "Tell your crush you like them over text. Screenshot the conversation",
            "Wrap your head with toilet paper like a mummy, take a picture, and make it your profile pic",
            "Use a picture of me as your phone background for 3 days",
            "Text a friend and tell them their hair is on backward",
            "Call someone and confess your new love of Justin Beiber",
            "Send me the link of the last YouTube video you watched",
            "Write a short love poem",
            "Find some lipstick and put it on",
            "Write anyone's name somewhere on your body (where it can be hidden) with a permanent marker",
            "Voice record yourself singing your favorite love song and send it to me",
            "Send me the most unflattering picture of yourself on your phone",
            "Read me the first email in your inbox",
            "Video call me or record yourself dancing for 1 minute with no music",
            "Send me a screenshot of your text inbox without deleting anything",
            "Tell me all of the contents of your purse/wallet",
            "Take a video of yourself drinking pickle juice",
            "Go outside and do the chicken dance where people can see you for 1 minute",
            "Dip a bar of soap in sauce and lick it",
            "Go as far down in the splits as you can",
            "Write a status on Instagram praising me",
            "Do the macarena for 2 minutes straight",
            "Close your eyes and write a text without looking. Send it to someone random and screenshot the conversation for proof",
            "Write a break-up text message and send it to someone random in your contacts. Take a screenshot for proof",
            "Take a video of yourself drinking water like a dog",
            "Fill your mouth full of water and say your full name. Take a video and send it",
            "Call your crush and flirt with them",
            "Dial a random number and make meaningless conversation for 2 minutes",
            "Do 25 situps without stopping",
            "Take a video of yourself imitating a celebrity",
            "Crack two eggs on your head then take a selfie",
            "Tell us your deepest secret?",
            "Call me and say my name in a loud voice",
            "Send a screenshot of your search history from the past two days",
            "Record a video of you singing a song with a mouthful of sauce/butter",
            "Call a stranger and tell them a secret",
            "Call your mom and tell her you can’t find a boyfriend/girlfriend in a panicked voice",
            "Color one of your front teeth black and take a selfie (eyeliner works for this!)",
            "Send me the 11th picture in your photo gallery",
            "Tell me in what subject did you get the worst marks and when?",
            "Send me your favorite TikTok/YouTube video",
            "Put flour all over your face and take a selfie",
            "Send me a picture of your first crush",
            "Call your friend a bitch for no reason"
        ]

        let drRand = Math.floor(Math.random() * dareArr.length)
        let drResp = dareArr[drRand]

        var dareEmbed = new Discord.MessageEmbed()
            .setTitle('Dare')
            .setColor('RANDOM')
            .setDescription(`Your **Dare** is:\n**${drResp}**`)
            .setTimestamp()
            .setFooter('Coded by Omega#6666')

        msg.reply({ embeds: [dareEmbed] })

    }
}