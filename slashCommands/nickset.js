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
        .setName("nickset")
        .setDescription("Sets a user's nickname")
        .addUserOption((option) =>
            option
                .setName('target')
                .setDescription("User who's nick will be changed")
                .setRequired(true)
        )
        .addStringOption((option) =>
            option
                .setName('nickname')
                .setDescription('New nickname to change')
                .setRequired(true)
        ),

    /**
     * 
     * @param {Client} client 
     * @param {CommandInteraction} interaction 
     */
    async execute(client, interaction) {

        const user = interaction.options.getMember('target')
        const nickname = interaction.options.getString('nickname')

        if (!interaction.memberPermissions.has('MANAGE_NICKNAMES')) return interaction.followUp({
            content: `You don't have perms to change nicknames`,
            ephemeral: true
        })
        if (user.id === interaction.guild.ownerId) return interaction.followUp({
            content: `That user is the owner of the server so I can't change their nick!`,
            ephemeral: true
        })
        if (user.roles.highest.position >= interaction.guild.me.roles.highest.position) return interaction.followUp({
            content: `That user's role is higher than my own, so I can't change their nickname!`,
            ephemeral: true
        })
        if (nickname.length > 32) return interaction.followUp({
            content: `The nickname is too big!`
        })

        try {
            user.setNickname(nickname)
            interaction.followUp({
                content: `Set **${user.user.tag}**'s nickname to **${nickname}**`,
                ephemeral: true
            })
        } catch (e) {
            console.log(e)
            interaction.followUp({
                content: `The name is too long`,
                ephemeral: true
            })
        }
    }
}