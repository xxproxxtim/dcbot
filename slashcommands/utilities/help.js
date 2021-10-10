const Discord = require('discord.js');

module.exports.run = async (client, inter) => {

    const option = inter.options.getString('categorie');

    if(option === 'tickets'){
        const ticketEmbed = new Discord.MessageEmbed()
            .setAuthor(`${client.user.username} Tickets`)
            .setDescription(`\`/add user\` - Voeg een gebruiker toe aan een ticket.
            \`/remove user\` - Verwijder een gebruiker uit een ticket.
            \`/rename nieuwe-naam\` - Geef een ticket een nieuwe naam.
            \`/new\` - Open een nieuwe ticket.
            \`/close\` - Sluit een open ticket!`)
        await inter.reply({ embeds: [ticketEmbed] })
    }
    if(option === 'moderatie'){
        const moderatieEmbed = new Discord.MessageEmbed()
            .setAuthor(`${client.user.username} Moderatie`)
            .setDescription(`\`/ban gebruiker\` - Verban een gebruiker uit je Discord.
            \`/kick gebruiker\` - Kick een gebruiker uit je Discord.
            \`/clear aantal-berichten\` - Verwijder een aantal berichten uit een kanaal.`)
        await inter.reply({ embeds: [moderatieEmbed] })
    }

}

module.exports.help = {
    name: 'help'
}