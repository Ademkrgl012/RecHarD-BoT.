const Discord = require('discord.js'); // discord.js modülü tanımlıyoruz.
const { keep_alive } = require("./keep_alive");
const client = new Discord.Client({
	messageCacheMaxSize: 1000,
	messageCacheLifetime: 43200,
        messageSweepInterval: 4600,
    ws: { 
    intents: ["GUILD_MEMBERS", "GUILD_WEBHOOKS", "GUILD_VOICE_STATES", "DIRECT_MESSAGES", "DIRECT_MESSAGE_REACTIONS", "DIRECT_MESSAGE_TYPING", "GUILDS", "GUILD_BANS", "GUILD_EMOJIS", "GUILD_INTEGRATIONS", "GUILD_INVITES", "GUILD_MESSAGES", "GUILD_MESSAGE_REACTIONS", "GUILD_MESSAGE_TYPING"] 
  },
});

const { readdirSync } = require('fs');
const { join } = require('path');
const { MessageEmbed } = require('discord.js');
const express = require('express');
const db = require('quick.db');
const fs = require('fs');
const ayarlar = require('./ayarlar.json')
require('./util/eventHandler.js')(client);

client.on("warn", info => console.log(info));

client.on("error", console.error)

client.commands = new Discord.Collection()
client.queue = new Map();
const cmdFiles = readdirSync(join(__dirname, "komutlar")).filter(file => file.endsWith(".js"))
for (const file of cmdFiles) {
  const command = require(join(__dirname, "komutlar", `${file}`))
  if (typeof command.kod === 'object'){
    command.kod.forEach(x => {
      client.commands.set(x, command)
    })
  } else {
    client.commands.set(command.kod, command)
  }
}
//////Bot Dm/////
client.on("message", msg => {
  var dm = client.channels.cache.get("864832486373326859");
  if (msg.channel.type === "dm") {
    if (msg.author.id === client.user.id) return;
    const botdm = new Discord.MessageEmbed()
      .setTitle(`${client.user.username} Dm`)
      .setTimestamp()
      .setColor("RANDOM")
      .setThumbnail(`${msg.author.avatarURL()}`)
      .addField("Gönderen", msg.author.tag)
      .addField("Gönderen ID", msg.author.id)
      .addField("Gönderilen Mesaj", msg.content);

    dm.send(botdm);
  }
  if (msg.channel.bot) return;
});  
//////Yapay-Zeka
client.on("message", async message => {
  const Database = require("plasma-db");
const db = new Database("./database1.json"); 
  const ai = require('@codare/codare.ai')
let kanal = db.fetch(`yapayzekakanal_${message.guild.id}`)
if(!kanal) return;
if(message.channel.id !== kanal) return;
if(message.author.bot == true) return;
let soru = message.content;
ai.sor(soru).then(enginar => {
return message.channel.send(enginar) 
});
})

//////Yardım
const disbut = 
require('discord-buttons')
disbut(client);
const kullanıcı1 = new MessageEmbed()
.setTitle(`Rechard Bot Kullanıcı Komutları`)
.setColor("RANDOM")
.setDescription(`
> 👤|r!afk: Afk Olursunuz.(Daha Gelmedi!)

> 👤|r!avatar: Avatarınızı Gösterir.`)

const yetkili1 = new MessageEmbed()
.setTitle('Rechard Bot Yetkili Komutları')
.setColor('RANDOM')
.setDescription(`
🛠|Yetkili Komutları Bir Süre Boyunca Ekli Olmayacaktır Fakat Daha Sonra Eklenecektir`)

const ayarlamalı1 = new MessageEmbed()
.setTitle('Rechard Bot Ayarlamalı Komutlar')
.setColor('RANDOM')
.setDescription(`
⚙️|r!sa-as: Oto sa-ası Ayarlar.

⚙️|r!prefix-ayarla: Botun Prefixini Ayarlar.

⚙️|r!yetkili-etiket: Üyelerin Yetkilileri Etiketlemesini Engeller

⚙️|r!reklam-engel: Yönetici Yetkisine Sahip Olmayan Üyelerin Reklam Yapmasını Engeller.

⚙️|r!gç-ayarla: Resimli Giriş Çıkışı Ayarlar.

⚙️|r!gç-sıfırla: Resimli Giriş Çıkışı Kapatır.

⚙️|r!capslock-engel: Üyelerin Büyük Harf Kullanmasını Engeller.
`)

