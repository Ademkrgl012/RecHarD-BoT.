const discord = require('discord.js');
const Database = require("plasma-db");
const db = new Database("./database1.json"); 
module.exports = {
  kod: "yapay-zeka-sistem",
async execute(client, message, args){
if(args[0] == "aç") {
let engin = message.mentions.channels.first()
if(!engin) return message.channel.send('Lütfen yapay zeka kanlını belirt!')
db.set(`yapayzekakanal_${message.guild.id}`, engin.id)
db.set(`yapayzeka_${message.guild.id}`, 'aktif')
return message.channel.send('Yapay zeka sistemi açıldı!')
};
if(args[0] == "kapat") {
let engin = db.fetch(`yapayzeka_${message.guild.id}`)
if(!engin) return message.channel.send('Yapay zeka sistemi aktif değil!')
db.delete(`yapayzekakanal_${message.guild.id}`)
db.delete(`yapayzeka_${message.guild.id}`)
return message.channel.send('Yapay zeka sistemi sıfırlandı!')
}
}
};