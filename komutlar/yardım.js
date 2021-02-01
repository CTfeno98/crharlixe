const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json')
exports.run = function(client, message) {
  
  let prefix  = ayarlar.prefix

  
const yardım = new Discord.MessageEmbed()
.setColor('RANDOM')
.setTitle(`${client.user.username} - Komutlarım`)
.setDescription(`**\`Genel\`**
» \`${prefix}avatar\`: **Avatarınızı Atar**
» \`${prefix}say\`: **Üye Durum Grafiğini Gösterir**
» \`${prefix}kullanıcı-bilgi\`: **Etiketlediğin & Kendi Profilin Hakkında Bilgi Verir**
» \`${prefix}çekiliş\`: **Belirtilen Kanalda Çekiliş Yapılır**

**\`Kayıt\`**
» \`${prefix}kayıt-yardım\`: **Belirtilen Kullanıcıyı Kayıt Edersiniz**

**\`Logo\`**
» \`${prefix}roket-logo\`: **Logo Yapar**
» \`${prefix}f-logo\`: **Logo Yapar**

**\`Gif\`**
» \`${prefix}couple\`: **Sevgili Gif i Atar**
» \`${prefix}women\`: **Kadın Gif i Atar**
» \`${prefix}man\`: **Adam Gif i Atar**
» \`${prefix}baby\`: **Bebek Gif i Atar**

**\`Eğlence\`**
» \`${prefix}aykut-elmas\`: **Aykut Elmas Sözü Atar**
» \`${prefix}dizi-öner\`: **Güzel Bir Dizi Önerir**
» \`${prefix}deprem-bilgi\`: **Depreme Yakalanan Herkese Allah Sabir Versin Amin**
» \`${prefix}burak-reis\`: **Burak Reis Sözü Atar**
» \`${prefix}yılbaşı\`: **Yıl Başına Ne Kadar Kaldığını Gösterir**

**\`Sunucu-Patlama-Koruma\`**
» \`${prefix}anti-raid\`: **Sunucuyu Patlamadan Korur**

**\`Yetkili\`**
» \`${prefix}unban <user>\`: **Banı Kaldırır**
» \`${prefix}ban <user>\`: **Banlar**
» \`${prefix}prefix\`: **Sunucudaki Prefixi Değiştirir**
» \`${prefix}mute <user>\`: **Belirtilen Kullanıcıya Mute Atar**
» \`${prefix}temizle/sil <0-100>\`: **Belirtilen Miktarda Mesajı Siler**
» \`${prefix}sohbet-aç/kapat\`: **Sohbet Aç/Kapat**
» \`${prefix}küfür-engel\`: **Küfür engellemesini açarsınız veya kaparsınız.**
» \`${prefix}kurallar\`: **Hazır Kurallar Metni Atar**
» \`${prefix}nuke\`: **Komudun Yazıldığı Kanalı İzinle Patlatır Ve Yeniden Oluşturur**`)

.setThumbnail("https://cdn.discordapp.com/attachments/785821149580754954/786124655085748264/766653460988428308.gif")
.setTimestamp()
message.channel.send(yardım)
  
   
  
};

exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: [], 
  permLevel: 0
};

exports.help = {
  name: "yardım",
  description: 'yardım kodu.',
  usage: 'yardım'
};