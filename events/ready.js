const Discord = require('discord.js');
const moment = require('moment');
const chalk = require('chalk'); 
const client = new Discord.Client();
module.exports = client => {
  
  console.log(`${client.user.tag} Adlı Botum Aktif`);

	var randomMesajlar = [
		'YAPIM AŞAMASINDA',
		'r!yardım',
		'r!davet',
		'Wenzy#1881',
		'İngilizce Desteği Geliyor Beklemede Kal :)'
	];
	setInterval(function() {
		var randomMesajlar1 =
			randomMesajlar[Math.floor(Math.random() * randomMesajlar.length)];
		client.user.setActivity(`${randomMesajlar1}`);
	}, 2 * 2500);

	client.user.setStatus('idle');
}