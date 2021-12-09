const Discord = require('discord.js')
module.exports = {
    name: 'test',
    description: 'Test command',
    execute(client, msg, args) {
        const filter = (m) =>
            m.author.id === msg.author.id

        if (msg.content === '$test') {
            msg.channel.send('hey bitch. wassup')

            const collector = new Discord.MessageCollector(msg.channel, filter, {
                time: 10000,
            })

            collector.on('collect', (message) => {
                var temp = message.content
            })

            collector.on('end', (collected) => {
                msg.author.roles.add(r => r.id === collected)
            })

        }
    }
}