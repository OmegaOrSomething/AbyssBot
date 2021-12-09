const Discord = require('discord.js')
module.exports = {
    name: 'coinflip',
    aliases: ['cf'],
    description: 'Flips a coin for Heads or Tails',
    execute: async (client, msg, args) => {

        let coinFlip = [
            "Heads",
            "Tails"
        ]

        let random = Math.floor(Math.random() * coinFlip.length)
        let resp = coinFlip[random]

        msg.reply('Flipping a coin...!').then(m => {
            m.edit(`**You flipped a ${resp}!**`)
        })

    }
}