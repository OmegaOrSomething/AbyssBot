const { mongooseConnectionString } = require('../config.json')
const mongoose = require('mongoose')
module.exports = {
    name: 'ready',
    once: true,
    /**
     * 
     * @param {Client} client 
     */
    async execute(client) {
        console.log(`${client.user.tag} is online!`);
        client.user.setActivity(`Into Your Mom`, { type: `WATCHING` })
        client.channels.cache.get(`904759712149549067`).send(`**${client.user.tag} is back online!**`)

        if (!mongooseConnectionString) return console.log('There is no valid Connection String provided.')
        mongoose.connect(mongooseConnectionString, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
        }).then(() => console.log('Connected to MongoDB'))
    }
}