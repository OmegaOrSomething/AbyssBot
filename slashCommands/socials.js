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
        .setName("socials")
        .setDescription("Sends the bot owner's socials"),

    /**
     * 
     * @param {Client} client 
     * @param {CommandInteraction} interaction 
     */
    async execute(client, interaction) {

        const embed = new MessageEmbed()
            .setTitle(`Socials`)
            .setColor('PURPLE')
            .setTimestamp()
            .setFooter(`Requested By ${interaction.member.user.tag}`, `${interaction.member.displayAvatarURL({ dynamic: true })}`)
            .setDescription(`[Instagram](https://instagram.com/omegaorsomething/) <:BT_instagram:916938073244336148>`)

        interaction.followUp({
            embeds: [embed],
            ephemeral: false
        })

    }
}