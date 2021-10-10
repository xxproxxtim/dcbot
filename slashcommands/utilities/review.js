const Discord = require('discord.js');

module.exports.run = async (client, inter) => {

    const channel = client.channels.cache.find(c => c.id === "895359285251407872")
    if(channel === undefined) return

    const sterren = inter.options.getNumber('aantal-sterren');
    if(sterren > 5){return await inter.reply('Je kan ons maximaal 5 sterren geven!')}
    if(sterren < 1){return await inter.reply('Je moet ons minimaal 1 ster geven!')}

    const review = inter.options.getString('jouw-review');

    const embed = new Discord.MessageEmbed()
        .setDescription(`Wil jij ook een review aanmaken gebruik: \`/review\`!`)
        .setAuthor(`| ${inter.user.username}`, inter.user.displayAvatarURL({ dynamic: true }))
        .addField(`Ingestuurd door:`, `${inter.user.username}`, true)
        .setColor('RANDOM')
        .setFooter("Gemaakt door Tim#2080")
        .setTimestamp()

        if(sterren === 1){embed.addField(`Sterren:`, '🌟', true)}
        if(sterren === 2){embed.addField(`Sterren:`, '🌟🌟', true)}
        if(sterren === 3){embed.addField(`Sterren:`, '🌟🌟🌟', true)}
        if(sterren === 4){embed.addField(`Sterren:`, '🌟🌟🌟🌟', true)}
        if(sterren === 5){embed.addField(`Sterren:`, '🌟🌟🌟🌟🌟', true)}

        embed.addField(`Ingestuurde Review:`, review)
    channel.send({ embeds: [embed] })

    const replied = new Discord.MessageEmbed()
        .setDescription(`Je review is succesvol verstuurd naar: ${channel.name}!`)

    await inter.reply({ embeds: [replied] })

}

module.exports.help = {
    name: 'review'
}