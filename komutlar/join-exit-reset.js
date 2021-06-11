const Discord = require("discord.js");
const db = require("quick.db");
module.exports = {
  kod: "join-exit-reset",
async execute(client, message, args){
  if (!message.member.hasPermission("MANAGE_GUILD"))
    return message.reply(
      `You Must Have **Manage Server** Permission To Use This Command!`
    );

  if (db.has(`gçkanal1_${message.guild.id}`) === false) {
    const embed = new Discord.MessageEmbed()
      .setDescription(`You Can't Reset Because You Didn't Set Input Output!`)
      .setColor("RED")
      .setTimestamp(`To Set r!join-exit-set #channel`);
    message.channel.send(embed);
    return;
  }
  db.delete(`gçkanal1_${message.guild.id}`);

  const embed = new Discord.MessageEmbed()
    .setDescription(`Login Output Reset Successfully`)
    .setColor("RANDOM")
    .setTimestamp();
  message.channel.send(embed);
  return;
}
};