const Discord = require('discord.js');
module.exports = {
  kod: "atam",
async run(client, message){
     
      const vatan = new Discord.MessageEmbed()
    .setDescription('🌹 **Atam Sen Çok Yaşa.**')
    .setColor(3447003)
    .setImage(`https://i.hizliresim.com/8CIYMl.gif`)
    return message.channel.send(vatan);
    
}
}