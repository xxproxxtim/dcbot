const discord = require("discord.js");

module.exports.run = async(bot, message, args) => {

    return message.channel.send('Staff, game greator: Tim.');

}

module.exports.help = {
    name: "staff"
}