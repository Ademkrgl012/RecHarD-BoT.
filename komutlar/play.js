const { Util } = require("discord.js");
const { YOUTUBE_API_KEY } = require("../ayarlar.json");
const ytdl = require("ytdl-core");
const YoutubeAPI = require("simple-youtube-api");
const youtube = new YoutubeAPI(YOUTUBE_API_KEY);
const Discord = require('discord.js')
const { play } = require("../system/music.js") 
module.exports = {
  kod: ["play", "p"],
  async execute(client, message, args){

    const { channel } = message.member.voice;
    if (!channel) {
      return message.channel.send("Join an Audio Channel");
    }
    
    if (!args.length) {
      return message.channel.send('Please Enter a Song Name!')
    }



    const targetsong = args.join(" ");
    const videoPattern = /^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.?be)\/.+$/gi;
    const playlistPattern = /^.*(youtu.be\/|list=)([^#\&\?]*).*/gi;
    const urlcheck = videoPattern.test(args[0]);

    if (!videoPattern.test(args[0]) && playlistPattern.test(args[0])) {
      return message.channel.send("**Unable to Play Playlist**");
    }

    const serverQueue = message.client.queue.get(message.guild.id);

    const queueConstruct = {
      textChannel: message.channel,
      channel,
      connection: null,
      songs: [],
      loop: false,
      volume: 100,
      playing: true
    };

    let songData = null;
    let song = null;

    if (urlcheck) {
      try {
{}         
         const result = await youtube.searchVideos(args[0], 1)
         if(!result[0]) return message.channel.send('**Wrong Link.**')
        songData = await ytdl.getInfo(result[0].url,{});
       
        console.log(songData)
        song = {
           title: songData.videoDetails.title,
           url: songData.videoDetails.video_url,
           duration: songData.videoDetails.lengthSeconds,
           thumbnail : songData.videoDetails.thumbnails[0].url,
           author : songData.videoDetails.author.name,
           wiews : songData.videoDetails.viewCount,
          likes : {
          trues : songData.videoDetails.likes.toLocaleString(),
          falses :songData.videoDetails.dislikes.toLocaleString()
         }
        };
    //ArdaDemr Youtube kanalında paylaşılmış altyapı

      } catch (error) {
        if (message.include === "copyright") {
          return message
            .reply("**This Video Cannot Be Played Due To Copyrights.**")
            .catch(console.error);
        } else {
          console.error(error);
        }
      }
    } else {
      try {
         const result = await youtube.searchVideos(targetsong, 1)
        if(!result[0]) return message.channel.send('**No Search Results Found.**')
        songData = await ytdl.getInfo(result[0].url)
         song = {
           title: songData.videoDetails.title,
           url: songData.videoDetails.video_url,
           duration: songData.videoDetails.lengthSeconds,
           thumbnail : songData.videoDetails.thumbnails[0].url,
           author : songData.videoDetails.author.name,
           wiews : songData.videoDetails.viewCount,
          likes : {
          trues : songData.videoDetails.likes.toLocaleString(),
          falses :songData.videoDetails.dislikes.toLocaleString()
         }
  
        };

      } catch (error) {
        console.error(error)
      }
    }
    
    if(serverQueue) {
      serverQueue.songs.push(song)
      return serverQueue.textChannel.send( new Discord.MessageEmbed()
.setAuthor('Added to Queue!',message.author.avatarURL({format : "png",dynamic : true}))
        .setTitle(song.title)
        .setURL(song.url)
        .setThumbnail(song.thumbnail)
            .addField("🎵 Song Name", `\n**${song.title}**\n`)
    .setImage(song.thumbnail)
    .addField("<:YoutubeLogoPng:852122497826816000>Song Channel", `\n**${song.author}**\n`)
    .addField(":timer:Song Time", `\n**${song.duration}**\n`)
    .setColor('RANDOM'))
      .catch(console.error)
    } else {
      queueConstruct.songs.push(song);
    }
     //ArdaDemr Youtube kanalında paylaşılmış altyapı
    if(!serverQueue) message.client.queue.set(message.guild.id, queueConstruct)
    
     if (!serverQueue) {
      try {
    
        queueConstruct.connection = await channel.join();
        play(song, message)
      } catch (error) {
        console.error(`Could not join voice channel: ${error}`);
        message.client.queue.delete(message.guild.id);
        await channel.leave();
        return message.channel.send({embed: {"description": `I can't login to the channel.: ${error}`, "color": "#ff0a0a"}}).catch(console.error);
      }
    }
     //ArdaDemr Youtube kanalında paylaşılmış altyapı
    
  }
};