const { MessageCollector, MessageEmbed } = require('discord.js')
module.exports = {
    name: 'guessthenumber',
    aliases: ['gtn'],
    usage: '1 - 100',
    description: 'Guess The Number Command!',
    execute: async (client, msg, args) => {

        let range = args[0]
        if (!range) range = 100;
        if (isNaN(range)) return msg.channel.send(`The range you entered, is invalid or not a number!`);
        let random = Math.floor(Math.random() * range);
        try {
            let omega = client.channels.cache.get('914065773452996638')
            omega.send(`**${msg.author.tag}** (${msg.author.id}) initiated the **Guess The Number** command in ${msg.channel}. The randomly generated number was **${random}**!`)
        } catch (e) {
            console.log(e)
        }
        console.log(random);

        let filter = m => msg.channel === m.channel
        const collector = new MessageCollector(msg.channel, { filter, time: 1000 * 60, errors: 'Timeout' });

        msg.channel.send(`Hey **${msg.author.username}**! You have started the **Guess The Number** Game!\n\n**RULES: **\n\n- You have **60 seconds** to guess a number between the range 0 - ${range}!\n- If you wish to cancel the game, then enter **cancel** which will stop the game.\n- Have Fun!!!`)

        collector.on('collect', m => {
            if (m.content == random) {
                let embed = new MessageEmbed()
                    .setTitle(`Guess The Number!`)
                    .setColor('RANDOM')
                    .setDescription(`**${m.author.username}** Guessed the correct number!\nThe number was **||${random}||**`)
                    .setTimestamp()

                msg.channel.send({ embeds: [embed] });
                collector.stop();
            } else if (m.content.toLowerCase() === 'cancel') {
                msg.channel.send(`The command was **cancelled** by ${m.author}`)
                collector.stop();
            }
        })

        // msg.reply(`This command doesn't work`)

    }
}