module.exports = {
  kod: "ping",
  async run(client, message, args) {
    const { MessageEmbed } = require('discord.js')
    const embed = new MessageEmbed()
    .setTitle('PİNG ÖLÇÜLÜYOR')
    .setColor('RANDOM')
    .addField('Bot Pingi:', client.ws.ping + ' ms')
    .addField('Mesaj Gecikme Süresi:', `${Date.now() - message.createdTimestamp}`)
    message.channel.send(embed)
  }
}