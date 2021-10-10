const Discord = require('discord.js');
const client = require("../index").client
const db = require('quick.db');

client.on('guildMemberAdd', async member => {

    const channel = member.guild.channels.cache.find(x => x.id === "861221128373927957")
    if(channel === undefined) return
    const joinEmbed = new Discord.MessageEmbed()
        .setAuthor(`| Welkom bij ${member.guild.name}`, member.guild.iconURL())
        .setDescription(`Welkom **${member.user.username}** bij **${member.guild.name}**! :wave:\n\nWij heten je van harte welkom! Neem een kijkje tussen onze kanalen! Hier staat alles wat wij jullie te bieden hebben!\n\nWat leuks gevonden? Maak een ticket! <#872246143428489266>`)
        .setColor(client.config.color)
        .setFooter(`ID: ${member.id}`, member.user.displayAvatarURL())
        .setTimestamp()
    channel.send({ embeds: [joinEmbed] })

})