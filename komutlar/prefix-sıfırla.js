const db = require('quick.db')
const { MessageEmbed } = require('discord.js')
exports.run = async(client, message, args) => {
    if (!message.member.hasPermission("ADMINISTATOR")) return message.channel.send("Bu Komudu Kullanabilmek İçin Yeterli Yetkiye Sahip Değilsin!")
    db.delete("prefix" + message.guild.id)
    const embed = new MessageEmbed()
    .setTitle("Başarıyla Prefix Sıfırlarndı")
    .setColor("RANDOM")
    .setDescription("Başarıyla Prefix'iniz Sıfırlandı. Yeni Prefix'iniz **r!**")
    .setFooter("Prefix Değiştirmek İçin r!prefix Yazabilirsiniz")
    message.channel.send(embed)
  }
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['prefix-sıfırla'],
  perm: 0
}
exports.help = {
  name: 'prefix-sıfırla'
}