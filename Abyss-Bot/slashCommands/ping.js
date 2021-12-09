const {
    Client,
    CommandInteraction,
    MessageEmbed,
} = require('discord.js');
module.exports = {
    name: 'ping',
    description: 'Replies with websocket ping!',
    /**
     * 
     * @param {Client} client 
     * @param {CommandInteraction} interaction 
     */
    execute: async (client, interaction) => {

        const embedF = new MessageEmbed()
            .setColor('GREEN')
            .setTimestamp()
            .setFooter(`Requested by ${interaction.member.user.tag}`, `${interaction.member.displayAvatarURL({ dynamic: true })}`)
            .setDescription(`**Pinging...!**`)

        const embedS = new MessageEmbed()
            .setColor('GREEN')
            .setTimestamp()
            .setFooter(`Requested by ${interaction.member.user.tag}`, `${interaction.member.displayAvatarURL({ dynamic: true })}`)
            .setDescription(`Pong...! Your ping is **${client.ws.ping}ms**`)

        interaction.followUp({
            embeds: [embedF]
        })
        interaction.editReply({
            embeds: [embedS]
        })

    }
}