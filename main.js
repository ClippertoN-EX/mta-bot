const Discord = require("discord.js")     
const client = new Discord.Client();       
const config = require("./config.js")    
const fs = require("fs");                
require('./util/Loader.js')(client);     
client.commands = new Discord.Collection(); 
client.aliases = new Discord.Collection();  
fs.readdir('./commands/', (err, files) => { 
  if (err) console.error(err);               
  console.log(`${files.length} komut yüklenecek.`); 
  files.forEach(f => {                       
    let props = require(`./commands/${f}`);   
    console.log(`${props.config.name} komutu yüklendi.`);  
    client.commands.set(props.config.name, props); 
    props.config.aliases.forEach(alias => {         
      client.aliases.set(alias, props.config.name); 
  
    });
  });
})
client.on("ready", () => {
  const embed = new Discord.MessageEmbed()
  .setColor('#0099ff')
    .setTitle('License System')
    .setAuthor('ClippertoN', "https://cdn.discordapp.com/attachments/904763128699576340/910893854436233236/a7d478399730d4c1156a966d7cad139b.webp")
    .setDescription('Bot başarıyla #1 , idli kişi tarafından aktif edildi. ')
    .setThumbnail()
    .setImage('https://cdn.discordapp.com/attachments/904763128699576340/910893854436233236/a7d478399730d4c1156a966d7cad139b.webp')
    .setTimestamp()
    .setFooter('Başarıyla bot aktif oldu.');
  client.channels.cache.get("911565347910451250").send(embed)
});

client.login("ODkxMjk5NjI1Mzk3NTQ3MDQ5.YU8Vdg.lXi8iBP58HlNPMYB3m1dtSUYR6Q")
