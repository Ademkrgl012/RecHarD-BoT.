const Discord = require("discord.js");
module.exports = {
  kod: "nitro-üret",
async execute(client, message, args){
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
      "discord.com/billing/promotions/" +
        rasteleSembol(16, "0aA") +
        " ||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​|| discord.gift/d72hs73vql3H02Hs05J6D9n2"
    );
  }, 1 * 3000);
}
}