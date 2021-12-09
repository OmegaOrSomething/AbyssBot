const { client, CommandInteraction, MessageEmbed } = require('discord.js')
const { SlashCommandBuilder } = require('@discordjs/builders')
module.exports = {
    ...new SlashCommandBuilder()
        .setName('say')
        .setDescription('Lets you send messages to a specific user')
        .addStringOption((option) =>
            option
                .setName('string')
                .setDescription(`String to send`)
                .setRequired(true)
        )
        .addUserOption((option) =>
            option
                .setName('user')
                .setDescription('Gib user')
                .setRequired(false)
        ),

    /**
     * 
     * @param {Client} client 
     * @param {CommandInteraction} interaction 
     */
    execute: async (client, interaction) => {

        const actualString = interaction.options.getString('string')
        const actualUser = interaction.options.getUser('user')

        if (actualUser) {
            try {
                actualUser.send({ content: actualString })
                interaction.followUp({ content: `Sent message to ${actualUser}` })
            } catch (e) {
                console.log(e)
                interaction.followUp({ content: 'Cannot send message to that user!' })
            }
        } else {
            interaction.followUp({ content: actualString })
        }

    }
}