const müzik1 = new MessageEmbed()
.setTitle('Rechard Bot Müzik Komutları')
.setColor('RANDOM')
.setDescription(`
🎶|r!çal: İsmini Yazdığınız Şarkıyı Çalar.

🎶|r!durdur: Çalınan Şarkıyı Durdurur.

🎶|r!devam: Durdurulan Şarkıyı Devam Ettirir.

🎶|r!atla: Çalınan Şarkıyı Geçer.

🎶|r!kuyruk: Şarkı Kuyruğunu Gösterir.

🎶|r!np: Çalınan Şarkıyı Gösterir.

🎶|r!ayrıl: Botu Ses Kanalından Çıkartırsınız.
            `)

const eğlence1 = new MessageEmbed()
.setTitle('Rechard Bot Eğlence Komutları')
.setColor('RANDOM')
.setDescription(`
⚔️|r!token: Botun Tokenini Öğrenirsiniz

⚔️|r!korona: Türkiyenin Korona Tablosunu Gösterir
            `)
            
const kullanıcı = new disbut.MessageButton()
.setStyle('red')
.setLabel('👤')
.setID('click_to_function')

  const yetkili = new disbut.MessageButton()
  .setStyle('green')
  .setLabel('🛠')
  .setID('click_to_function1')
  
  const ayarlamalı = new disbut.MessageButton()
  .setStyle('red')
  .setLabel('⚙')
  .setID('click_to_function2')
  
  const müzik = new disbut.MessageButton()
  .setStyle('green')
  .setLabel('🎶')
  .setID('click_to_function3')
  
  const eğlence = new disbut.MessageButton()
  .setStyle('red')
  .setLabel('⚔')
  .setID('click_to_function4')
  
  const baş = new disbut.MessageButton()
  .setStyle('green')
  .setLabel('🔄')
  .setID('baş')

const baş1 = new Discord.MessageEmbed()
  .setTitle('**  » Rechard Bot**')
  .setColor('RANDOM')
  .setImage('https://cdn.discordapp.com/attachments/847971838633312276/849105429769355274/standard.gif')
  .setDescription(`
» Bağlantılar
[Destek Sunucusu](https://discord.gg/jSUTTWrrqh) • [Botu Davet Et](https://discord.com/api/oauth2/authorize?client_id=849023095447748608&permissions=8&scope=bot) •
Bir Komut Hakkında Detaylı Yardım İçin:
r!yardım


👤|Kullanıcı Komutları»Kullanıcıların Kullanabileceği Komutları Gösterir



🛠|Yetkili Komutları»Sadece Yetkililerin Kullanabileceği Komutları Gösterir!



⚙|Ayarlamalı Komutlar»Sadece Yöneticilerin Kullanabileceği Komutları Gösterir



🎶|Müzik Komutları»Herkesin Kullanabileceği Müzik Komutlarını Gösterir!



⚔|Eğlence Komutları»Herkesin Kullanabileceği Eğlence Komutlarını Gösterir`)

client.on('message', async (message) => {
  
if (message.content.startsWith('r!yardım')){
   const embed = new Discord.MessageEmbed()
  .setTitle('**  » Rechard Bot**')
  .setColor('RANDOM')
  .setImage('https://cdn.discordapp.com/attachments/847971838633312276/849105429769355274/standard.gif')
  .setDescription(`
» Bağlantılar
[Destek Sunucusu](https://discord.gg/jSUTTWrrqh) • [Botu Davet Et](https://discord.com/api/oauth2/authorize?client_id=849023095447748608&permissions=8&scope=bot) •
Bir Komut Hakkında Detaylı Yardım İçin:
r!yardım


👤|Kullanıcı Komutları»Kullanıcıların Kullanabileceği Komutları Gösterir



🛠|Yetkili Komutları»Sadece Yetkililerin Kullanabileceği Komutları Gösterir!



⚙|Ayarlamalı Komutlar»Sadece Yöneticilerin Kullanabileceği Komutları Gösterir



🎶|Müzik Komutları»Herkesin Kullanabileceği Müzik Komutlarını Gösterir!



⚔|Eğlence Komutları»Herkesin Kullanabileceği Eğlence Komutlarını Gösterir`)
  
  message.channel.send({
   button: [kullanıcı, yetkili, ayarlamalı, müzik, eğlence],
    embed: embed
  })
  }
})
  
