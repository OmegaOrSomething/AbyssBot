const {
    SlashCommandBuilder
} = require('@discordjs/builders')
const {
    Client,
    CommandInteraction,
    MessageEmbed
} = require('discord.js')

module.exports = {
    ...new SlashCommandBuilder()
        .setName("guildlist")
        .setDescription("Displays all the guilds your bot is in"),

    /**
     * 
     * @param {Client} client 
     * @param {CommandInteraction} interaction 
     */
    async execute(client, interaction) {

        if (interaction.member.user.id !== '408952667751055360') return interaction.followUp(`Only the bot's owner can use this command!`)

        const embed = new MessageEmbed()
            .setTitle(`GuildList`)
            .setColor('RANDOM')
            .setTimestamp()
        client.guilds.cache.forEach(guild => {
            embed.addField(`${guild.name}`, `${guild.id}`)
        })

        interaction.followUp({
            embeds: [embed]
        })

    }
}