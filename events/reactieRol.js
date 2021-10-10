const Discord = require('discord.js');
const client = require("../index").client
const { createCmd } = require('../dataHandler');
const db = require('quick.db');

client.on('interactionCreate', async (inter) => {

    if(inter.isButton()){

        if(inter.customId === 'reactie-rol'){
            const role = inter.guild.roles.cache.find(x => x.id === db.get(`reactieRol_${inter.message.id}`))
            if(inter.member.roles.cache.has(db.get(`reactieRol_${inter.message.id}`))){
                inter.member.roles.remove(role).catch(() => {});
                await inter.reply(`De ${role} is van je afgenomen!`)
            } else {
                inter.member.roles.add(role).catch(() => {});
                await inter.reply(`Je hebt de ${role} ontvangen!`)
            }

            

           
        }

    }
    
})