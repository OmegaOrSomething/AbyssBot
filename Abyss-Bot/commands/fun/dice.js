module.exports = {
    name: 'dice',
    description: 'Rolls a dice from 1 to 6',
    execute: async (client, msg, args) => {

        var diceArr = [
            1,
            2,
            3,
            4,
            5,
            6
        ]

        let randoms = Math.floor(Math.random() * diceArr.length)
        let randomResp = diceArr[randoms]

        msg.channel.send("**Rolling...!**").then(m => { m.edit(`**<:yay:902741768959844432> You rolled a ${randomResp}!**`) })

    }
}