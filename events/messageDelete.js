const Discord = require('discord.js');
const client = require("../index").client
const { createCmd } = require('../dataHandler');

client.on('messageDelete', async (message) => {
    
    const log = message.guild.channels.cache.find(x => x.id === '861221128373927957')
    if(log === undefined) return

    const embed = new Discord.MessageEmbed()
        .addField(`Het verwijderde bericht:`, `${message.content}`, false)
        .addField(`Gebruiker`, `${message.author.username}`, false)
        .setTimestamp()
        .setFooter("Gemaakt door Tim#2080")
    log.send({ embeds: [embed] })


})