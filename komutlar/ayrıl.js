exports.run =  asyun(client, message, arg => s){
    if (!message.member.voice.channel) return message.channel.send('Bir Sesli Kanalda Değilsin!')
    if (!message.guild.me.voice.channel) return message.channel.send('Bot Zaten Bir Sesli Kanalda Değil Ki')
    if (message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send('Botu Ses Kanalından Ayırmak İçin Botla Aynı Kanalda Olman Lazım!')
    message.member.voice.channel.leave()
    message.channel.send('Başarı İle Ses Kanalından Ayrıldım')
  exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['leave'],
  perm: 0
}
exports.help = {
  name: 'ayrıl'
}
}