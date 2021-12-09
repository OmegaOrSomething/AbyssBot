const { Client, Message } = require('discord.js')
const { prefix } = require('../config.json')
module.exports = {
    name: 'messageCreate',
    on: true,
    /**
     * 
     * @param {Client} client 
     * @param {Message} msg 
     */
    async execute(client, msg) {

        const p = await client.prefix(msg)
        if (!msg.content.startsWith(p)/* || msg.author.id !== '408952667751055360'*/) return;

        const args = msg.content.slice(p.length).split(/ +/);
        const command = args.shift().toLowerCase();

        const cmd = client.commands.get(command) || client.commands.find(a => a.aliases && a.aliases.includes(command));

        // const cdEmbed = new Discord.MessageEmbed()
        //     .setColor('RED')
        //     .setTimestamp()
        //     .setFooter(`${msg.author.tag}`, msg.author.displayAvatarURL({ dynamic: true }))
        //     .setDescription(`**${msg.author.tag}**, you have to wait for **${timeLeft.toFixed(1)} second(s)** to use this command again!`)


        // msg.reply({ embeds: [cdEmbed] })

        try {
            if (cmd) cmd.execute(client, msg, args)
        } catch (e) {
            console.log(e)
            msg.channel.send(e)
        }

        if (msg.channel.type === 'DM') {
            client.channels.cache.get('913834428000788520').send(`**${msg.author.tag} | ${msg.author.id} : **${msg.content}`)
        }
    }
}