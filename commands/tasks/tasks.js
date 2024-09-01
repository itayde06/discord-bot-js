const Discord = require("discord.js");
const db = require("quick.db");
const { MessageEmbed } = require("discord.js");
const pms = require("parse-ms");
const ms = require("ms");

module.exports.run = async (client, message, args) => {
 
  
  var user = message.mentions.users.first() || message.author;
  let manager = db.get(`${message.guild.id}.tasks`)
 const embed = new Discord.MessageEmbed()
.setColor("#ff0000")
.setTitle(`Pedixol Profile Tasks`)

 .setThumbnail(message.guild.iconURL({ dynamic: true }))
.setDescription(`
**User: ${user}**

**__ משימת פעילות בוויסים<a:758448571640315905:997626583550546091> __**
${(manager && (manager.requireVoice && !manager.requiredMessages)) ? `צריך ${ms(manager.requireVoice)} כדי לסיים את המשימה\nכמות האקספי שתקבלו במידה ותסיימו את המשימה: ${manager.xp} summer xp\nזמן הנותר כדי לסיים את המשימה: ${ms(db.get(`${message.guild.id}.tasks`).time + db.get(`${message.guild.id}.tasks`).date - new Date().getTime())}\n הזמן שהיית בוויס עד עכשיו: \`${db.get(`voice.${message.author.id}`) ? ms(Object.values(db.get(`voice.${message.author.id}`)).reduce((x, y) => x + y, 0)) : `0 דקות ו- 0 שעות`}/${ms(manager.requireVoice)}\`` : 'אין משימה כרגע'}

**__משימת פעילות בצאטים<a:861290611972505620:997626571198320661>__**
${(manager && (!manager.requireVoice && manager.requiredMessages)) ? `צריך ${manager.requiredMessages} כדי לסיים את המשימה\nכמות האקספי שתקבלו במידה ותסיימו את המשימה: ${manager.xp} summer xp\nזמן הנותר כדי לסיים את המשימה: ${ms(db.get(`${message.guild.id}.tasks`).time + db.get(`${message.guild.id}.tasks`).date - new Date().getTime())}\nכמות ההודעות שעשית עד עכשיו: \`${db.get(`${message.guild.id}.tasks.users.${message.author.id}`) || 0}/${manager.requiredMessages}\`` : 'אין משימה כרגע'}

**__משימת פעילות בצאטים ובוויסים<a:tickred:603615763525271554> __**
${(manager && (manager.requiredMessages && manager.requireVoice)) ? `צריך ${manager.requiredMessages} כדי לסיים את המשימה\nוצריך גם ${manager.requiredMessages} הודעות כדי לסיים את המשימה\nכמות האקספי שתקבלו במידה ותסיימו את המשימה: ${manager.xp} summer xp\nזמן הנותר כדי לסיים את המשימה: ${ms(db.get(`${message.guild.id}.tasks`).time + db.get(`${message.guild.id}.tasks`).date - new Date().getTime())}\nכמות ההודעות שעשית עד עכשיו: \`${db.get(`${message.guild.id}.tasks.users.${message.author.id}`) || 0}/${manager.requiredMessages}\`\n הזמן שהיית בוויס עד עכשיו: \`${db.get(`voice.${message.author.id}`) ? ms(Object.values(db.get(`voice.${message.author.id}`)).reduce((x, y) => x + y, 0)) : `0 דקות ו- 0 שעות`}/${ms(manager.requireVoice)}\`` : 'אין משימה כרגע'}
`)

   
.setFooter({ text: 'מידע אישי על המשימות היומיות', iconURL: ' https://images-ext-2.discordapp.net/external/qxcCMXR4dNavvaRBYSzs3WunZH-d6aj3ioxY8CX3ISo/https/cdn.discordapp.com/icons/294856169573449729/a_a49f5f76f039f28e7732109fcd663fad.gif' });

message.channel.send({embeds: [embed]});
}


    module.exports.conf = {
  enable: true,
  aliases: []
};

module.exports.help = {
  name: "tasks",
  category: "xp",
  usage: "",
  desc: ""
};
