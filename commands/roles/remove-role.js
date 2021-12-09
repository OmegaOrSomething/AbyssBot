const Discord = require('discord.js')
module.exports = {
    name: 'remove-role',
    description: 'Removes the mentioned role from a mentioned user.',
    execute: async (client, msg, args) => {

        if (!msg.member.permissions.has('MANAGE_ROLES')) return msg.reply('You do not have permissions to do that');

        if (msg.mentions.members.first().roles.highest.position > msg.guild.members.resolve(client.user).roles.highest.position) return msg.channel.send("My highest role is lower than the mentioned user's role");

        const mem = msg.mentions.members.first() || await msg.guild.members.fetch(args[0]);
        if (!mem) return msg.reply('Please mentions a valid user');

        const temp = args[1];
        const role = msg.mentions.roles.first() || msg.guild.roles.cache.find(r => r.id === temp);
        if (!role) msg.reply('Please mention a valid role');
        try {
        mem.roles.remove(role);
        msg.reply(`Removed the role ${role.name} from ${mem}`)
        } catch(e) {
          console.log(e)
        }
    }
}