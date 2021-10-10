const Discord = require('discord.js');

module.exports.run = async (client, message, args, prefix) => {
    
    if(!message.member.permissions.has('ADMINISTRATOR')){
        return message.reply({ content: 'Jij kan dit commando niet!' })
    }

    const text = args.join(" ")
    if(!text){return message.channel.send({ content: 'Je moet tekst invoeren om dit commando uit te voeren!' })}

    message.delete()

    const embed = new Discord.MessageEmbed()
        .setDescription(text)
        .setColor('AQUA')
        .setTimestamp()
        .setFooter("Gemaakt door Tim#2080")
    message.channel.send({ embeds: [embed] })

}

module.exports.help = {
    name: 'announce',
    aliases: ['say', 's']
}