module.exports = {
  kod: "resume", 
  description: "Resume the paused Song",
  execute (client, message, args) {
      const { channel } = message.member.voice;
    if (!channel) {
    //ArdaDemr Youtube kanalında paylaşılmış altyapı
      return message.channel.send("**You Need To Be On Any Audio Channel.**");
    }
 //ArdaDemr Youtube kanalında paylaşılmış altyapı
    const serverQueue = message.client.queue.get(message.guild.id);
    if(!serverQueue) return message.channel.send('**No Song Played.**')
    if(serverQueue.playing) return message.channel.send(`No Stopping Song.`)
 if(serverQueue && !serverQueue.playing) {
      serverQueue.playing = true;
      serverQueue.connection.dispatcher.resume(true)
  
  return message.channel.send("✅ **| Paused Song Resumed.**") 
 } //ArdaDemr Youtube kanalında paylaşılmış altyapı
    
    message.channel.send("**No Paused Song.**")
    
  }
}