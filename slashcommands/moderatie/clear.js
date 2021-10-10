const Discord = require('discord.js');

module.exports.run = async (client, inter) => {

    if(!inter.member.permissions.has('MANAGE_MESSAGES')){
        return await inter.reply('Je hebt niet de juiste permissies!')
    }

    const nummer = await inter.options.getNumber('aantal-berichten');
    if(nummer > 99){return await inter.reply('Je mag maximaal 99 berichten verwijderen')}

    inter.channel.bulkDelete(nummer, true)
    return await inter.reply(`succesvol ${nummer} berichten verwijderd!`)


}

module.exports.help = {
    name: 'clear'
}