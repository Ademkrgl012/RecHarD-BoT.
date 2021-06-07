const db = require("quick.db")
const { MessageEmbed } = require('discord.js')
exports.run = async(client, message, args) => {
    if (!message.member.hasPermission("ADMINISTRATOR"))return message.channel.send('Bu Komudu Kullanabilmek İçin Yeterli Yetkiye Sahip Değilsin')
    if (!args[0]) return message.channel.send('Lütfen Geçerli Bir Prefix Girin')
    const eskiprefix = db.has("prefix" + message.guild.id) ? db.fetch("prefix" + message.guild.id) : "Yok"
    if (eskiprefix == args.join(" ")) return message.channel.send("Prefix Ayarım Zaten Böyle")
    db.set("prefix" + message.guild.id, args.join(" "))
    const embed = new MessageEmbed()
    .setTitle("Başarı İle Prefix Değiştirildi")
    .setDescription("Yeni Prefix'iniz **" + args.join(" ") + "** Oldu.")
    .addField("Eski Prefix:", eskiprefix)
    .setFooter("Prefix Sıfırlamak İçin " + args.join(" ") + "prefix-sıfırla Yazabilirsiniz")
    message.channel.send(embed)
  }
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['prefix-ayarla'],
  perm: 0
}
exports.help = {
  name: 'prefix-ayarla'
}