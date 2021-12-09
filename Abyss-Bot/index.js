console.log(`Starting the process!`)
// ------------------------------------- REQUIRING PACKAGES --------------------------------------------------------------

const Discord = require('discord.js');
const keepAlive = require(`./server`)
const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MEMBERS] });
const mongoose = require('mongoose')
const { prefix, token, ansArr, quesArr, truthArr } = require('./config.json');
// DiscordBotDB
const fs = require('fs');
const ms = require('ms');
const ascii = require('ascii-table')
const mongooseConnectionString = process.env.MONGO

client.commands = new Discord.Collection();
client.slashCommands = new Discord.Collection();

['eventHandler', 'commandHandler', 'slashCommandHandler'].forEach(handler => {
    require(`./handlers/${handler}`)(client);
});

// ---------------------------------------- CUSTOM PREFIX ------------------------------------------------------------------

const prefixSchema = require(`./models/prefix`)
client.prefix = async function(msg) {
  let custom;

  const data = await prefixSchema.findOne({ Guild: msg.guild.id })

  if (data) {
    custom = data.Prefix;
  } else {
    custom = prefix
  }
  return custom;
}

// --------------------------------------------- AFK COMMAND STUFF --------------------------------------------------------

const AFKS = require('./models/AfkSchema')

client.on("messageCreate", async (msg, guild) => {

  let data2;
  try {
    data2 = await AFKS.findOne({
      userId: msg.author.id,
      guildId: msg.guild.id
    })
    if (!data2) {
      data2 = await AFKS.create({
        userId: msg.author.id,
        guildId: msg.guild.id
      })
    }
  } catch (error) {
    console.log(error)
  }

  if (data2.AFK === true) {
    data2.AFK_Reason = null
    data2.AFK = false
    msg.reply("You are not AFK anymore!")
    if (msg.member.displayName.includes(`[AFK] `)) {
      msg.member.setNickname(msg.member.displayName.replace(`[AFK] `, ``)).catch(e => msg.channel.send(`**No Nickname was set to change back!**`))
    }
    await data2.save()
  }



  if (msg.mentions.members.first()) {
    let data3;
    try {
      data3 = await AFKS.findOne({
        userId: msg.mentions.members.first().id,
        guildId: msg.guild.id
      })
      if (!data3) {
        data3 = await AFKS.create({
          userId: msg.mentions.members.first().id,
          guildId: msg.guild.id
        })
      }
    } catch (error) {
      console.log(error)
    }

    if (data3.AFK == true) {
      msg.channel.send(`**${msg.mentions.members.first().user.tag}** is AFK for the reason: **${data3.AFK_Reason || "No Reason"}**`)
    }

  }
})

// Ping stuff

client.on('messageCreate', msg => {
  if (msg.content.includes('<@!897035686123802674>')) {

    let pingEmbed = new Discord.MessageEmbed()
      .setTitle(`Abyss!`)
      .setColor('DARK_BUT_NOT_BLACK')
      .setDescription(`Hello! I am **Abyss Bot**! I was coded by **Omega#6666**. My prefix is **${prefix}**`)
      .setTimestamp()

    msg.reply({ embeds: [pingEmbed] })

  }
})

// --------------------------------------------------- WELCOME AND GOODBYE ------------------------------------------------------

client.on('guildMemberAdd', (mem) => {
  if(mem.guild.id === '872351175889014845') {
  const guildName = mem.guild.name;
  client.channels.cache.get('872351175889014848').send(`Welcome to the server <@${mem.id}>! Be sure to check out <#872361950728831047> and <#872411071091204156>`)
  try {
    mem.send(`Hey <@${mem.id}>. Welcome to ${guildName}! We hope you have a good time here!`)
  }
  catch (e) {
    console.log(e)
  }
  }
})
try {
client.on('guildMemberRemove', (rem) => {
  if(mem.guild.id === '872351175889014845') {
  client.channels.cache.get('872435591277580360').send(`**<@${rem.id}>** just left the server... <:BT_cry:902545701463015455> `)
  }
})
} catch(e) {
  console.log(e)
}

// ------------------------------------------------------ CLIENT LOGIN ----------------------------------------------------------- 

keepAlive()

client.login(process.env.TOKEN);
const mySecret = process.env['TOKEN']
