const { readdirSync } = require('fs');
const ascii = require('ascii-table')
module.exports = (client) => {
    let table = new ascii("Commands")
    table.setHeading("Command", "Load Status")
    var cnt = 0;
    const commandFolders = readdirSync('./commands');
    for (const folder of commandFolders) {
        const commandFiles = readdirSync(`./commands/${folder}`).filter(file => file.endsWith('.js'))
        for (const file of commandFiles) {
            const command = require(`../commands/${folder}/${file}`)
            try {
                if (command.name) {
                    client.commands.set(command.name, command)
                    table.addRow(file, '✅')
                    cnt++;
                } else {
                    table.addRow(file, `❌ -> missing a help.name, or help.name is not a string`)
                    continue;
                }
            } catch (e) {
                console.log(e)
            }
        }
    }

    console.log(table.toString())
    console.log(`Successfully Loaded ${cnt} Commands!`)
}