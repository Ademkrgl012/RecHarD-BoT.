module.exports = {
  kod: ["stop","pause"],
   execute (client, message, args) {
  const { channel } = message.member.voice;
    if (!channel) {
    
      return message.channel.send("**You Must Be On Any Audio Channel.**");
    }
 //ArdaDemr Youtube kanalında paylaşılmış altyapı
    const serverQueue = message.client.queue.get(message.guild.id);

    if (!serverQueue) {
      return message.channel.send("**I Can't Find A Song To Pause.**");
    }
    if(!serverQueue.playing) return message.channel.send('**Songs Already Paused.**')
    if(serverQueue && serverQueue.playing) {
      serverQueue.playing = false;
      serverQueue.connection.dispatcher.pause(true)
       //ArdaDemr Youtube kanalında paylaşılmış altyapı
      
      return message.channel.send("✅ **| Playing Song Paused.**")
  }  
  }
}