client.on('clickButton', async (button) => {
  
  if (button.id === 'click_to_function') {
  button.message.edit({
   button: [kullanıcı, yetkili, ayarlamalı, müzik, eğlence],
    embed: kullanıcı1
  })
  }
    if (button.id === 'click_to_function1') {
    button.message.edit({
   button: [kullanıcı, yetkili, ayarlamalı, müzik, eğlence],
      embed: yetkili1
    })
  }
  if (button.id === 'click_to_function2') {
    button.message.edit({
   button: [kullanıcı, yetkili, ayarlamalı, müzik, eğlence],
      embed: ayarlamalı1
    })
  }
  if (button.id === 'click_to_function3') {
    button.message.edit({
   button: [kullanıcı, yetkili, ayarlamalı, müzik, eğlence],
      embed: müzik1
    })
  }
  if (button.id === 'click_to_function4') {
    button.message.edit({
   button: [kullanıcı, yetkili, ayarlamalı, müzik, eğlence],
      embed: eğlence1
    })
  }
  if (button.id === 'baş') {
    button.message.edit({
      button:[kullanıcı, yetkili, ayarlamalı, müzik, eğlence],
      embed: baş1
    })
  }
})
/////////

////////KOMUTLAR;

///////CANVASLI-GİRIŞ-ÇIKIŞ
client.on('guildMemberRemove', async member => {
	//let resimkanal = JSON.parse(fs.readFileSync("./ayarlar/gç.json", "utf8"));
	//const canvaskanal = member.guild.channels.cache.get(resimkanal[member.guild.id].resim);
	if (db.has(`gçkanal_${member.guild.id}`) === false) return;
	var canvaskanal = member.guild.channels.cache.get(
		db.fetch(`gçkanal_${member.guild.id}`)
	);
	if (!canvaskanal) return;

	const request = require('node-superfetch');
	const Canvas = require('canvas'),
		Image = Canvas.Image,
		Font = Canvas.Font,
		path = require('path');

	var randomMsg = ['Güle Güle Git :('];
	var randomMsg_integer =
		randomMsg[Math.floor(Math.random() * randomMsg.length)];

	let msj = await db.fetch(`cikisM_${member.guild.id}`);
	if (!msj) msj = `{uye}, ${randomMsg_integer}`;

	const canvas = Canvas.createCanvas(960, 422);
	const ctx = canvas.getContext('2d');

	const background = await Canvas.loadImage(
	'https://media.discordapp.net/attachments/850404341764325428/852307746971975720/PicsArt_06-10-12.50.55.jpg'
	);
	ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

	ctx.strokeStyle = '#74037b';
	ctx.strokeRect(0, 0, canvas.width, canvas.height);

	ctx.fillStyle = `#D3D3D3`;
	ctx.font = `37px "Warsaw"`;
	ctx.textAlign = 'center';

	let avatarURL = member.user.displayAvatarURL({
		format: 'png',
		dynamic: true,
		size: 1024
	});
	const { body } = await request.get(avatarURL);
	const avatar = await Canvas.loadImage(body);

	ctx.beginPath();
	ctx.lineWidth = 4;
	ctx.fill();
	ctx.lineWidth = 4;
	ctx.arc(482, 155, 100, 0, Math.PI * 2, true);
	ctx.clip();
	ctx.drawImage(avatar, 382, 55, 200, 200);

	const attachment = new Discord.MessageAttachment(
		canvas.toBuffer(),
		'Rechard Bot-Güle-Güle.png'
	);

	canvaskanal.send(
		msj.replace('{uye}', member.user.tag).replace('{sunucu}', member.guild.name),
		attachment
	);
	if (member.user.bot)
		return canvaskanal.send(`${member.user.tag}, Adlı Bot Sunucudan Ayrıldı`);
});

