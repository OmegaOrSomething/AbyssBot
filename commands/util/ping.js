module.exports = {
    name: 'ping',
    description: 'Simple Ping Command!',
    execute(client, msg, args) {
        msg.reply("Pinging...!").then(m => {
            var ping = m.createdTimestamp - msg.createdTimestamp;
            var botPing = Math.round(client.pi);

            m.edit(`**<:ping:902395770852999169> Pong! Your ping is: ${ping}ms**`);
        })
    }
}