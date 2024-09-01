const Discord = require("discord.js");
const db = require("quick.db");
const { MessageEmbed } = require("discord.js");
const pms = require("parse-ms");
const ms = require("ms");

module.exports.run = async (client, message, args) => {
 
let Menchannel = message.guild.channels.cache.get('1003269917379936307')
let VoM = ''
let time = ''
let required = ''
let xp = ''
let status = ''
let msgrequire = ''
async function part1(){
await message.reply(`על איזה קטגורייה תרצה לעשות את המשימה?\n הודעות\n וויס`)
const msg_filter = (m) => m.author.id === message.author.id;
await message.channel.awaitMessages({ filter: msg_filter, max: 1 , time: 1800000 })
  .then((collected) => {
     
         if(collected.first().content === 'הודעות'){
           VoM = 'הודעות'
         }else if(collected.first().content === 'וויס'){
           VoM = 'וויס'
         }else if(collected.first().content === 'גם וגם'){
           VoM = 'הודעות ווויסים'
         }else{
           message.reply(`כתוב את אחת מהאפשרויות`)
           status = 1
           return
         }
        }).catch(() => {
            message.reply(`הזמן נגמר, נסה שוב בפעם הבאה`)
            status = 1
    })
}
async function part2(){
  await message.reply(`מהי הכמות שתרצה לעשות איתה את המשימה?\n> אם המשימה בקטגורייה וויס - כתוב זמן ( exm: 1m or 15s )\n> אם המשימה בקטגורייה הודעות כתבו מספר שלם של הודעות ( exm: 15 )\n> אם המשימה בקטגוריה גם וגם כתבו זמן ולאחר מכן כתבו הודעות ( exm: 15s ובשאלה הבאה כתבו 15 )`)
  const msg_filter = (m) => m.author.id === message.author.id;
  await message.channel.awaitMessages({ filter: msg_filter, max: 1 , time: 1800000 })
    .then((collected) => {
          let tt = collected.first().content.toLowerCase()
          if(VoM === 'וויס'){
        if(isNaN(ms(tt))){
            message.reply(`נא כתוב כמות נורמלית של זמן בוויס`)
            status = 1
            return
        }else{
          required = ms(tt)
        }
          }else if(VoM === 'הודעות'){
        if(isNaN(tt)){
            message.reply(`נא כתוב כמות הודעות נורמלית`)
            status = 1
            return
        }else{
          required = parseInt(tt)
        }
          }else if(VoM === 'הודעות ווויסים'){
        if(isNaN(ms(tt))){
            message.reply(`נא כתוב כמות נורמלית של זמן בוויס`)
            status = 1
            return
        }else{
          required = ms(tt)
        }
          }
        }).catch((e) => {
          console.log(e)
            message.reply(`הזמן נגמר, נסה שוב בפעם הבאה`)
            status = 1
    })
}
  async function partVpice(){
  await message.reply(`מהי כמות ההודעות שתרצה בנוסף?`)
  const msg_filter = (m) => m.author.id === message.author.id;
  await message.channel.awaitMessages({ filter: msg_filter, max: 1 , time: 1800000 })
    .then((collected) => {
          let ttt = collected.first().content.toLowerCase()
        if(isNaN(ttt)){
            message.reply(`נא כתוב כמות הודעות נורמלית`)
            status = 1
            return
        }else{
          msgrequire = parseInt(ttt)
        }
          
        }).catch((e) => {
          console.log(e)
            message.reply(`הזמן נגמר, נסה שוב בפעם הבאה`)
            status = 1
    })
}

async function part3(){
  await message.reply(`מה הזמן שאתה רוצה למשימה?`)
  const msg_filter = (m) => m.author.id === message.author.id;
  await message.channel.awaitMessages({ filter: msg_filter, max: 1 , time: 1800000 })
    .then((collected) => {
          let t = collected.first().content.toLowerCase()
        if(isNaN(ms(t))){
            message.reply(`נא כתוב זמן נורמלי`)
            status = 1
            return
        }else{
          time = ms(t)
        }
        }).catch((e) => {
          console.log(e)
            message.reply(`הזמן נגמר, נסה שוב בפעם הבאה`)
            status = 1
    })
}
async function part4(){
  await message.reply(`מהי כמות האקספי שמקבלים?`)
  const msg_filter = (m) => m.author.id === message.author.id;
  await message.channel.awaitMessages({ filter: msg_filter, max: 1 , time: 1800000 })
    .then((collected) => {
          let mes = collected.first().content.toLowerCase()
          if(isNaN(mes) || isNaN(parseInt(mes))){
            message.reply(`נא כתוב כמות נורמלית`)
            status = 1
          }else{
            xp = mes
          }
        }).catch((e) => {
          console.log(e)
            message.reply(`הזמן נגמר, נסה שוב בפעם הבאה`)
            status = 1
    })
}
async function part5(){
  db.delete(`${message.guild.id}.tasks`)
db.delete(`voice.`)
db.delete(`${message.guild.id}.tasks.users.`)
  if(VoM === 'הודעות') {

 const embed = new Discord.MessageEmbed()
  .setColor("#ff0004")
 .setTitle("__התחילה משימה יומית של פעילות בצ'אטים__")
 .setDescription(`**כמות ההודעות שצריך לסיום המשימה: ${required} הודעות\n\n כמות המטבעות קיץ שמקבלים בסיום המשימה: ${xp} summer coins\n\n הזמן לסיום המשימה: ${ms(time)}** `)
 .setThumbnail(message.guild.iconURL({ dynamic: true }))
.setFooter({ text : `כדי לקבל מידע על כמות הודעות אנא עשו את הפקודה !tasks`});
Menchannel.send({embeds: [embed]});
message.channel.send(`המשימה התחילה בצאנל ${Menchannel}`)
  db.set(`${message.guild.id}.tasks`, { date: Date.now(), time: time, category: VoM, requiredMessages: required, xp: xp });
  }else if(VoM === 'וויס'){
  const embed2 = new Discord.MessageEmbed()
  .setColor("#ff0004")
 .setTitle("__התחילה משימה יומית של פעילות בוויסים__")
.setDescription(`**הזמן בוויס שצריך לסיום המשימה: ${ms(required)}n\n כמות המטבעות קיץ שמקבלים בסיום המשימה: ${xp} summer coins\n\n הזמן לסיום המשימה: ${ms(time)}** `)
 .setThumbnail(message.guild.iconURL({ dynamic: true }))
.setFooter({ text : `כדי לקבל מידע על כמות הודעות אנא עשו את הפקודה !tasks`});
Menchannel.send({embeds: [embed2]});
message.channel.send(`המשימה התחילה בצאנל ${Menchannel}`)
  db.set(`${message.guild.id}.tasks`, { date: Date.now(), time: time, category: VoM, requireVoice: required, xp: xp });
  }else if(VoM === 'הודעות ווויסים'){
    const embed2 = new Discord.MessageEmbed()
  .setColor("#ff0004")
 .setTitle("__התחילה משימה יומית של פעילות בצאטים ובוויסים__🔊✍")
 .setDescription(`**צריך ${ms(required)} בוויס כדי לסיים את המשימה\nוצריך ${msgrequire} הודעות\n  כמות האקספי שתקבלו במידה ותסיימו את המשימה :${xp} summer xp \n זמן כדי לסיים את המשימה: ${ms(time)}**`)
 .setThumbnail(message.guild.iconURL({ dynamic: true }))
.setFooter(`כדי לקבל מידע על כמות הודעות אנא עשו את הפקודה !tasks`);
Menchannel.send({embeds: [embed2]});
message.channel.send(`המשימה התחילה בצאנל ${Menchannel}`)
  db.set(`${message.guild.id}.tasks`, { date: Date.now(), time: time, category: VoM, requireVoice: required, requireMessages: msgrequire,xp: xp });
  }
}
async function part6(){
  setTimeout(() => {
if (db.get(`${message.guild.id}.tasks.winners`)) {
let winners = db.get(`${message.guild.id}.tasks.winners`).map(id => `<@${id}>`).join("\n");
message.guild.channels.cache.get("1003269917379936307").send({ content: `__🏅מנצחי המשימה היומית🏅__\n ${winners}`});

}else{
  message.guild.channels.cache.get("1003269917379936307").send({ content: `__🏅מנצחי המשימה היומית🏅__\n אין מנצחים למשימה יומית זו`});
}
db.delete(`${message.guild.id}.tasks`);
db.delete(`voice.`)
db.delete(`${message.guild.id}.tasks.users.`)
}, db.get(`${message.guild.id}.tasks`).time + db.get(`${message.guild.id}.tasks`).date - new Date().getTime())
}
async function main(){
  await part1()
  if(status) return;
  await part2()
  if(status) return;
  if(VoM === 'הודעות ווויסים') await partVpice()
  if(status) return;
  await part3()
  if(status) return;
  await part4()
  if(status) return;
  await part5()
  if(status) return;
  await part6()
}
main()

/*
if (!args[0]) return message.reply("יש לציין את כמות ההודעות שצריך");
if (!args[1]) return message.reply("יש לציין את כמות האקספי שמקבלים.");
if (!args[2]) return message.reply("יש לציין את הזמן שיש כדי לסיים את המשימה (5h)");

await db.set(`${message.guild.id}.tasks`, { date: Date.now(), time: ms(args[2]), requiredMessages: args[0], xp: args[1] });
בב
.setTitle("__התחילה משימה יומית של פעילות בצ'אטים__✍")
.setColor("BLUE")
.setDescription(`**צריך ${args[0]} הודעות כדי לסיים את המשימה\n  כמות האקספי שתקבלו במידה ותסיימו את המשימה :${args[1]} summer xp \n זמן כדי לסיים את המשימה: ${ms(ms(args[2]), { long: true })}**`)


setTimeout(() => {
if (db.get(`${message.guild.id}.tasks.winners`)) {
let winners = db.get(`${message.guild.id}.tasks.winners`).map(id => `<@${id}>`).join("\n");
message.guild.channels.cache.get("851537456435560478").send({ embed: { description: `**__🏅מנצחי המשימה היומית🏅__**\n ${winners}`, color: "BLUE" }});
db.delete(`${message.guild.id}.tasks`);
};
}, db.get(`${message.guild.id}.tasks`).time + db.get(`${message.guild.id}.tasks`).date - new Date().getTime())
*/


};

    module.exports.conf = {
  enable: true,
  aliases: []
};

module.exports.help = {
  name: "stask",
  category: "xp",
  usage: "",
  desc: ""
};



 