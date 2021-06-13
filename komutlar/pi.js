const Discord = require('discord.js')
const { MessageEmbed } = require('discord.js')
const client = new Discord.Client()
const disbut = require('discord-buttons')(client);
module.exports = {
  kod: "pi",
  async execute(client, message, args){
      
      const ping = new MessageEmbed()
      .setColor("RANDOM")
      .addField('Pingim Ölçülüyor....')
      
      const ping2 = new MessageEmbed()
      .setTitle('PİNG ÖLÇÜLÜYOR')
    .setColor('RANDOM')
    .addField('Bot Pingi:', client.ws.ping + ' ms')
    .addField('Mesaj Gecikme Süresi:', `${Date.now() - message.createdTimestamp}`)

        let button = new disbut.MessageButton()
        .setStyle('green')
        .setLabel('Tıkla Aga') 
        .setID('click_to_function') 
        
        let button2 = new disbut.MessageButton()
        .setStyle('red')
        .setLabel('İstemiyorsan Tıkla Aga')
        .setId('click_to_function2')

        message.channel.send('Pingimi Ölçmek İçin Butona Tıkla', {
            buttons:[
                button,button2
            ]
        })

  if (button.id === 'click_to_function') {
    button.channel.send(ping).then(m => {
      setTimeout(() => {
        m.edit(ping2)
      }, 5000)
    })
    
    if (button.id === 'click_to_function2') {
      button.channel.send('Peki Aga Canın Sağolsun :)')
    }}}}