client.on('guildMemberAdd', async member => {
	if (db.has(`gçkanal_${member.guild.id}`) === false) return;
	var canvaskanal = member.guild.channels.cache.get(
		db.fetch(`gçkanal_${member.guild.id}`)
	);

	if (!canvaskanal || canvaskanal === undefined) return;
	const request = require('node-superfetch');
	const Canvas = require('canvas'),
		Image = Canvas.Image,
		Font = Canvas.Font,
		path = require('path');

	var randomMsg = [`Sunucuya Hoşgeldin <3`];
	var randomMsg_integer =
		randomMsg[Math.floor(Math.random() * randomMsg.length)];

	let paket = await db.fetch(`pakets_${member.id}`);
	let msj = await db.fetch(`cikisM_${member.guild.id}`);
	if (!msj) msj = `{uye}, ${randomMsg_integer}`;
	const canvas = Canvas.createCanvas(960, 422);
	const ctx = canvas.getContext('2d');

	const background = await Canvas.loadImage('https://media.discordapp.net/attachments/850404341764325428/852307746656092190/PicsArt_06-10-12.51.19.jpg'
	);
	ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

	ctx.strokeStyle = '#74037b';
	ctx.strokeRect(0, 0, canvas.width, canvas.height);

	ctx.fillStyle = `#ffffff`;
	ctx.font = `37px "Warsaw"`;
	ctx.textAlign = 'center';

	let avatarURL = member.user.displayAvatarURL({
		format: 'png',
		dynamic: true,
		size: 1024
	});
	const { body } = await request.get(avatarURL);
	const avatar = await Canvas.loadImage(body);

	ctx.beginPath();
	ctx.lineWidth = 4;
	ctx.fill();
	ctx.lineWidth = 4;
	ctx.arc(482, 155, 100, 0, Math.PI * 2, true);
	ctx.clip();
	ctx.drawImage(avatar, 382, 55, 200, 200);

	const attachment = new Discord.MessageAttachment(
		canvas.toBuffer(),
		'Rechard Bot-Hosgeldin.png'
	);

	canvaskanal.send(
		msj.replace('{uye}', member).replace('{sunucu}', member.guild.name),
		attachment
	);
	if (member.user.bot)
		return canvaskanal.send(` ${member.user.tag}, Adlı Bot Sunucuya Katıldı!`);
});
////////join-exit
client.on('guildMemberRemove', async member => {
	//let resimkanal = JSON.parse(fs.readFileSync("./ayarlar/gç.json", "utf8"));
	//const canvaskanal = member.guild.channels.cache.get(resimkanal[member.guild.id].resim);
	if (db.has(`gçkanal1_${member.guild.id}`) === false) return;
	var canvaskanal = member.guild.channels.cache.get(
		db.fetch(`gçkanal1_${member.guild.id}`)
	);
	if (!canvaskanal) return;

	const request = require('node-superfetch');
	const Canvas = require('canvas'),
		Image = Canvas.Image,
		Font = Canvas.Font,
		path = require('path');

	var randomMsg = ['Goodbye Go :('];
	var randomMsg_integer =
		randomMsg[Math.floor(Math.random() * randomMsg.length)];

	let msj = await db.fetch(`cikisM_${member.guild.id}`);
	if (!msj) msj = `{uye}, ${randomMsg_integer}`;

	const canvas = Canvas.createCanvas(960, 422);
	const ctx = canvas.getContext('2d');

	const background = await Canvas.loadImage('https://media.discordapp.net/attachments/850404341764325428/852713916685221888/PicsArt_06-11-04.00.19.jpg'
	);
	ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

	ctx.strokeStyle = '#74037b';
	ctx.strokeRect(0, 0, canvas.width, canvas.height);

	ctx.fillStyle = `#D3D3D3`;
	ctx.font = `37px "Warsaw"`;
	ctx.textAlign = 'center';

	let avatarURL = member.user.displayAvatarURL({
		format: 'png',
		dynamic: true,
		size: 1024
	});
	const { body } = await request.get(avatarURL);
	const avatar = await Canvas.loadImage(body);

	ctx.beginPath();
	ctx.lineWidth = 4;
	ctx.fill();
	ctx.lineWidth = 4;
	ctx.arc(482, 155, 100, 0, Math.PI * 2, true);
	ctx.clip();
	ctx.drawImage(avatar, 382, 55, 200, 200);

	const attachment = new Discord.MessageAttachment(
		canvas.toBuffer(),
		'Rechard-Bot-Goodbye.png'
	);

	canvaskanal.send(
		msj.replace('{uye}', member.user.tag).replace('{sunucu}', member.guild.name),
		attachment
	);
	if (member.user.bot)
		return canvaskanal.send(`${member.user.tag}, Bot named has left the server`);
});

