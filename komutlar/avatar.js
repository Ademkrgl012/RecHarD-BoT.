const Discord = require('discord.js')
module.exports = {
   kod: "avatar",
async execute(client, message, args){
  
  let user = message.mentions.users.first() || message.author
  if(user){
    
const embed = new Discord.MessageEmbed()
//.setAuthor(`${user.tag} adlı kullanıcının avatarı:`)
 .setDescription(`${message.author.tag} adlı kullanıcının avatarı:`)
.setImage(user.displayAvatarURL({dynamic:true})) 
.setTimestamp()
.setColor("RANDOM")
message.channel.send(embed)
 } else {
  const embed = new Discord.MessageEmbed()
//.setAuthor(`${message.author.tag} adlı kullanıcının avatarı:`)
  .setDescription(`${message.author.tag} adlı kullanıcının avatarı:`)
.setImage(message.author.avatarURL({dynamic:true}))
.setTimestamp()
  .setColor("RANDOM")
message.channel.send(embed)
 }
}
};
