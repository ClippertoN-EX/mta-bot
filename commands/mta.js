const Discord = require("discord.js");
const Gamedig = require("gamedig");
exports.run = (client, message, args) => {

  
  Gamedig.query({
    type: "mtasa",
    host: "46.105.145.146"  //Buraya Sunucunuzun İP GİRİN
  })
    .then(state => {
      const CodAre = new Discord.MessageEmbed()
        .setColor("0x40ff00")
        .setTitle("Oyuncu Sayıları")
        .setDescription("Aşağıda CLİPABİ'ın oyuncu sayılarını görüyorsunuz.")

        .addField("CLİP roleplay","Aktif Oyuncu : " + state.raw.numplayers + "\n" + "IP : 46.105.145.146")//Burayada girin
      
      	.setTimestamp()
	      .setFooter("Toplam " + state.raw.numplayers +  " oyuncu aktif" , "https://cdn.discordapp.com/avatars/902254996324773979/9a815114cf5d926a75781e2f8ecd84c0.png?size=80");

      message.channel.send(CodAre);
    })
  
 
  
.catch(err =>
  
       
      console.log(err)
    );
  
};
exports.config = {
  name: "sunucu",
  aliases:[]
};

//Clip Abipaylaştı sağda solda yaydım diye gezinmeyin 