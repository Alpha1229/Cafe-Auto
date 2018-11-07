exports.run = (_client, message, args) => {
    let Cash = args[0]; // Remember arrays are 0-based!.
    let Tokens = args[1];
    let LifeCoins = args[2];
    const Discord = require('discord.js')

    var embed = new Discord.RichEmbed()
        .setTitle("Rebirth")
        .setAuthor("Author Name", `${message.author.avatarURL}`)
        .setTimestamp()
        .addField("Collective Cash", `${Cash}`)
        .addField("Lifecoins", `${LifeCoins}`)
        .addField("Tokens", `${Tokens}`)
        .addBlankField(true)

    message.channel.send({
        embed
    })
}