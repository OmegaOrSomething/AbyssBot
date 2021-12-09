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
    .setName("mute")
    .setDescription("Mutes the given user!")
    .addUserOption((option) =>
        option
        .setName('user')
        .setDescription('The user to mute')
        .setRequired(true)
    )
    .addStringOption((option) =>
        option
        .setName('reason')
        .setDescription('Reason for muting the user')
        .setRequired(true)
    ),

    /**
     * 
     * @param {Client} client 
     * @param {CommandInteraction} interaction 
     */
    async execute(client, interaction) {

        const muteRole = interaction.guild.roles.cache.find(r => r.name.toLowerCase() === 'muted');
        const getUser = interaction.options.getMember('user')
        const getReason = interaction.options.getString('reason')

        if (!interaction.memberPermissions.has('MANAGE_MESSAGES')) return interaction.followUp({
            content: `You don't have the required permissions for that!`,
            ephemeral: true
        })

        if (getUser.roles.highest.position >= interaction.guild.me.roles.highest.position) return interaction.followUp({
            content: `I cannot mute that user as they have a higher role than me!`,
            ephemeral: true
        })

        const embed = new MessageEmbed()
            .setColor('DARK_RED')
            .setFooter(`Actioned by ${interaction.member.user.tag}`, `${interaction.member.displayAvatarURL({ dynamic: true })}`)
            .setTimestamp()
            .setDescription(`**Muted User: **${getUser}\n**Mute reason: **${getReason}`)

        try {
            // interaction.followUp(`Command not ready :smiling_face_with_tear:`)
            getUser.roles.add(muteRole)
            interaction.followUp({
                embeds: [embed]
            })
        } catch (e) {
            console.log(e)
            interaction.followUp({
                content: `An Error Occured.`,
                ephemeral: true
            })
        }

    }
}