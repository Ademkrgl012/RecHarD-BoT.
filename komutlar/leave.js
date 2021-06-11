module.exports = {
  kod: "leave",
  async execute(client, message, args){
    if (!message.member.voice.channel) return message.channel.send('You are not on an Audio Channel!')
    if (!message.guild.me.voice.channel) return message.channel.send('Bot Is Not Already On An Audio Channel')
    if (message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send('To Isolate the Bot from the Voice Channel, You Must Be on the Same Channel as the Bot!')
    message.member.voice.channel.leave()
    message.channel.send('I Left Voice Channel With Success')
  }
}