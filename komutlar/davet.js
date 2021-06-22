const { MessageEmbed } = require('discord.js')
module.exports = {
  kod: "davet",
  async execute(client, message, args){
  const embed = new MessageEmbed()
  .setColor("BLUE")
    .setDescription(`<a:ok:842891116805226517>${message.member} [Beni Sunucuna Davet Etmek İçin Tıkla](https://discord.com/api/oauth2/authorize?client_id=849023095447748608&permissions=8&scope=bot)`)
    message.channel.send(embed)
}
}