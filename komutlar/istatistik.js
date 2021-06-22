const Discord = require('discord.js')
const { MessageEmbed } = require('discord.js')
const moment = require('moment')
require('moment-duration-format')
const os = require('os')
var GHz = "`2.30GHz`"
module.exports = {
  kod: ["i", "istatistik"],
  async execute(client, message, args){
const zaman = moment
    .duration(client.uptime)
    .format(" D [gün], H [saat], m [dakika], s [saniye]")
    const embed = new MessageEmbed()
    .setTitle('<a:emoji_14:841343953084743730> Rechard Bot <a:emoji_14:841343953084743730>')
    .addField("<:emoji_14:841344213244575764> **Botun Sahibi**", `<@!564837933912293386>
Wenzy#1881`)
    .addField("<:gold:841387322176045076> **Cpu Çalışma Hızı**:",`${GHz}`)
    .addField("<a:zil:841342785063878697> **Toplam Emoji Sayısı**", `${client.emojis.cache.size.toLocaleString()}`)
    .addField("<a:nevar:841385451734302803> Sunucu Sayısı**",client.guilds.cache.size.toLocaleString(), true)
    .addField("<a:tac:841342539469422652> **Toplam Kullanıcı Sayısı**",client.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString(), true)
    .addField("<a:snanne:841384951499980861> **Kanal Sayısı**",client.channels.cache.size.toLocaleString(), true)
    .addField("<a:emoji_22:841381731420733451> **Ne Kadar Süredir Aktif**", zaman, true)
    .addField("<a:tac:841342539469422652> **Sistem Bilgileri**",
`\`\`\`md\nİşletim Sistemi: ${os.platform()}

CPU: ${os.cpus().map(i => `${i.model}`)[0]}\`\`\``, true)
    .addField("<a:emoji_22:841381731420733451> **Ping**", client.ws.ping + ' ms')
    .addField("<a:anan:841369901318799400> **Versiyonlar**",
    `\`\`\`md\nNode.js Versiyonu: ${process.version}

Discord.js Versiyonu: ${Discord.version}\`\`\``, true)
.addField("<a:anan:841369901318799400> **Bellek Kullanımı**",(process.memoryUsage().heapUsed / 1024 / 512).toFixed(2) + " MB",true)
     return message.channel.send(embed)
  }
}
