const Discord = require("discord.js");
const { Collection, MessageEmbed, MessageButton, MessageActionRow } = require(`discord.js`);
const db = require("quick.db")

module.exports.run = async (client, message, args) => {
 if (!message.member.permissions.has("ADMINISTRATOR")) return;




               const xproles = [
                
"",
"**(1)  <@&896509772529020978>| 50,000 Summer coins**",
"**(2)  <@&896509712361738250>| 150,000 Summer coins**",
"**(3)  <@&896509720041508936>| 250,000 Summer coins**",
"**(4)  <@&896509754300588032>| 450,000 Summer coins**",
"**(5) <@&896509701154557993>| 650,000 Summer coins**",
"**(6) <@&996422506590261288>| 800,000 Summer coins**",
"**Profile - באמצעות לחיצה על הכפתור תוכלו לראות את כמות מטבעות הקיץ שלכם.**",
"",

               ]
              
               var embed1 = new Discord.MessageEmbed()
            .setColor("#00ff90")
            .setAuthor({ name : "Pedixol Summer Shop🌴 • Roles"})
           .setThumbnail(message.guild.iconURL({dynamic: true, width: 500, height: 500}))
.setImage("https://img.freepik.com/free-vector/tropical-beach-scene-with-many-palm-trees-day-time_1308-56168.jpg?w=2000")
        .setFooter({text : `.כדי להחזיר רול לחצו לחיצה נוספת על פריט שיש לכם\n ,כדי לקנות רול לחצו על הכפתור של הרול אותו אתם מעוניינים`})
     .setTimestamp()
      .setDescription(xproles.join("\n"))


      const a = new MessageButton()
 .setLabel('🌞')
.setStyle('SUCCESS')
.setCustomId('896509772529020978')

const b = new MessageButton()
 .setLabel('🍧')
.setStyle('SUCCESS')
.setCustomId('896509712361738250')

const c = new MessageButton()
 .setLabel('🍡')
.setStyle('SUCCESS')
.setCustomId('896509720041508936')

const d = new MessageButton()
 .setLabel('🥤')
.setStyle('SUCCESS')
.setCustomId('896509754300588032')

const e = new MessageButton()
 .setLabel('🔥')
.setStyle('SUCCESS')
.setCustomId('896509701154557993')

const f = new MessageButton()
 .setLabel('🌴')
.setStyle('SUCCESS')
.setCustomId('996422506590261288')

const profile = new MessageButton()
 .setLabel('Profile')
.setStyle('PRIMARY')
.setCustomId('profile')




let row1 = new MessageActionRow()
.addComponents(
  [a,b,c,d,e]
)
let row2 = new MessageActionRow()
.addComponents(
  [f,profile]
)

     
      let msg = await message.channel.send({embeds: [embed1], components: [row1, row2] })
     


}

module.exports.conf = {
  enable: false,
  aliases: []
};

module.exports.help = {
  name: "shop23323232",
  category: "Shop",
  usage: "",
  desc: ""
};