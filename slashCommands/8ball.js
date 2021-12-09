const { SlashCommandBuilder } = require('@discordjs/builders')
const { Client, CommandInteraction, MessageEmbed } = require('discord.js')

module.exports = {
    ...new SlashCommandBuilder()
        .setName("8ball")
        .setDescription("8ball Command")
        .addStringOption((option) =>
            option
                .setName('question')
                .setDescription('Ask a question')
                .setRequired(true)
        ),

    /**
     * 
     * @param {Client} client 
     * @param {CommandInteraction} interaction 
     */
    async execute(client, interaction) {

        const asked = interaction.options.getString('question')
        if (!asked.endsWith('?')) return interaction.followUp({ content: 'Please end the question with a **?** or the command will not work!' })

        const arr = [
            'Yes!',
            'No!',
            'Probably!',
            'Probably Not!',
            "I don't know!",
            "Can't say!",
            ":thinking: Hmmm..!"
        ]
        const random = Math.floor(Math.random() * arr.length)
        const response = arr[random]

        const embed = new MessageEmbed()
            .setColor('RANDOM')
            .setTimestamp()
            .setFooter(`Requested by ${interaction.member.user.tag}`, `${interaction.member.displayAvatarURL({ dynamic: true })}`)
            .setDescription(`**Question: **\n${asked}\n\n**Response: **\n${response}`)

        interaction.followUp({ embeds: [embed] });

    }
}