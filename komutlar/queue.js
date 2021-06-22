module.exports = {
  kod: "queue",
  execute (client, message, args) {
    
    const { channel } = message.member.voice;
    if (!channel) { //ArdaDemr Youtube kanalında paylaşılmış altyapı
  
      return message.channel.send("**You Must Be On Any Audio Channel.**");
    }

    const serverQueue = message.client.queue.get(message.guild.id);
 //ArdaDemr Youtube kanalında paylaşılmış altyapı
    if (!serverQueue) {
      return message.channel.send("**I Couldn't Find A Song To Loop.**");
    }
     //ArdaDemr Youtube kanalında paylaşılmış altyapı

    serverQueue.loop = !serverQueue.loop
    
     //ArdaDemr Youtube kanalında paylaşılmış altyapı
    
    message.channel.send(`Loop Now **${serverQueue.loop ? "Active" : "Deactived"}**`)
    
    
    
    
  }
}