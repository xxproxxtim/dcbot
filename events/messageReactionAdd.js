const Discord = require('discord.js');
const client = require("../index").client
const { Permissions } = require('discord.js')

client.on('messageReactionAdd', async (reaction, user) => {

    console.log('succes')

})