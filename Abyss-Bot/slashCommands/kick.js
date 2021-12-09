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
    .setName("kick")
    .setDescription("Kicks the mentioned user!")
    .addUserOption((option) =>
        option
        .setName('user')
        .setDescription('The user to kick')
        .setRequired(true)
    )
    .addStringOption((option) =>
        option
        .setName('reason')
        .setDescription(`The reason you're kicking this user!`)
        .setRequired(true)
    ),

    /**
     * 
     * @param {Client} client 
     * @param {CommandInteraction} interaction 
     */
    async execute(client, interaction) {

        let member = interaction.options.getMember('user')
        let reason = interaction.options.getString('reason')

        if (!interaction.memberPermissions.has('KICK_MEMBERS')) return interaction.followUp({
            content: `You don't have the required permissions to do that!`,
            ephemeral: true
        })
        if (member.roles.highest.position >= interaction.guild.me.roles.highest.position) return interaction.followUp({
            content: `I'm not high enough with roles to kick that user!`,
            ephemeral: true
        })
        if (!member.kickable) return interaction.followUp({
            content: `That user cannot be kicked by me!`,
            ephemeral: true
        })

        const embed = new MessageEmbed()
            .setColor('DARK_RED')
            .setTimestamp()
            .setFooter(`Actioned by ${interaction.member.user.tag}`, `${interaction.member.displayAvatarURL({ dynamic: true })}`)
            .setDescription(`**Kicked User: **${member}\n**Kick Reason: **${reason}`)

        member.kick(reason)
        interaction.followUp({
            embeds: [embed]
        })

    }
}