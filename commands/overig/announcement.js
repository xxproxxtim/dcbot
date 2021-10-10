module.exports.run = async(bot, message, args) => {

    if(!message.member.permission.has("ADMINISTRATOR")) return message.reply("Sorry jij kan dat niet");

    var seperator = "|";

    if(args[0] == null){

        var embed = new discord.MessageEmbed()
        .setTitle("Gebruik")
        .setColor("#009bff")
        .setDescription(`Maak een annoucement door gebruik te maken van: \n !annoucement titel ${seperator} bericht`)
    }

}

module.exports.help= {
    name: "announcement"
}