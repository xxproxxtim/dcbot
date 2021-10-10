const Discord = require('discord.js');
const client = require("../index").client
const { createCmd } = require('../dataHandler');

client.on('messageUpdate', async (oldMessage, newMessage) => {
    
    const log = oldMessage.guild.channels.cache.find(x => x.id === '861221128373927957')
    if(log === undefined) return

    const embed = new Discord.MessageEmbed()
        .setDescription(`[Klik hier om naar het bericht te gaan](https://discord.com/channels/${oldMessage.guildId}/${oldMessage.channelId}/${oldMessage.id})`)
        .addField(`Het oude bericht`, `${oldMessage.content}`, false)
        .addField(`Het nieuwe bericht`, `${newMessage.content}`, false)
        .setTimestamp()
        .setFooter("Gemaakt door Tim#2080")
    log.send({ embeds: [embed] })


})