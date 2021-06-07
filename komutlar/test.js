const Discord = require('discord.js')
const { MessageEmbed } = require('discord.js')
exports.run = async(client, message, args) => {
const embed = new MessageEmbed()
.setTitle('Test Aga')
.addField('Test Aga')
message.channel.send(embed)
}
exports.conf = {
enabled: 'true',
guildOnly: 'false',
aliases: [''],
permLevel: 0
}

exports.help = {
name: 'test'
}