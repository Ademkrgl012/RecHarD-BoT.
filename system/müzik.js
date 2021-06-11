const ytdlDiscord = require("ytdl-core-discord");
const Discord = require('discord.js')
module.exports = {
  async play(song, message) {
    const queue = message.client.queue.get(message.guild.id);
    
    if(!song) {
      queue.channel.leave();
      message.client.queue.delete(message.guild.id)
      return queue.textChannel.send("Şarkı Bittiği İçin Sesli Odadan Çıktım").catch(console.error)
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
        return message.channel.send("Bu video telif hakları nedeni ile oynatılamıyor.")
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
        .setAuthor('Oynatılıyor!',message.author.avatarURL({format : "png",dynamic : true}))
        .setTitle(song.title)
                .setTitle(song.title)
        .setURL(song.url)
        .setThumbnail(song.thumbnail)
            .addField("🎵 Şarkı Adı", `\n**${song.title}**\n`)
    .setImage(song.thumbnail)
    .addField("<:fna_youtube:852995405305741372> Şarkı Kanalı", `\n**${song.author}**\n`)
    .addField(":timer: Şarkı Süresi", `\n**${song.duration}**\n`)
    .setColor('RANDOM')
      
      
      
      )
    
    
  }
}