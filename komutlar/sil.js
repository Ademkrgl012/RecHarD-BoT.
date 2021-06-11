const Discord = require('discord.js');
const db = require('quick.db')
module.exports = {
  kod: "sil",
async execute(client, message, args){
  if (!message.member.hasPermission("ADMINISTRATOR"))return message.channel.send('Bu Komudu Kullanabilmek İçin Yeterli `Yetkiye` Sahip Değilsin')
  const sayi = args[0]
  if (sayi > 1000) return message.channel.send("En Az `1 - 1000` arasında bir sayı belirtmelisin.")

  let messages = await message.channel.messages.fetch({
    limit: 1000
  });

     let jzmesaj = await message.channel.bulkDelete(args[0])

    message.reply(`${jzmesaj.size} adet mesaj silindi!`)
  
 }
 };