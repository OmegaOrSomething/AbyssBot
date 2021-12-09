const Discord = require('discord.js');

module.exports = {
    name: 'add-role',
    description: 'Adds the mentioned role to the mentioned user',
    execute: async (client, msg, args) => {

        if (!msg.member.permissions.has('MANAGE_ROLES')) return msg.reply('You do not have permissions to do that');

        const mem = msg.mentions.members.first() || await msg.guild.members.fetch(args[0]);
        if (!mem) return msg.reply("Please mention a valid user!")
        const temp = args[1];
        // if(typeof temp !== 'number') return msg.reply('That is not a number!');
        const role = msg.mentions.roles.first() || msg.guild.roles.cache.find(r => r.id === temp);
        if (!role) return msg.reply('Please mention a valid role or role id!');
        try{
        mem.roles.add(role);
        } catch(e) {
          console.log(e)
        }
        msg.reply(`Added role **${role.name}** to ${mem}`);

    }
}