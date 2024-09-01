const Discord = require("discord.js");
const { Collection, MessageEmbed, MessageButton, MessageActionRow } = require(`discord.js`);
const db = require("quick.db")

module.exports.run = async (client, message, args) => {
  var user = message.mentions.users.first() || message.author;
    var coins =  db.get(`${message.guild.id}.coins.${user.id}`)
    if(!coins || coins <= 0) coins = 0;
    var xp =  db.get(`${message.guild.id}.xp.${user.id}`)
    if(!xp || xp <= 0) xp = 0;
    coins = coins.toLocaleString();
    xp = xp.toLocaleString();


      const xproles = [
                `**User: ${user}\ncoins: ${coins}**`, 
"",
"**(1)  <@&896509772529020978>| 5,000  coins**",
"**(2)  <@&896509712361738250>| 7,000  coins**",
"**(3)  <@&896509720041508936>| 10,000 coins**",
"**(4)  <@&896509754300588032>| 20,000 coins**",
"**(5) <@&896509701154557993>| 30,000 coins**",
"**(6) <@&996422506590261288>| 250,000 coins**",
"",

               ]
              
               var embed1 = new Discord.MessageEmbed()
            .setColor("#0a0a0a")
            .setAuthor({ name : "Pedixol Main Shop🛒 • Roles"})
           .setThumbnail(message.guild.iconURL({dynamic: true, width: 500, height: 500}))
        .setFooter({text : `.כדי להחזיר רול לחצו לחיצה נוספת על פריט שיש לכם\n ,כדי לקנות רול לחצו על הכפתור של הרול אותו אתם מעוניינים`})
     .setTimestamp()
      .setDescription(xproles.join("\n"))

      const xproles2 = [
                 `**User: ${user}\ncoins: ${coins}**`,
"",
"**(1)  <@&1001163647453769828>| 1 GOLD**",
"**(2)  <@&1001162530477051924>| 3 GOLD**",
"**(3)  <@&896509747564523530>| 5 GOLD**",
"**(4)  <@&896509737355583498>| 9 GOLD**",
"**(5) <@&896516223104348201>| 12 GOLD**",
"**(6) <@&896509727939391559>| 15 GOLD**",

"",
"**page 2/2**",
               ]
               var embed2 = new Discord.MessageEmbed()
            .setColor("#f8d259")
               .setAuthor({ name : "Pedixol Gold Shop👑 • Roles"})
  .setFooter({text : `.כדי להחזיר רול לחצו לחיצה נוספת על פריט שיש לכם\n ,כדי לקנות רול לחצו על הכפתור של הרול אותו אתם מעוניינים`})
          .setThumbnail(message.guild.iconURL({dynamic: true, width: 500, height: 500}))
           
      .setTimestamp()
      .setDescription(xproles2.join("\n"))

const xproles22 = [
                 `**User: ${user}\ncoins: ${coins}**`,
"",
"**(1)  <@&734458074898628678>| 4,000 coins**",
"**(2)  <@&734458019487678484>| 7,000 coins**",
"**(3)  <@&734459192160813106>| 10,000 coins**",
"**(4)  <@&734458089620897804>| 15,000 coins**",
"**(5)  <@&734459137680736256>| 18,000 coins**",
"**(6)  <@&734458916301307987>| 23,000 coins**",
"**(7)  <@&734459268241031261>| 27,000 coins**",
"**(8)  <@&734458685161603137>| 34,000 coins**",
"**(9)  <@&652161066427613214>| 60,000 coins**",
"**(10) <@&650850827778523136>| 100,000 coins**",
"",
"**Page Premium**",
               ]
              
               var embed133 = new Discord.MessageEmbed()
            .setColor("#00ff90")
            .setAuthor({ name : "Pedixol Premium Shop🌟 • Roles"})
           .setThumbnail(message.guild.iconURL({dynamic: true, width: 500, height: 500}))
        .setFooter({text : `.כדי להחזיר רול לחצו לחיצה נוספת על פריט שיש לכם\n ,כדי לקנות רול לחצו על הכפתור של הרול אותו אתם מעוניינים`})

      .setTimestamp()
      .setDescription(xproles22.join("\n"))
      .setColor("#d547ff");
      const a = new MessageButton()
 .setLabel('🌞')
.setStyle('PRIMARY')
.setCustomId('896509772529020978')

const b = new MessageButton()
 .setLabel('🍧')
.setStyle('PRIMARY')
.setCustomId('896509712361738250')

const c = new MessageButton()
 .setLabel('🍡')
.setStyle('PRIMARY')
.setCustomId('896509720041508936')

const d = new MessageButton()
 .setLabel('🥤')
.setStyle('PRIMARY')
.setCustomId('896509754300588032')

const e = new MessageButton()
 .setLabel('🔥')
.setStyle('PRIMARY')
.setCustomId('896509701154557993')

const f = new MessageButton()
 .setLabel('🌴')
.setStyle('PRIMARY')
.setCustomId('996422506590261288')


      const a1 = new MessageButton()
 .setLabel('🚀')
.setStyle('SECONDARY')
.setCustomId('1001163647453769828')

const b2 = new MessageButton()
 .setLabel('💚')
.setStyle('SECONDARY')
.setCustomId('1001162530477051924')

const c3 = new MessageButton()
 .setLabel('💸')
.setStyle('SECONDARY')
.setCustomId('896509747564523530')

const d4 = new MessageButton()
 .setLabel('✨')
.setStyle('SECONDARY')
.setCustomId('896509737355583498')

const e5 = new MessageButton()
 .setLabel('👑')
.setStyle('SECONDARY')
.setCustomId('896516223104348201')

const f6 = new MessageButton()
 .setLabel('🍣')
.setStyle('SECONDARY')
.setCustomId('896509727939391559')

   const a22 = new MessageButton()
 .setLabel('🏝')
.setStyle('PRIMARY')
.setCustomId('734458074898628678')

const b22 = new MessageButton()
 .setLabel('🧜‍♀️')
.setStyle('PRIMARY')
.setCustomId('734458019487678484')

const c22 = new MessageButton()
 .setLabel('🏄🏽‍♂️')
.setStyle('PRIMARY')
.setCustomId('734459192160813106')

const d22 = new MessageButton()
 .setLabel('🏓')
.setStyle('PRIMARY')
.setCustomId('734458089620897804')

const e22 = new MessageButton()
 .setLabel('🌊')
.setStyle('PRIMARY')
.setCustomId('734459137680736256')

const f22 = new MessageButton()
 .setLabel('🍉')
.setStyle('PRIMARY')
.setCustomId('734458916301307987')


const f222 = new MessageButton()
 .setLabel('🐬')
.setStyle('PRIMARY')
.setCustomId('734459268241031261')

const f333 = new MessageButton()
 .setLabel('🦈')
.setStyle('PRIMARY')
.setCustomId('734458685161603137')


const f444 = new MessageButton()
 .setLabel('[⭐] 𝐒𝐭𝐚𝐫')
.setStyle('PRIMARY')
.setCustomId('652161066427613214')


const f555 = new MessageButton()
 .setLabel('🌈')
.setStyle('PRIMARY')
.setCustomId('650850827778523136')
let row1 = new MessageActionRow()
.addComponents(
  [a,b,c,d,e]
)
let row2 = new MessageActionRow()
.addComponents(
  [f]
)

let row11234 = new MessageActionRow()
.addComponents(
  [a1,b2,c3,d4,e5]
)
let row11234434 = new MessageActionRow()
.addComponents(
  [f6]
)

let row1242q3 = new MessageActionRow()
.addComponents(
  [a22,b22,c22,d22,e22]
)
let row2awdf2qe2q = new MessageActionRow()
.addComponents(
  [f22,f222,f333,f444,f555]
)

let rightbutton = new MessageButton()
     .setStyle("PRIMARY") 
       .setLabel('Gold👑')
        .setCustomId("right_button")

        let leftbutton = new MessageButton()
         .setStyle("PRIMARY") 
        .setLabel('Main🛒')
        .setCustomId("left_button")

    let leftbutton23 = new MessageButton()
         .setStyle("PRIMARY") 
        .setLabel('Premium🌟')
        .setCustomId("left_button5")

        let rowI = new MessageActionRow()
        .addComponents([leftbutton, rightbutton,leftbutton23])
      let msg = await message.reply({embeds: [embed1], components: [rowI,row1,row2] })
       const filter = (interaction) => interaction.user.id === message.author.id
const collector = msg.createMessageComponentCollector({filter})
collector.on('collect', async (interaction) => {

const member = interaction.guild.members.cache.get(interaction.user.id)
let coins = db.get(`${interaction.guild.id}.coins.${interaction.user.id}`) || 0;
let items = db.get("shop" + "shop2" + "shop3") || [];
        items = items.sort((a,b) => a.amount-b.amount)
        let id = Number(interaction.customId);
        for (var i = 0; i < items.length; i++) {
            items[i].ID = Number(i) + 1;
        };
        let item = items.find(a => a.role == interaction.customId);

     if(interaction && member.roles.cache.has(interaction.customId)) {
        
        member.roles.remove(item.role) 
         interaction.reply({content:`** החזרת את הפריט <@&${interaction.customId}> בהצלחה וקיבלת \`${percent(item.amount, 50)}\` שקלים.**`, ephemeral: true})
   db.add(`${interaction.guild.id}.coins.${member.id}`, percent(item.amount, 50));
}

else if(item){
item.amount = item.amount;
        if (coins < item.amount) return interaction.reply({content: `אין לך מספיק מטבעות כדי לקנות את פריט זה.`, ephemeral: true});
        let roleon = interaction.guild.roles.cache.get(interaction.customId) || undefined;
        member.roles.add(item.role)
        interaction.reply({content: `קנית את הרול <@&${interaction.customId}>`, ephemeral: true})
        if(item.amount > 0)  db.subtract(`${interaction.guild.id}.coins.${member.id}`, item.amount)
}else{
if(interaction.customId === 'right_button'){
  interaction.deferUpdate()
msg.edit({embeds: [embed2],  components: [rowI,row11234,row11234434]})
}else if(interaction.customId === 'left_button'){
  interaction.deferUpdate()
msg.edit({embeds: [embed1],  components: [rowI,row1,row2 ]})
}else if(interaction.customId === 'left_button5'){
  interaction.deferUpdate()
msg.edit({embeds: [embed133],  components: [rowI,row1242q3,row2awdf2qe2q ]})

}
}
})
function percent(number, percent) {
          return (percent/100) * number;
        }
  }

module.exports.conf = {
  enable: false,
  aliases: []
};

module.exports.help = {
  name: "shop",
  category: "Shop",
  usage: "",
  desc: ""
};
