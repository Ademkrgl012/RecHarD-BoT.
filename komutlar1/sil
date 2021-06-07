const Discord = require('discord.js');
const db = require('quick.db')
exports.run = async(client, message, args) => {
  if (!message.member.hasPermission("ADMINISTRATOR"))return message.channel.send('Bu Komudu Kullanabilmek İçin Yeterli `Yetkiye` Sahip Değilsin')
  const sayi = args[0]
  if (sayi > 100) return message.channel.send("En Az `1 - 100` arasında bir sayı belirtmelisin.")

  let messages = await message.channel.messages.fetch({
    limit: 100
  });

     let jzmesaj = await message.channel.bulkDelete(args[0])

    message.reply(`${jzmesaj.size} adet mesaj silindi!`)
  
 }
 exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['sil'],
  perm: 0
}
exports.help = {
  name: 'sil'
}