const { MessageEmbed } = require('discord.js');
exporta.run = async(client, message, params) => {
    if (!message.guild) {
    const ozelmesajuyari = new MessageEmbed()
    .setColor(0xFF0000)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL())
    .setTitle('**Eğlence Komutları Özel Mesajlarda Kullanılamaz!**')
    return message.author.send(ozelmesajuyari); }
    if (message.channel.type !== 'dm') {
      const embed = new MessageEmbed()
    .setAuthor(`${message.author.tag}
Valla Reis Developer Portala Girmeye Üşendim...`)
    .setColor("RANDOM")
    .setTimestamp()
    return message.channel.send(embed);
    }
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['token'],
  perm: 0
}
exports.help = {
  name: 'token'
}