client.on('guildMemberAdd', async member => {
	if (db.has(`gçkanal1_${member.guild.id}`) === false) return;
	var canvaskanal = member.guild.channels.cache.get(
		db.fetch(`gçkanal1_${member.guild.id}`)
	);

	if (!canvaskanal || canvaskanal === undefined) return;
	const request = require('node-superfetch');
	const Canvas = require('canvas'),
		Image = Canvas.Image,
		Font = Canvas.Font,
		path = require('path');

	var randomMsg = [`Welcome to the server <3`];
	var randomMsg_integer =
		randomMsg[Math.floor(Math.random() * randomMsg.length)];

	let paket = await db.fetch(`pakets_${member.id}`);
	let msj = await db.fetch(`cikisM_${member.guild.id}`);
	if (!msj) msj = `{uye}, ${randomMsg_integer}`;
	const canvas = Canvas.createCanvas(960, 422);
	const ctx = canvas.getContext('2d');

	const background = await Canvas.loadImage('https://media.discordapp.net/attachments/850404341764325428/852713916378120252/PicsArt_06-11-03.59.21.jpg'	);
	ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

	ctx.strokeStyle = '#74037b';
	ctx.strokeRect(0, 0, canvas.width, canvas.height);

	ctx.fillStyle = `#ffffff`;
	ctx.font = `37px "Warsaw"`;
	ctx.textAlign = 'center';

	let avatarURL = member.user.displayAvatarURL({
		format: 'png',
		dynamic: true,
		size: 1024
	});
	const { body } = await request.get(avatarURL);
	const avatar = await Canvas.loadImage(body);
	ctx.beginPath();
	ctx.lineWidth = 4;
	ctx.fill();
	ctx.lineWidth = 4;
	ctx.arc(482, 155, 100, 0, Math.PI * 2, true);
	ctx.clip();
	ctx.drawImage(avatar, 382, 55, 200, 200);

	const attachment = new Discord.MessageAttachment(
		canvas.toBuffer(),
		'Rechard-Bot-Welcome.png'
	);

	canvaskanal.send(
		msj.replace('{uye}', member).replace('{sunucu}', member.guild.name),
		attachment
	);
	if (member.user.bot)
		return canvaskanal.send(` ${member.user.tag}, Bot Joined the Server!`);
});
///////sa-as//////
   client.on('message', message => {
	if (!message.guild) return;
	if (!db.has('sa' + message.guild.id)) return;
	if (
		message.content.toLowerCase() === 'sa' ||
		message.content.toLowerCase() === 'sea' ||
		message.content.toLowerCase() === 'selamın aleyküm' ||
		message.content.toLowerCase() === 'selamun aleyküm' ||
		message.content.toLowerCase() === 's.a.' ||
		message.content.toLowerCase() === 's.a' ||
		message.content.toLowerCase() === 's a' ||
		message.content.toLowerCase() === 'selam'
	) {
		message.channel.send('**Aleyküm Selam**, Nasılsın?');
	}
});
///////reklam-engel//////
client.on('message', message => {
	if (!message.guild) return;
	if (
		message.content.toLowerCase().includes === 'discord.app' ||
		message.content.toLowerCase().includes === 'discord.gg' ||
		message.content.toLowerCase().includes === 'discordapp' ||
		message.content.toLowerCase().includes === 'discordgg' ||
		message.content.toLowerCase().includes === '.com' ||
		message.content.toLowerCase().includes === '.net' ||
		message.content.toLowerCase().includes === '.xyz' ||
		message.content.toLowerCase().includes === '.tk' ||
		message.content.toLowerCase().includes === '.pw' ||
		message.content.toLowerCase().includes === '.io' ||
		message.content.toLowerCase().includes === '.me' ||
		message.content.toLowerCase().includes === '.gg' ||
		message.content.toLowerCase().includes === 'www.' ||
		message.content.toLowerCase().includes === 'https' ||
		message.content.toLowerCase().includes === 'http' ||
		message.content.toLowerCase().includes === '.gl' ||
		message.content.toLowerCase().includes === '.org' ||
		message.content.toLowerCase().includes === '.com.tr' ||
		message.content.toLowerCase().includes === '.biz' ||
		message.content.toLowerCase().includes === '.party' ||
		message.content.toLowerCase().includes === '.rf.gd' ||
		message.content.toLowerCase().includes === '.az'
	) {
		if (!db.has('reklam' + message.guild.id))
			if (!message.member.hasPermission('ADMINISTRATOR')) {
				message.delete();
				message.reply(
					'Bu Sunucuda Reklam Yapmana İzin Vermiyorum Devam Edersen Cezalandırılacaksın'
				);
			}
	}
});
////////yetkili-etiket/////
client.on('message', message => {
	if (!message.guild) return;
	var etiketler = [message.mentions.members]
	if (etiketler < 1) return;
	if (!db.has('yetkilietiket' + message.guild.id)) return;
	etiketler.forEach(user => {
		const member = message.guild.members.cache.get(user[0]);
		if (member.hasPermission('ADMINISTRATOR')) {
			message.delete();
			message.reply(
				'Bu Sunucuda Yetkilileri Etiketleyemezsin Devam Edersen Cezalandırılacaksın'
			);
		}
	});
});
////////otorol
client.on('guildMemberAdd', async member => {
	let kanal1 = await db.fetch(`otorolkanal_${member.guild.id}`);
	let rol1 = await db.fetch(`otorolrol_${member.guild.id}`);
	let kanal = member.guild.channels.cache.get(kanal1);
	let rol = member.guild.roles.cache.get(rol1);
	if (!kanal) return;
	if (!rol) return;
	kanal.send(
		`${member} adlı kullanıcıya başarıyla **@${rol.name}** rolü verildi.:+1:`
	);
	member.roles.add(rol);
});
//////capslock
client.on('message', async msg => {
	if (msg.channel.type === 'dm') return;
	if (msg.author.bot) return;
	if (msg.content.length > 4) {
		if (db.fetch(`capslock_${msg.guild.id}`)) {
			let caps = msg.content.toUpperCase();
			if (msg.content == caps) {
				if (!msg.member.hasPermission('ADMINISTRATOR')) {
					if (!msg.mentions.users.first()) {
						msg.delete();
						return msg.channel
							.send(
								`✋ ${
									msg.author
								}, Bu sunucuda, büyük harf kullanımı engellenmekte!`
							)
							.then(m => m.delete(5000));
					}
				}
			}
		}
	}
});
/////////


/////
client.on('message', async message => {
	if (message.author.bot) return;
	if (!message.guild) {
		var prefix = 'r!';
	} else if (db.has('prefix' + message.guild.id)) {
		var prefix = db.fetch('prefix' + message.guild.id);
	} else {
		var prefix = 'r!'
	}
	if (message.content.startsWith(prefix)) {
		const args = message.content
			.slice(prefix.length)
			.trim()
			.split(/ +/);

		const command = args.shift().toLowerCase();
		if (!client.commands.has(command))
return;

			try {
            client.commands.get(command).execute(client, message, args);

        } catch (error){
            console.error(error);
	
        }
    }
})
client.login("")