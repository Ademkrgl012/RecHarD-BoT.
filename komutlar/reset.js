const Discord = require('discord.js');
module.exports = {
  kod: ["reset", "reboot"],
async execute(client, message, args){ 
if (message.author.id !== '564837933912293386') return;

    message.channel.send(`Bot Yeniden Başlatılıyor<a:yklenme:850407602184912946>`).then(msg => {
    console.log(`Bot yeniden başlatılıyor...`);
    process.exit(0);
  })
}
}