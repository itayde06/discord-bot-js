const Discord = require("discord.js");
const db = require("quick.db");
const ms = require(`ms`);
const pms = require("parse-ms");
const { Collection, MessageEmbed, MessageActionRow, MessageButton } = require("discord.js");
let endedBoolean = false;


module.exports.run = async (client, message, args) => {
   if (message.channel.id != '1000472701032468500' && message.channel.id != '687668366185463808'&& message.channel.id != '688131099515289706') return message.reply(`**${message.author}, אתה לא יכול לעשות כאן את הפקודה, גש   <#1000472701032468500> לצ'אט.**`)
.then(msg => {setTimeout(() => msg.delete(), 5000)}).catch(err => { });
    
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
        if(parseInt(args[0])>  200) return message.reply({embeds: [embed13551]})



let cd = db.get(`${message.guild.id}.rps_cooldown.${message.author.id}`)
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

          db.set(`${message.guild.id}.rps_cooldown.${message.author.id}`, Date.now());

        let rock_button = new MessageButton()
        .setStyle('PRIMARY')
        .setEmoji('🗻')
         .setCustomId('rock_button');

        let scissors_button = new MessageButton()
        .setStyle('PRIMARY')
        .setEmoji('✂')
        .setCustomId('scissors_button');

        let paper_button = new MessageButton()
        .setStyle('PRIMARY')
        .setEmoji('📄')
        .setCustomId('paper_button');

       
        let row2 = new MessageActionRow()
    .addComponents(
      [rock_button, scissors_button, paper_button]
    )
    
     

      

     let embed = new Discord.MessageEmbed()
            .setTitle("**אבן/נייר/ומספרים**")
            .setColor("#ff2eea")
            .setDescription("**!לחץ על אחד מהריאקשנים כדי להתחיל**")
            .setFooter(`${message.author.tag}`, message.author.displayAvatarURL({ dynamic: true }));
    await message.reply({ embeds: [embed], components: [ row2], files: [] }).then(async msg => {

        if(!client.config.devs.includes(message.author.id))
        db.set(`${message.guild.id}.rps_cooldown.${message.author.id}`, Date.now())
    
        const filter = (button) => {
            return ['rock_button', 'scissors_button', 'paper_button'].includes(button.id) && button.user.id == message.author.id;;
        }
    
        const choices = ['rock_button', 'scissors_button', 'paper_button']
      const collector = msg.createMessageComponentCollector(filter, { max: 1, time: 60*1000 })

        const emojis = {
          rock_button: "🗻",
          scissors_button: "✂",
          paper_button: "📄"
        }

         const correctOption = emojis[choices[Math.floor(Math.random() * choices.length)]]

        collector.on('collect', async btn => {

                endedBoolean = true;
          
                let result = new Discord.MessageEmbed()
                    .setTitle("תוצאות המשחק")
                    .setColor(client.config.color ? client.config.color : "BLUE")
                    .addField("הבחירה שלך", `${emojis[btn.customId]}`, true)
                    .addField("הבחירה שלי", `${correctOption}`, true)
                    .setFooter({text : `${message.author.tag}`, iconURL : message.author.displayAvatarURL({ dynamic: true })});
                endGame(msg, result);
               

                switch (correctOption) {
                  case '🗻':
                    if (emojis[btn.customId] === '📄') {
                    btn.reply(`**ניצחת וקיבלת \`${parseInt(args[0])* 2}\` מטבעות קיץ!**`).catch(err => {});
  db.add(`${message.guild.id}.coins.${message.author.id}`, parseInt(args[0])* 2)
                    } else if(emojis[btn.customId] === correctOption) {
                      btn.reply("שנינו בחרנו את אותו הדבר, לכן אף אחד לא ניצח.").catch(err => {});
                    }
                    else btn.reply(`הפסדת במשחק, לכן ירדו לך ${parseInt(args[0])} מטבעות קיץ.`).catch(err => {});
db.subtract(`${message.guild.id}.coins.${message.author.id}`, parseInt(args[0]))
                  break;
                  case '📄':
                    if (emojis[btn.customId] === '✂') {
                    btn.reply(`**ניצחת וקיבלת \`${parseInt(args[0])* 2}\` מטבעות קיץ!**`).catch(err => {});
                  db.add(`${message.guild.id}.coins.${message.author.id}`, parseInt(args[0])* 2)
                    } else if(emojis[btn.customId] === correctOption) {
                      btn.reply("שנינו בחרנו את אותו הדבר, לכן אף אחד לא ניצח.").catch(err => {});
                    }
                    else btn.reply.send(`הפסדת במשחק, לכן ירדו לך ${parseInt(args[0])} מטבעות קיץ.`).catch(err => {}); 
db.subtract(`${message.guild.id}.coins.${message.author.id}`, parseInt(args[0])) 
                  break;
                  case '✂':
                    if (emojis[btn.customId] === '🗻') {
                    btn.reply(`**ניצחת וקיבלת \`${parseInt(args[0])* 2}\` מטבעות קיץ!**`).catch(err => {});
                  db.add(`${message.guild.id}.coins.${message.author.id}`, parseInt(args[0])* 2)
                    } else if(emojis[btn.customId] === correctOption) {
                      btn.reply("שנינו בחרנו את אותו הדבר, לכן אף אחד לא ניצח.").catch(err => {});
                    }
                    else btn.reply(`הפסדת במשחק, לכן ירדו לך ${parseInt(args[0])} מטבעות קיץ.`).catch(err => {});
db.subtract(`${message.guild.id}.coins.${message.author.id}`, parseInt(args[0]))
                  break;
                }

            })

            setTimeout(function() {
              if(endedBoolean === false && msg) {
              const NoTimeEmbed = new Discord.MessageEmbed()
              .setAuthor({name : message.author.username, iconURL : message.author.displayAvatarURL()})
              .setDescription(`לא ענית בזמן!`)
              return msg.edit({ embeds: [NoTimeEmbed] });
              }
            }, 60*1000)

          

            async function endGame(msg, embed) {

              rock_button = rock_button.setDisabled(true);
              scissors_button = scissors_button.setDisabled(true);
              paper_button = paper_button.setDisabled(true);

     let row2 = new MessageActionRow()
    .addComponents(
      [rock_button, scissors_button, paper_button]
    )

              await msg.edit({ embeds: [embed], components: [row2] });
            }
        });
                           setTimeout(() => {
    db.delete(`${message.guild.id}.rps_cooldown.${message.author.id}`);
  }, cooldownTime);  
function randomNumber(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }

   
        };



module.exports.conf = {
  enable: true,
  aliases: []
};

module.exports.help = {
  name: "rps",
  category: "Shop",
  usage: "",
  desc: ""
};
 