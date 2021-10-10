const Discord = require('discord.js');
const client = require("../index").client
const { createCmd } = require('../dataHandler');

client.on('guildMemberAdd', (member) => {

    const channel = client.channels.cache.find(x => x.id === '861221128373927957')
    if(channel === undefined) return

    const leavEmbed = new Discord.MessageEmbed()
        .setDescription(`Totziens! ${member.user.username} is de server verlaten!`)
        .setTimestamp()
        .setFooter(`${member.user.username} is geleavt`)
    channel.send({ embeds: [leavEmbed] })

    const role = member.guild.roles.cache.find(x => x.id === '870989718999949312')
    member.roles.add(role).catch(() => {});

});