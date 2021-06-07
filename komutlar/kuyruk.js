exports.run = async(client, message, args) => {
    const { channel } = message.member.voice;
    if (!channel) {
      //ArdaDemr Youtube kanalında paylaşılmış altyapı
      return message.channel.send("**Herhangi bir ses kanalında bulunmalısınız.**");
    }

    const serverQueue = message.client.queue.get(message.guild.id);

    if (!serverQueue) {
      return message.channel.send("**Kuyrukta şarkı bulamadım.**");
    } //ArdaDemr Youtube kanalında paylaşılmış altyapı

    message.channel.send(
      `${serverQueue.songs
        .map((song, index) => index + 1 + ". " + song.title)
        .join("\n\n")}`,
      { split: true }
    );
  }
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['kuyruk'],
  perm: 0
}
exports.help = {
  name: 'kuyruk'
}