const Discord = require('discord.js');
const client = require("../index").client
const { createCmd } = require('../dataHandler');

client.on('guildMemberAdd', (member) => {

    const channel = member.guild.channels.cache.find(x => x.id === '861221128373927957')
    if(channel === undefined) return

    const joinEmbed = new Discord.MessageEmbed()
        .setDescription(`Welkom ${member.user.username} op onze Discord server!`)
        .setTimestamp()
        .setFooter(`${member.user.username} is gejoint`)
    channel.send({ embeds: [joinEmbed] })
});