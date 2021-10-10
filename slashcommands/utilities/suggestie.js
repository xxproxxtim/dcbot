const Discord = require('discord.js');

module.exports.run = async (client, inter) => {

    const channel = client.channels.cache.find(c => c.id === "852968156393635880")
    if(channel === undefined) return

    const suggestie = inter.options.getString('jouw-idee');

    const embed = new Discord.MessageEmbed()
        .setDescription(`Wil jij ook een suggestie aanmaken gebruik: \`/suggestie\`!`)
        .setAuthor(`| ${inter.user.username}`, inter.user.displayAvatarURL({ dynamic: true }))
        .addField(`Ingestuurd door:`, `${inter.user}`)
        .setColor('RANDOM')
        .addField(`Ingestuurde Suggestie:`, suggestie)
        .setTimestamp()
    channel.send({ embeds: [embed] })

    const replied = new Discord.MessageEmbed()
        .setDescription(`Je suggestie is succesvol verstuurd naar: ${channel}!`)

    await inter.reply({ embeds: [replied] })

}

module.exports.help = {
    name: 'suggestie'
}