const Discord = require("discord.js");
const db = require("quick.db");
exports.run = async(client, message, args) => {
  if (!message.member.hasPermission("MANAGE_GUILD"))
    return message.reply(
      `Bu komutu kullanabilmek için **Sunucuyu Yönet** iznine sahip olmalısın!`
    );

  if (db.has(`gçkanal_${message.guild.id}`) === false) {
    const embed = new Discord.MessageEmbed()
      .setDescription(`Giriş çıkışı Ayarlamadığın İçin Sıfırlayamazsın!`)
      .setColor("RED")
      .setTimestamp(`Ayarlamak İçin r!gç-ayarla #kanal`);
    message.channel.send(embed);
    return;
  }
  db.delete(`gçkanal_${message.guild.id}`);

  const embed = new Discord.MessageEmbed()
    .setDescription(`Giriş Çıkış Başarıyla Sıfırlandı`)
    .setColor("RANDOM")
    .setTimestamp();
  message.channel.send(embed);
  return;
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['abone-log'],
  perm: 0
}
exports.help = {
  name: 'abonelog'
}