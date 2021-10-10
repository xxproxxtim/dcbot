const Discord = require('discord.js');
const client = require("../index").client
const { createCmd } = require('../dataHandler');

client.on('guildMemberAdd', (member) => {

    const channel = member.guild.channels.cache.find(x => x.id === '880346444488405063')
    if(channel === undefined) return

    const joinEmbed = new Discord.MessageEmbed()
        .setDescription(`Welkom ${member} op onze Discord server!\n\rLeest ook effe <#851539876422877254> door!`)
        .setTimestamp()
        .setFooter(`${member.user.username} is gejoint`)
    channel.send({ embeds: [joinEmbed] })

    const role = member.guild.roles.cache.find(x => x.id === '870989718999949312')
    member.roles.add(role).catch(() => {});

});