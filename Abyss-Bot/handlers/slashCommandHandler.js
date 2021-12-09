const { glob } = require('glob');
const { promisify } = require('util');
const globPromise = promisify(glob)

module.exports = async (client) => {
    const slashCommands = await globPromise(
        `${process.cwd()}/slashCommands/*.js`
    );

    const arrayOfSlashCommands = [];
    slashCommands.map((value) => {
        const file = require(value);
        if (!file?.name) return;
        client.slashCommands.set(file.name, file);

        if (["MESSAGE", "USER"].includes(file.type)) delete file.description;
        arrayOfSlashCommands.push(file);
    });
    client.on("ready", async () => {
        await client.guilds.cache
            .get("869519072411410472")
            .commands.set(arrayOfSlashCommands);
        console.log(`Loaded all Slash Commands in Bot Test`)
    });
    client.on("ready", async () => {
        await client.guilds.cache
            .get("872351175889014845")
            .commands.set(arrayOfSlashCommands);
        console.log(`Loaded all Slash Commands in Akatsuki`)
    });
}