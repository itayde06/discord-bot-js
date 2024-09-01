const hh = require('hebrew-package')
const Discord = require("discord.js");
const db = require("quick.db");
const { Collection, MessageEmbed, MessageActionRow, MessageButton } = require("discord.js");
const { set } = require("express/lib/application");
const ms = require(`ms`);
const pms = require("parse-ms");


module.exports.run = async (client, message, args) => {

   if (message.channel.id != '1000472701032468500' && message.channel.id != '687668366185463808'&& message.channel.id != '688131099515289706') return message.reply(`**${message.author}, אתה לא יכול לעשות כאן את הפקודה, גש   <#1000472701032468500> לצ'אט.**`)
.then(msg => {setTimeout(() => msg.delete(), 5000)}).catch(err => { });
    
    
    
 
    let cd = db.get(`${message.guild.id}.trivia_cooldown.${message.author.id}`)
  let cooldownTime = ms("40s")
  let timeObj = pms(cooldownTime - (Date.now() - cd));
  let hours = "";
  if (timeObj.hours) hours = `${timeObj.hours} שעות, `;
  let minutes = "";
  if (timeObj.minutes) minutes = `${timeObj.minutes} דקות, `;
  let seconds = "";
  if (timeObj.seconds) seconds = `${timeObj.seconds} שניות`;
  if (cd !== null && cooldownTime - (Date.now() - cd) > 0)
    return message.channel.send(
      `אתה צריך לחכות ${hours}${minutes}${seconds}`
    );

  let coins = db.get(`${message.guild.id}.coins.${message.author.id}`)
          if(!coins) coins = 0;
          
          var noArgsEmbed = new Discord.MessageEmbed()
          .setColor('RED')
           .setAuthor("Error", "https://cdn.discordapp.com/attachments/841618267973746688/841706456671191050/833270972790341632.gif")
          .setDescription(`**תצטרך לרשום כמה מטבעות תרצה להמר !**`)
            if (!args[0]) return message.reply({embeds: [noArgsEmbed]})


          var embed134 = new Discord.MessageEmbed()
          .setColor('RED')
           .setAuthor("Error", "https://cdn.discordapp.com/attachments/841618267973746688/841706456671191050/833270972790341632.gif")
                 .setDescription(`**אין לך מספיק מטבעות כדי להשתמש בפקודה !**`)
             if (coins < parseInt(args[0])) return message.reply({embeds: [embed134]})


      var embed13 = new Discord.MessageEmbed()
        .setColor('RED')
        .setAuthor("Error", "https://cdn.discordapp.com/attachments/841618267973746688/841706456671191050/833270972790341632.gif")
               .setDescription(`**אנא ציין מספר מתאים**`);
        if (!args[0] || isNaN(args[0]) || args[0] === Infinity || args[0].includes(".") || args[0].includes("-"))
        return message.reply({embeds: [embed13]})

var embed13551 = new Discord.MessageEmbed()
          .setColor('RED')
          .setAuthor({ name:"Error", iconURL:"https://cdn.discordapp.com/attachments/841618267973746688/841706456671191050/833270972790341632.gif"})
       .setDescription(`אתה יכול להמר יותר מ- 400 קוינס!`);
        if(parseInt(args[0])>  400) return message.reply({embeds: [embed13551]})

      let trivia = hh.trivia({difficulty: "All", amount_of_options: "4"})
        let s1 = trivia.options[0]
        let s2 = trivia.options[1]
        let s3 = trivia.options[2]
        let s4 = trivia.options[3]

  
        const a = new MessageButton()
        .setLabel(`${s1}`)
        .setStyle('PRIMARY')
        .setCustomId(s1)
    
      const b = new MessageButton()
        .setLabel(`${s2}`)
        .setStyle('PRIMARY')
        .setCustomId(s2)
    
    
      const c = new MessageButton()
        .setLabel(`${s3}`)
        .setStyle('PRIMARY')
        .setCustomId(s3)
    
        const d = new MessageButton()
        .setLabel(`${s4}`)
        .setStyle('PRIMARY')
        .setCustomId(s4)
      
      let row1 = new MessageActionRow()
        .addComponents(
          [a, b, c, d]
        )

  




  let embed6 = new MessageEmbed()
    .setColor('BLUE')
    .setTitle('**שאלת טריוויה: **')
    .setDescription("**יש לך 7 שניות!**\n**השאלה:**\n"+ trivia.question +`\n\n**האופציות:**\n**(1) ${s1}**\n**(2) ${s2}**\n**(3) ${s3}**\n**(4) ${s4}**\n\n**רמה:** ${trivia.difficulty}`)
    .setThumbnail(message.author.displayAvatarURL({ dynamic: true }))
    .setFooter({text :'🎉קטן🎉קטן עליכם אלופים '})
    .setTimestamp()

db.set(`${message.guild.id}.trivia_cooldown.${message.author.id}`, Date.now());

let msg = await message.reply({
  embeds: [embed6],
  components: [row1]
});
      let winrandom = Number(randomNumber(1000, 10000));
let lostrandom = Number(randomNumber(1000, 5000));

       const filter = (b) => b.user.id == message.author.id;
    const collector = msg.createMessageComponentCollector({filter, max: 1, time: 7000, errors: ["time"]})

      collector.on("collect", async btn => {
     
          btn.deferUpdate()
let answer = trivia.answer
let ID = btn.customId
if(answer === ID){
let embed1 = new Discord.MessageEmbed()
	
                    .setColor('#54ff9e')
                    .setAuthor({ name:"טוב שלך!", iconURL: "https://cdn.discordapp.com/emojis/618577823749242921.gif?size=96&quality=lossless"})
                    .setDescription(`**${message.author} ענית תשובה נכונה, וזכית ב-  ${parseInt(args[0])* 2} מטבעות **`)
                    .setTimestamp()
 db.add(`${message.guild.id}.coins.${message.author.id}`, parseInt(args[0])* 2)




 msg.edit({ embeds: [embed1], components: [row1].map(row => row.setComponents(row.components.map(component => component.setDisabled(true)))) })

}else{
let embed44 = new Discord.MessageEmbed()
                    .setColor('#ff0000')
                    .setAuthor({ name:"איי קרוב!", iconURL:"https://cdn.discordapp.com/emojis/614877161869803532.gif?size=96&quality=lossless"})
                    .setDescription(`**${message.author} ענית תשובה לא נכונה, לכן ירדו לך- ${parseInt(args[0])} מטבעות.**`)
                    .setTimestamp()
   db.subtract(`${message.guild.id}.coins.${message.author.id}`, parseInt(args[0]))


msg.edit({ embeds: [embed44], components: [row1].map(row => row.setComponents(row.components.map(component => component.setDisabled(true)))) })
}
      })
    collector.on("end", async (collected, reason) => {
          if(reason === 'time'){


            let embed3 = new MessageEmbed()
            .setTitle(`הזמן נגמר📛`)
            .setDescription(`**${message.author} לא ענית בזמן?, לכן ירדו לך- ${parseInt(args[0])} מטבעות.**`);
db.subtract(`${message.guild.id}.coins.${message.author.id}`, parseInt(args[0]))
            msg.edit({ embeds: [embed3], components: [row1].map(row => row.setComponents(row.components.map(component => component.setDisabled(true)))) })
          }

})
            setTimeout(() => {
              db.delete(`${message.guild.id}.trivia_cooldown.${message.author.id}`)
            }, cooldownTime);

}

function randomNumber(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }

module.exports.conf = {
   enable: false,
  aliases: []
};

module.exports.help = {
  name: "trivia",
  category: "Shop",
  usage: "",
  desc: ""
};