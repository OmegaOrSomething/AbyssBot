const Discord = require('discord.js')
const Beautify = require('beautify');
module.exports = {
  name: 'eval',
  aliases: ['evaluate'],
  description: 'Evaluates JavaScript Code',
  execute: async (client, msg, args) => {

    if (msg.author.id !== '408952667751055360') {
      return msg.channel.send("Only the owner of the bot can use this command!")
    }

    if (!args[0]) {
      msg.channel.send("You need to evaluate _**SOMETHING**_!!")
    }

    try {
      if (args.join(" ").toLowerCase().includes("token")) {
        return;
      }

      const toEval = args.join(" ");
      const evaluated = eval(toEval);

      // let embed = new Discord.MessageEmbed()
      //     .setTitle("Eval")
      //     .addField("Eval script by Omega.", `\`\`\`js\n${Beautify(args.join(" "), { format: "js" })}\n\`\`\``)
      //     .addField("Evaluated", evaluated)
      //     .addField("Type of:", typeof (evaluated))
      //     .setTimestamp()
      //     .setFooter(`${msg.author.tag}`, client.user.displayAvatarURL())
      // msg.channel.send({embeds: [embed]});

    } catch (e) {
      console.log(e)
      msg.channel.send(`An Error Occured!\n\`\`\`${e}\`\`\``)
      //     let errorembed = new Discord.MessageEmbed()
      //         .setTitle("\:x: Error!")
      //         .addField('Error: ', e)
      //         .setTimestamp()
      //         .setFooter(`${msg.author.tag}`, client.user.displayAvatarURL())

      //     if(!e) return;
      //     msg.channel.send({embeds: [errorembed]});
      // 
    }
  }
}