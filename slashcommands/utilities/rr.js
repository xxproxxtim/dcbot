const Discord = require('discord.js');
const db = require('quick.db');

module.exports.run = async (client, inter) => {

    if(!inter.member.permissions.has('BAN_MEMBERS')){
        return await inter.reply('Je kan dit commando enkel met beheerder permissies!')
    }

    const channel = inter.options.getChannel('kanaal');
    const role = inter.options.getRole('rol').id;

    const getChannel = inter.guild.channels.cache.find(x => x.id === channel.id);
    if(getChannel.type != 'GUILD_TEXT'){
        return await inter.reply(`Je moet een tekst kanaal vermelden niet een categorie!`)
    }

    const embed = new Discord.MessageEmbed()
        .setDescription(`Klik op de button onder dit bericht om <@&${role}> te ontvangen.`)

        const row = new Discord.MessageActionRow()
        .addComponents(
            new Discord.MessageButton()
                .setCustomId('reactie-rol')
                .setLabel('Klik op mij om de rol te ontvangen')
                .setStyle('PRIMARY')
        );

    channel.send({ embeds: [embed], components: [row] }).then((m) => {
        db.set(`reactieRol_${m.id}`, role)
    });

    await inter.reply('Reactie rol succesvol aangemaakt.')

}

module.exports.help = {
    name: 'rr'
}