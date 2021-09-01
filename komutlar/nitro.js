const Discord = require("discord.js");
module.exports = {
  kod: "nitro-üret",
async execute(client, message, args){
if (!message.member.hasPermission("ADMINISTRATOR"))return message.channel.send('Bu Komudu Kulllanmak İçin Gerekli `Yetkiye` Sahip Değilsin!')
  function rasteleSembol(uzunluk, semboller) {
    // ArdaDemr Youtube Kanalına ait nitro generator altyapısı
    var maske = "";

    if (semboller.indexOf("a") > -1) maske += "abcdefghijklmnopqrstuvwxyz";

    if (semboller.indexOf("A") > -1) maske += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    if (semboller.indexOf("0") > -1) maske += "0123456789";

    var sonuc = "";

    for (var i = uzunluk; i > 0; --i) {
      sonuc += maske[Math.floor(Math.random() * maske.length)];
    }

    return sonuc;
    // ArdaDemr Youtube Kanalına ait nitro generator altyapısı
  }
  setInterval(function() {
    message.channel.send(
      "discord.com/gifts/" +
        rasteleSembol(24, "0aA") 
    );
  }, 1 * 3000);
}
}