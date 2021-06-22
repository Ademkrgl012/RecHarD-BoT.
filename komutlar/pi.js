const Discord = require('discord.js')
const { MessageEmbed } = require('discord.js')
const client = new Discord.Client()
const disbut = require('discord-buttons')(client);
module.exports = {
  kod: "pi",
  async execute(client, message, args){
      
      const ping = new MessageEmbed()
      .setColor("RANDOM")
      .addField('Pingim Ölçülüyor....')
      
      const ping2 = new MessageEmbed()
      .setTitle('PİNG ÖLÇÜLÜYOR')
    .setColor('RANDOM')
    .addField('Bot Pingi:', client.ws.ping + ' ms')
    .addField('Mesaj Gecikme Süresi:', `${Date.now() - message.createdTimestamp}`)
message.channel.send(ping).then(m => {
setTimeout(() => {
        m.edit(ping2) // sonra mesajı pingi söyleyerek editleyecek
    }, 5000); // burası da kaç saniye de editleyeceği || 1000 = 1 saniye || 5000 = 5 saniye
})
}}
