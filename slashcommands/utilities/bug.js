const Discord = require('discord.js');

module.exports.run = async (client, inter) => {

    const channel = client.channels.cache.find(c => c.id === "861221123789815819")
    if(channel === undefined) return

    const suggestie = inter.options.getString('jouw-bug');

    const embed = new Discord.MessageEmbed()
        .setDescription(`Wil jij ook een bug aanmaken gebruik: \`/bug\`!`)
        .setAuthor(`| ${inter.user.username}`, inter.user.displayAvatarURL({ dynamic: true }))
        .addField(`Ingestuurd door:`, `${inter.user}`)
        .setColor('RANDOM')
        .addField(`Ingestuurde Bug:`, suggestie)
        .setTimestamp()
        .setFooter("Gemaakt door Tim#2080")
    channel.send({ embeds: [embed] })

    const replied = new Discord.MessageEmbed()
        .setDescription(`Je bug is succesvol verstuurd naar: ${channel}!`)

    await inter.reply({ embeds: [replied] })

}

module.exports.help = {
    name: 'bug'
}