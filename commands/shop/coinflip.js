const Discord = require("discord.js");
const db = require("quick.db");
const ms = require(`ms`);
const pms = require("parse-ms");
const { Collection, MessageEmbed, MessageActionRow, MessageButton } = require("discord.js");

module.exports.run = async (bot, message, args) => {
   if (message.channel.id != '1000472701032468500' && message.channel.id != '687668366185463808'&& message.channel.id != '688131099515289706') return message.reply(`**${message.author}, אתה לא יכול לעשות כאן את הפקודה, גש   <#1000472701032468500> לצ'אט.**`)
.then(msg => {setTimeout(() => msg.delete(), 5000)}).catch(err => { });
    
let cd = db.get(`${message.guild.id}.coinflip_cooldown.${message.author.id}`)
  let cooldownTime = ms("1m")
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
        .setAuthor({ name:"Error", iconURL:"https://cdn.discordapp.com/attachments/841618267973746688/841706456671191050/833270972790341632.gif"})
          .setDescription(`**תצטרך לרשום כמה מטבעות תרצה להמר !**`)
            if (!args[0]) return message.reply({embeds: [noArgsEmbed]})


          var embed134 = new Discord.MessageEmbed()
          .setColor('RED')
          .setAuthor({ name:"Error", iconURL:"https://cdn.discordapp.com/attachments/841618267973746688/841706456671191050/833270972790341632.gif"})
                 .setDescription(`**אין לך מספיק מטבעות כדי להשתמש בפקודה !**`)
             if (coins < parseInt(args[0])) return message.reply({embeds: [embed134]})


      var embed13 = new Discord.MessageEmbed()
        .setColor('RED')
       .setAuthor({ name:"Error", iconURL:"https://cdn.discordapp.com/attachments/841618267973746688/841706456671191050/833270972790341632.gif"})
               .setDescription(`**אנא ציין מספר מתאים**`);
        if (!args[0] || isNaN(args[0]) || args[0] === Infinity || args[0].includes(".") || args[0].includes("-"))
        return message.reply({embeds: [embed13]})

var embed13551 = new Discord.MessageEmbed()
          .setColor('RED')
          .setAuthor({ name:"Error", iconURL:"https://cdn.discordapp.com/attachments/841618267973746688/841706456671191050/833270972790341632.gif"})
       .setDescription(`אתה יכול להמר יותר מ- 200 קוינס!`);
        if(parseInt(args[0])>  200) return message.reply({embeds: [embed13551]})


        let outcomes = ["עץ", "פלי"];
        let yesbutton = new MessageButton()
        .setLabel("פלי")
        .setStyle("PRIMARY")
        .setCustomId("פלי")

        let treebutton = new MessageButton()
        .setLabel("עץ")
        .setStyle("PRIMARY")
        .setCustomId("עץ")

        let row3 = new MessageActionRow()
        .addComponents(
          [yesbutton, treebutton]
        )
      let embed7 = new Discord.MessageEmbed()
        .setColor("BLUE")
        .setTitle("עץ או פלי")
        .setDescription(`!לחץ על אחד מהכפתורים בשביל להתחיל `)
        let msg = await message.reply({
          embeds: [embed7],
          components: [row3]
        });
     
        const filter = (b) => b.user.id === message.author.id;
        const collector = msg.createMessageComponentCollector(filter, {max: 1, time: 60000, errors: ["time"]})
        collector.on("collect", async btn => {
  db.set(`${message.guild.id}.coinflip_cooldown.${message.author.id}`, Date.now());
            let outcomesIndex = outcomes[Math.floor(Math.random() * outcomes.length)];
           await btn.deferReply();
        if (btn.customId != outcomesIndex) {
          const embed1 = new Discord.MessageEmbed()
         .setColor('RED')
         .setAuthor({name : "תוצאות סופיות"})
         .addField(`בחירה שלך`, `${btn.customId}`)
         .addField(`תוצאות המטבע`, `${outcomesIndex}`)
         .setDescription(`אתה הפסדת במשחק הזה, נסה שוב מאוחר יותר`)
        let yes1 = new MessageButton()
        .setLabel("פלי")
        .setStyle("PRIMARY")
        .setCustomId("פלי")
        .setDisabled(true)

        let no1 = new MessageButton()
        .setLabel("עץ")
        .setStyle("PRIMARY")
        .setCustomId("עץ")
      .setDisabled(true)
        let row32 = new MessageActionRow()
        .addComponents(
          [yes1, no1]
        )
          msg.edit({embeds: [embed1], components: [row32]})
          btn.followUp(`**${message.author} הפסדת ולכן ירדו לך ${parseInt(args[0])} מטבעות קיץ**`)
        db.subtract(`${message.guild.id}.coins.${message.author.id}`, parseInt(args[0]))
        } else {
       const embed11 = new Discord.MessageEmbed()
         .setColor('GREEN')
         .setAuthor({name : "תוצאות סופיות"})
         .addField(`בחירה שלך`, `${btn.customId}`)
         .addField(`תוצאות המטבע`, `${outcomesIndex}`)
         .setDescription(`מזל טוב בחרת נכון, כל הכבוד.`)
      let yes = new MessageButton()
        .setLabel("פלי")
        .setStyle("PRIMARY")
        .setCustomId("פלי")
         .setDisabled(true)

        let no = new MessageButton()
        .setLabel("עץ")
        .setStyle("PRIMARY")
        .setCustomId("עץ")
        .setDisabled(true)
        let row323 = new MessageActionRow()
        .addComponents(
          [yes, no]
        )
          msg.edit({embeds: [embed11], components: [row323]})
        btn.followUp(`**${message.author} ניצחת! זכית בעוד ${parseInt(args[0])} מטבעות קיץ**`)
        db.add(`${message.guild.id}.coins.${message.author.id}`, parseInt(args[0]))
        };
        })


                     setTimeout(() => {
    db.delete(`${message.guild.id}.coinflip_cooldown.${message.author.id}`);
  }, cooldownTime);      

        collector.on("end", async (collected, reason) => {
          if(reason === 'time'){
            let embed = new MessageEmbed()
            .setTitle(`הזמן נגמר !`)
            .setDescription(`לא ענית בזמן ולכן הזמן נגמר`);
           msg.edit({
          embeds: [embed]
          }).then(m => m.delete({timeoute: 3000}))
          }
        })

}
module.exports.conf = {
  enable: true,
  aliases: []
};

module.exports.help = {
  name: "coinflip",
  category: "Shop",
  usage: "",
  desc: ""
};