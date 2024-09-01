const Discord = require("discord.js");
const db = require("quick.db");
const { MessageEmbed } = require("discord.js");
const pms = require("parse-ms");
const ms = require("ms");
module.exports.run = async (bot, message, args) => {

   if (message.channel.id != '1000472701032468500' && message.channel.id != '687668366185463808'&& message.channel.id != '688131099515289706') return message.reply(`**${message.author}, אתה לא יכול לעשות כאן את הפקודה, גש   <#1000472701032468500> לצ'אט.**`)
.then(msg => {setTimeout(() => msg.delete(), 5000)}).catch(err => { });
    



  let cd = db.get(`${message.guild.id}.daily_cooldown.${message.author.id}`)
  let cooldownTime = ms("24h")
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

  db.set(`${message.guild.id}.daily_cooldown.${message.author.id}`, Date.now());


  let user2 = message.author

      let xpAdded = Number(randomNumber(100, 500));
  bot.db.add(`${message.guild.id}.coins.${user2.id}`, xpAdded);

  let embed = new MessageEmbed()
    .setColor("GREEN")
    .setAuthor({ name:"Success", iconURL:"https://cdn-icons.flaticon.com/png/512/3546/premium/3546190.png?token=exp=1658767960~hmac=19af85737b486e0b8d078de5700ad773"})
    .setDescription(`**${message.author}, קיבלת את המתנה היומית שהיא  \`${xpAdded}\` מטבעות קיץ , תחזור מחר כדי לקבל את המתנה שוב.**`)
  message.reply({embeds: [embed]})

  setTimeout(() => {
    db.delete(`${message.guild.id}.daily_cooldown.${message.author.id}`);
  }, cooldownTime);

function randomNumber(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }

}
module.exports.conf = {
  enable: true,
  aliases: []
};

module.exports.help = {
  name: "daily",
  category: "Shop",
  usage: "",
  desc: ""
};