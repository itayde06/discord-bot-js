const Discord = require("discord.js");
const db = require("quick.db");
const ms = require(`ms`);
const { Collection, MessageEmbed } = require("discord.js");
 


module.exports.run = async (client, message, args) => {
 if (!message.member.permissions.has("ADMINISTRATOR")) return;


       const user = message.mentions.members.first() || message.member;
  var member = message.mentions.users.first() || message.author;
 var coins =  db.get(`${message.guild.id}.coins.${member.id}`)
   if (!coins || coins <= 0) coins = 0;
        coins = coins.toLocaleString();


  let roles = ["896487051736797224", "896486993700225024", "896486925844754443", "896487009730826240", "896486964046491699", "896486947961307177", "896487018127826994", "896487044921044992", "896487026239623178", "896486975647928361", "896486984560812084", "896487060221882408", "896487036310130698", "896486956924538890", "896487001027649558", "896486940155711538"]
  let list = ""
 
  const items = roles.filter(r => user.roles.cache.has(r));
  if (items !== null && items !== undefined) {
    items.map((x, i) => {
      list += `<@&${x}>,`
    })
  }
  if (!list) list = "\`❌\`"



       
 

const embed4 = new Discord.MessageEmbed()
   .setColor("#ff0004")
 .setThumbnail(member.displayAvatarURL({ dynamic: true }))
    .setAuthor(`${member.tag}`, member.displayAvatarURL({ dynamic: true }))
    .setDescription(`**Account ID: ${user.id}**\n
    **מטבעות: ${coins}**\n\n**רולים: ${list}**`)

     .setTimestamp();
  message.reply({embeds: [embed4]})



}


module.exports.conf = {
  enable: false,
  aliases: []
};

module.exports.help = {
  name: "coins",
  category: "Shop",
  usage: "",
  desc: ""
};