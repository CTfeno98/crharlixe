const Discord = require('discord.js');
const ccd = require('parse-ms');

exports.run = async(client, message, args) => {
  let virus = new Date('2022-01-01:00:00')
    let plasmic = ccd(virus - Date.now())
    message.channel.send(`**Yılbaşının kutlanmasına **\`\`${plasmic.days} gün ${plasmic.hours} saat ${plasmic.minutes} dakika\`\` **kaldı!**`)
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
}; 

exports.help = {
  name: 'yılbaşı',
  description: 'Yılbaşına ne kadar kaldığını gösterir'
};