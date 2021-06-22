const ytdlDiscord = require("ytdl-core-discord");
const Discord = require('discord.js')
module.exports = {
  async play(song, message) {
    const queue = message.client.queue.get(message.guild.id);
    
    if(!song) {
      queue.channel.leave();
      message.client.queue.delete(message.guild.id)
      return queue.textChannel.send("I Left the Sound Room Because The Song Was Over").catch(console.error)
    }
    
    try {
      var stream = await ytdlDiscord(song.url, {
        highWaterMark: 1 << 25,
      });
      
    } catch (error) {
      if(queue) {
        queue.songs.shift()
        module.exports.play(queue.songs[0], message)
      }
      
      if(error.message.includes === "copyright") {
        return message.channel.send("This Video Cannot Be Played Due To Copyrights.")
      } else {
        console.error(error)
      }
    }
    
    const dispatcher = queue.connection
    .play(stream, {type: "opus"}).on("finish", () => {
      if(queue.loop) {
        let lastsong = queue.songs.shift()
        queue.songs.push(lastsong)
        module.exports.play(queue.songs[0], message)
      } else {
        queue.songs.shift()
        module.exports.play(queue.songs[0], message)
      }
    }).on("error", console.error)
    dispatcher.setVolumeLogarithmic(queue.volume / 100); //Sesi buradan arttırabilirsiniz.
    
    
    
      queue.textChannel.send(
        new Discord.MessageEmbed()
        .setAuthor('Playing!',message.author.avatarURL({format : "png",dynamic : true}))
        .setTitle(song.title)
        .setURL(song.url)
        .setThumbnail(song.thumbnail)
        .addField('Channel',song.author,true)
        .addField('Song Seconds',song.duration,true)
        .addField('Views',song.wiews.toLocaleString(),true)
        .addField('Like 👍',song.likes.trues,true)
        .addField('Disslike 👎',song.likes.falses,true)
        .setColor("ff0a0a")
      
      
      
      )
    
    
  }
}