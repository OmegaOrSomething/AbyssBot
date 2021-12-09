const Discord = require('discord.js')
module.exports = {
    name: 'wouldyourather',
    aliases: ['wyr'],
    description: 'Would You Rather Command',
    execute: async (client, msg, args) => {

        let wyrArr = [
            "Would you rather have the ability to see 10 minutes into the future or 150 years into the future?",
            "Would you rather have telekinesis (the ability to move things with your mind) or telepathy (the ability to read minds)?",
            "Would you rather team up with Wonder Woman or Captain Marvel?",
            "Would you rather be forced to sing along or dance to every single song you hear?",
            "Would you rather find true love today or win the lottery next year?",
            "Would you rather be in jail for five years or be in a coma for a decade?",
            "Would you rather have another 10 years with your partner or a one-night stand with your celebrity crush?",
            "Would you rather be chronically under-dressed or overdressed?",
            "Would you rather have everyone you know be able to read your thoughts or for everyone you know to have access to your Internet history?",
            "Would you rather lose your sight or your memories?",
            "Would you rather have universal respect or unlimited power?",
            "Would you rather give up air conditioning and heating for the rest of your life or give up the Internet for the rest of your life?",
            "Would you rather swim in a pool full of Nutella or a pool full of maple syrup?",
            "Would you rather labor under a hot sun or extreme cold?",
            "Would you rather stay in during a snow day or build a fort?",
            "Would you rather buy 10 things you don’t need every time you go shopping or always forget the one thing that you need when you go to the store?",
            "Would you rather never be able to go out during the day or never be able to go out at night?",
            "Would you rather have a personal maid or a personal chef?",
            "Would you rather have Beyoncé’s talent or Jay-Z‘s business acumen?",
            "Would you rather be 11 feet tall or nine inches tall?",
            "Would you rather be an extra in an Oscar-winning movie or the lead in a box office bomb?",
            "Would you rather vomit on your hero or have your hero vomit on you?",
            "Would you rather communicate only in emoji or never be able to text at all ever again?",
            "Would you rather be royalty 1,000 years ago or an average person today?",
            "Would you rather lounge by the pool or on the beach?",
            "Would you rather wear the same socks for a month or the same underwear for a week?",
            "Would you rather work an overtime shift with your annoying boss or spend full day with your mother-in-law?",
            "Would you rather cuddle a koala or pal around with a panda?",
            "Would you rather have a sing-off with Ariana Grande or a dance-off with Rihanna?",
            "Would you rather always have B.O. and not know it or always smell B.O. on everyone else?",
            "Would you rather watch nothing but Hallmark Christmas movies or nothing but horror movies?",
            "Would you rather always be 10 minutes late or always be 20 minutes early?",
            "Would you rather spend a week in the forest or a night in a real haunted house?",
            "Would you rather find a rat in your kitchen or a roach in your bed?",
            "Would you rather have a pause or a rewind button in your life?",
            "Would you rather always have a full phone battery or a full gas tank?",
            "Would you rather lose all your teeth or lose a day of your life every time you kissed someone?",
            "Would you rather drink from a toilet or pee in a litter box?",
            "Would you rather be forced to live the same day over and over again for a full year, or take 3 years off the end of your life?",
            "Would you rather never eat watermelon ever again or be forced to eat watermelon with every meal?",
            "Would you rather get a paper cut every time you turn a page or bite your tongue every time you eat?",
            "Would you rather oversleep every day for a week or not get any sleep at all for four days?",
            "Would you rather die in 20 years with no regrets or live to 100 with a lot of regrets?",
            "Would you rather sip gin with Ryan Reynolds or shoot tequila with Dwayne “The Rock” Johnson?",
            "Would you rather get trapped in the middle of a food fight or a water balloon fight?",
            "Would you rather walk to work in heels or drive to work in reverse?",
            "Would you rather spend a year at war or a year in prison?",
            "Would you rather die before or after your partner?",
            "Would you rather have a child every year for 20 years or never have any children at all?",
            "Would you rather take amazing selfies but look terrible in all other photos or be photogenic everywhere but in your selfies?",
            "Would you rather be gassy on a first date or your wedding night?",
            "Would you rather Danny DeVito or Danny Trejo play you in a movie?",
            "Would you rather be able to take back anything you say or hear any conversation that is about you?",
            "Would you rather have skin that changes color based on your emotions or tattoos appear all over your body depicting what you did yesterday?",
            "Would you rather hunt and butcher your own meat or never eat meat again?",
            "Would you rather lose all of your friends but keep your BFF or lose your BFF but keep the rest of your buds?",
            "Would you rather have people spread a terrible lie about you or have people spread terrible but true tales about you?",
            "Would you rather walk in on your parents or have them walk in on you?",
            "Would you rather be the absolute best at something that no one takes seriously or be average at something well respected?",
            "Would you rather have unlimited battery life on all of your devices or have free WiFi wherever you go?",
            "Would you rather have Billie Eilish‘s future or Madonna’s legacy?",
            "Would you rather have a third nipple or an extra toe?",
            "Would you rather solve world hunger or global warming?",
            "Would you rather have to wear every shirt inside out or every pair of pants backward?",
            "Would you rather live in a treehouse or in a cave?",
            "Would you rather win $25,000 or your best friend win $100,000?",
            "Would you rather be in history books for something terrible or be forgotten completely after you die?",
            "Would you rather travel the world for free for a year or have $50,000 to spend however you please?",
            "Would you rather your to only be able to talk to your dog or for your dog to be able to talk to only you—and everyone thinks you’re nuts?",
            "Would you rather have a mullet for a year or be bald (no wigs!) for six months?",
            "Would you rather go back to the past and meet your loved ones who passed away or go to the future to meet your children or grandchildren to be?",
            "Would you rather have Angelina Jolie’s lips or with Jennifer Aniston‘s hair?",
            "Would you rather stay the age you are physically forever or stay the way you are now financially forever?",
            "Would you rather be in a zombie apocalypse or a robot apocalypse?",
            "Would you rather be alone all your life or surrounded by really annoying people?"
        ]

        let wyrRand = Math.floor(Math.random() * wyrArr.length)
        let wyrResp = wyrArr[wyrRand]

        var wyrEmbed = new Discord.MessageEmbed()
            .setTitle(`Would You Rather`)
            .setColor('RANDOM')
            .setFooter('Coded by Omega#6666')
            .setTimestamp()
            .setDescription(`Your **Would You Rather** question is:\n**${wyrResp}**`)

        msg.reply({ embeds: [wyrEmbed] })

    }
}