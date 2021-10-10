const Discord = require('discord.js');

module.exports.run = async (client, message, args, prefix) => {
    
    if(!message.member.permissions.has('ADMINISTRATOR')){
        return message.reply({ content: 'Jij kan dit commando niet!' })
    }

    const text = args.join(" ")
    if(!text){return message.channel.send({ content: 'Je moet tekst invoeren om dit commando uit te voeren!' })}

    message.delete()
    message.channel.send({ content: text })

}

module.exports.help = {
    name: 'speak',
    aliases: []
}