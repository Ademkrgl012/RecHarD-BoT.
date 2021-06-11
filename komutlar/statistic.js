const Discord = require('discord.js')
const { MessageEmbed } = require('discord.js')
const moment = require('moment')
require('moment-duration-format')
const os = require('os')
var GHz = "`2.30GHz`"
module.exports = {
  kod: ["statistics", "statistic"],
  async execute(client, message, args){
const zaman = moment
    .duration(client.uptime)
    .format(" D [day], H [hours], m [minute], s [seconds]")
    const embed = new MessageEmbed()
    .setTitle('<a:emoji_14:841343953084743730> Rechard Bot <a:emoji_14:841343953084743730>')
    .addField("<:emoji_14:841344213244575764> **Boat Owner**", `<@!564837933912293386>
✰Adem BUT Yalnız Olan#1881`)
    .addField("<:gold:841387322176045076> **CPU Working Speed**:",`${GHz}`)
    .addField("<a:zil:841342785063878697> **Total Emoji Count**", `${client.emojis.cache.size.toLocaleString()}`)
    .addField("<a:nevar:841385451734302803> Number of Servers**",client.guilds.cache.size.toLocaleString(), true)
    .addField("<a:tac:841342539469422652> **Total Users**",client.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString(), true)
    .addField("<a:snanne:841384951499980861> **Number of Channels**",client.channels.cache.size.toLocaleString(), true)
    .addField("<a:emoji_22:841381731420733451> **How Long Active**", zaman, true)
    .addField("<a:tac:841342539469422652> **System Information**",
`\`\`\`md\nOS: ${os.platform()}

CPU: ${os.cpus().map(i => `${i.model}`)[0]}\`\`\``, true)
    .addField("<a:emoji_22:841381731420733451> **Ping**", client.ws.ping + ' ms')
    .addField("<a:anan:841369901318799400> **Versions**",
    `\`\`\`md\nNode.js Version: ${process.version}

Discord.js Version: ${Discord.version}\`\`\``, true)
.addField("<a:anan:841369901318799400> **Memory Usage**",(process.memoryUsage().heapUsed / 1024 / 512).toFixed(2) + " MB",true)
     message.channel.send(embed)
  }
}