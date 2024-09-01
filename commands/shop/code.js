const { Collection, MessageEmbed, MessageActionRow, MessageButton } = require("discord.js");
const { set } = require("express/lib/application");
const rps = new Collection()
const ms = require(`ms`);


module.exports.run = async (client, message, args) => {
 if (!message.member.permissions.has("ADMINISTRATOR")) return;
 if (message.channel.id != '688131099515289706' && message.channel.id != '694992490964451348'&& message.channel.id != '687668366185463808') return message.reply(`**${message.author}, אתה לא יכול לעשות כאן את הפקודה, גש   <#694992490964451348> לצ'אט.**`)
.then(msg => {setTimeout(() => msg.delete(), 5000)}).catch(err => { });

  let cd = db.get(`${message.guild.id}.code_cooldown.${message.author.id}`)
  let cooldownTime = ms("1m")
  let timeObj = pms(cooldownTime - (Date.now() - cd));
  let hours = "";
  if (timeObj.hours) hours = `${timeObj.hours} שעות, `;
  let minutes = "";
  if (timeObj.minutes) minutes = `${timeObj.minutes} דקות, `;
  let seconds = "";
  if (timeObj.seconds) seconds = `${timeObj.seconds} שניות`;
  if (cd !== null && cooldownTime - (Date.now() - cd) > 0)
    return message.reply(
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
       .setDescription(`אתה יכול להמר יותר מ- 400 קוינס!`);
        if(parseInt(args[0])>  400) return message.reply({embeds: [embed13551]})

db.set(`${message.guild.id}.code_cooldown.${message.author.id}`, Date.now());

  const a = new MessageButton()
    .setLabel('1')
    .setStyle('SECONDARY')
    .setCustomId("codeDigit1")


  const b = new MessageButton()
    .setLabel('2')
    .setStyle('SECONDARY')
    .setCustomId("codeDigit2")


  const c = new MessageButton()
    .setLabel('3')
    .setStyle('SECONDARY')
    .setCustomId("codeDigit3")


  const d = new MessageButton()
    .setLabel('4')
    .setStyle('SECONDARY')
    .setCustomId("codeDigit4")

  const e = new MessageButton()
    .setLabel('5')
    .setStyle('SECONDARY')
    .setCustomId("codeDigit5")


  const f = new MessageButton()
    .setLabel('6')
    .setStyle('SECONDARY')
    .setCustomId("codeDigit6")


  const g = new MessageButton()
    .setLabel('7')
    .setStyle('SECONDARY')
    .setCustomId("codeDigit7")

  const ht = new MessageButton()
    .setLabel('8')
    .setStyle('SECONDARY')
    .setCustomId("codeDigit8")

  const hty = new MessageButton()
    .setLabel('9')
    .setStyle('SECONDARY')
    .setCustomId("codeDigit9")

  const h = new MessageButton()
    .setLabel('אישור')
    .setStyle('SUCCESS')
    .setCustomId("finished")


  const yu = new MessageButton()
    .setLabel('0')
    .setStyle('PRIMARY')
    .setCustomId("codeDigit0")


  const j = new MessageButton()
    .setLabel('\u200b')
    .setStyle('DANGER')
    .setCustomId("abort")
    .setDisabled(true)
  let row1 = new MessageActionRow()
    .addComponents(
      [a, b, c]
    )
  let row2 = new MessageActionRow()
    .addComponents(
      [d, e, f]
    )
  let row3 = new MessageActionRow()
    .addComponents(
      [g, ht, hty]
    )
  let row4 = new MessageActionRow()
    .addComponents(
      [h, yu, j]
    )

  var length = 7;
  charset = "01234567";
  retVal = "";

  for (var i = 0, n = charset.length; i < length; ++i) {
    retVal += charset.charAt(Math.floor(Math.random() * n));
  }

  let embed2 = new MessageEmbed()
    .setColor("#36393F")
    .setTitle(`הזן את הקוד`)
    .setDescription(`** יש לך 8 שניות לזכור טוב את המספרים!**`)
   

  let msg = await message.reply({
    embeds: [embed2],
    files: [require("../../generateImage.js")(200, 80, retVal, 13)]
  })

  setTimeout(async () => {

    let embed2 = new MessageEmbed()
      .setColor("#36393F")
      .setTitle(`המשחק התחיל!`)
      .setDescription(`**האם תצליח לזכור את המספר? או שתפסיד? יש לך 12 שניות לנחש את הקוד!**`)
    await msg.edit({ embeds: [embed2], components: [row1, row2, row3, row4], files: [] })
    const filter = (btn) => btn.user.id == message.author.id;
    const collector = msg.createMessageComponentCollector({ filter, max: 9, time: 12 * 1000 })
    let guessedCode = "";
    collector.on('collect', async button => {



      button.deferUpdate()
      if (button.customId.startsWith("codeDigit")) {
        const digit = button.customId.replace("codeDigit", "")
        guessedCode = guessedCode + digit

      } else if (button.customId === "finished") {
        guessedCode = guessedCode;
        if (guessedCode != retVal) {
          const wrongEmbed = new Discord.MessageEmbed()
            .setColor('RED')
            .setAuthor({ name: "תוצאות סופיות" })
            .addField(`הקוד שרשמת`, `${guessedCode}`)
            .addField(`הקוד הנכון`, `${retVal}`)
            .setDescription(`זיכרון גרוע, לא זכרת את הקוד טוב לכן ירדו לך ${parseInt(args[0])} מטבעות. `)
         

       

          msg.edit({ embeds: [wrongEmbed], components: [row1, row2, row3, row4].map(row => row.setComponents(row.components.map(component => component.setDisabled(true)))) })
db.subtract(`${message.guild.id}.coins.${message.author.id}`, parseInt(args[0]))
               

        } else {
          const successEmbed = new Discord.MessageEmbed()
            .setColor('GREEN')
            .setAuthor({ name: "תוצאות סופיות" })
            .addField(`הקוד שרשמת`, `${guessedCode}`)
            .addField(`הקוד הנכון`, `${retVal}`)
            .setDescription(`זיכרון מעולה, זכית ב-  ${parseInt(args[0])* 2} מטבעות`)
           
          
          msg.edit({ embeds: [successEmbed], components: [row1, row2, row3, row4].map(row => row.setComponents(row.components.map(component => component.setDisabled(true)))) })
 db.add(`${message.guild.id}.coins.${message.author.id}`, parseInt(args[0])* 2)
        }

        collector.stop();
      }
    })
    collector.on("end", async (collected, reason) => {
      if (reason === 'time') {

        let timesUpEmbed = new MessageEmbed()
          .setTitle(`הזמן נגמר📛`)
              .setDescription(`לא ענית בזמן וירדו לך- ${parseInt(args[0])} מטבעות. `);

        msg.edit({ embeds: [timesUpEmbed], components: [row1, row2, row3, row4].map(row => row.setComponents(row.components.map(component => component.setDisabled(true)))) })
db.subtract(`${message.guild.id}.coins.${message.author.id}`, parseInt(args[0]))
      }
    })
    setTimeout(() => {
      db.delete(`${message.guild.id}.dark_cooldown.${message.author.id}`);
    }, cooldownTime);


  }, 8000)
}
module.exports.conf = {
  enable: false,
  aliases: []
};

module.exports.help = {
  name: "code",
  category: "other",
  usage: "",
  desc: ""
};