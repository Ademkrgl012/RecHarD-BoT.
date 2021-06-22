const Discord = require("discord.js");
const db = require("quick.db");
module.exports = {
  kod: "join-exit-set",
async execute(client, message, args){
  if (!message.member.hasPermission("MANAGE_GUILD")) return message.reply(`You Must Have **Administrator** Permission To Use This Command!`);

  let channel = message.mentions.channels.first();
  if (!channel) {
    return message.reply("Tag a Channel");
  }
  db.set(`gçkanal1_${message.guild.id}`, channel.id);
  //var i = db.set(`capsE_${message.guild.id}`, "acik")
  message.channel.send(`:white_check_mark: | ** Picture Welcome - Bye Channel Set to ${channel}.** `);
}
};