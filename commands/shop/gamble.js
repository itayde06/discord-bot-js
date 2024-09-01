const Discord = require("discord.js");
const ms = require(`ms`);
const pms = require("parse-ms");
const { Collection, MessageEmbed, MessageActionRow, MessageButton } = require("discord.js");
const { set } = require("express/lib/application");

module.exports.run = async (client, message, args) => {
   if (message.channel.id != '1000472701032468500' && message.channel.id != '687668366185463808'&& message.channel.id != '688131099515289706') return message.reply(`**${message.author}, אתה לא יכול לעשות כאן את הפקודה, גש   <#1000472701032468500> לצ'אט.**`)
.then(msg => {setTimeout(() => msg.delete(), 5000)}).catch(err => { });
    
   

    let cd = db.get(`${message.guild.id}.gamble_cooldown.${message.author.id}`)
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
       .setDescription(`אתה יכול להמר יותר מ- 200 קוינס!`);
        if(parseInt(args[0])>  200) return message.reply({embeds: [embed13551]})

    const onebutton = new MessageButton()
        .setLabel("1")
        .setStyle("SECONDARY")
        .setCustomId("1")

    const twobutton = new MessageButton()
        .setLabel("2")
        .setStyle("SECONDARY")
        .setCustomId("2")

    const threebutton = new MessageButton()
        .setLabel("3")
        .setStyle("SECONDARY")
        .setCustomId("3")

    const Fourbutton = new MessageButton()
        .setLabel("4")
        .setStyle("SECONDARY")
        .setCustomId("4")

    const fivebutton = new MessageButton()
        .setLabel("5")
        .setStyle("SECONDARY")
        .setCustomId("5")

    const sixbutton = new MessageButton()
        .setLabel("6")
        .setStyle("SECONDARY")
        .setCustomId("6")

    const sevenbutton = new MessageButton()
        .setLabel("7")
        .setStyle("SECONDARY")
        .setCustomId("7")

    const eightbutton = new MessageButton()
        .setLabel("8")
        .setStyle("SECONDARY")
        .setCustomId("8")

    const ninebutton = new MessageButton()
        .setLabel("9")
        .setStyle("SECONDARY")
        .setCustomId("9")

    const teenbutton = new MessageButton()
        .setLabel("10")
        .setStyle("SECONDARY")
        .setCustomId("10")

    let row1 = new MessageActionRow()
        .addComponents(
            [onebutton, twobutton, threebutton, Fourbutton, fivebutton]
        )

    let row2 = new MessageActionRow()
        .addComponents(
            [sixbutton, sevenbutton, eightbutton, ninebutton, teenbutton]
        )
    let embed7 = new Discord.MessageEmbed()
        .setTitle(`🔎משחק נחש את המספר`)

        .setColor("#36393F")
        .setDescription("**אז מהלך המשחק הוא כזה: אני אבחר מספר בין 1 עד 10, ואתה תצטרך לנחש את המספר! בוא נראה למה אתה מסוגל, מוכן להתחיל (לחץ על אחד המספרים כדי להתחיל)**")
    let msg = await message.reply({
        embeds: [embed7],
        components: [row1, row2]
    });
db.set(`${message.guild.id}.gamble_cooldown.${message.author.id}`, Date.now());
const filter = (b) => b.user.id == message.author.id;
    const collector = msg.createMessageComponentCollector({filter, max: 1, time: 15000, errors: ["time"]})

    /**
     * @param {Discord.ButtonInteraction} MessageButton
     */
    collector.on("collect", async btn => {

        //await start_gamble(message)
        let randomNumber = Math.floor(Math.random() * 10) + 1;

        await btn.deferReply();
        if (btn.customId != randomNumber) {
            const embed11 = new Discord.MessageEmbed()
                .setTitle(`ניחשת לא נכון!`)
                .setColor("RED")
                .setAuthor({ name: "תוצאות סופיות" })
                .addField(`המספר שאתה ניחשת`, `${btn.customId}`)
                .addField(`המספר שאני בחרתי`, `${randomNumber}`)
                .setDescription(`ניחשת לא נכון, חבל אולי תצליח פעם הבאה!`)

            const onebutton11 = new MessageButton()
                .setLabel("1")
                .setStyle("SECONDARY")
                .setCustomId("אחד")
                .setDisabled(true)
            const twobutton11 = new MessageButton()
                .setLabel("2")
                .setStyle("SECONDARY")
                .setCustomId("שתיים")
                .setDisabled(true)
            const threebutton11 = new MessageButton()
                .setLabel("3")
                .setStyle("SECONDARY")
                .setCustomId("שלוש")
                .setDisabled(true)
            const Fourbutton11 = new MessageButton()
                .setLabel("4")
                .setStyle("SECONDARY")
                .setCustomId("ארבע")
                .setDisabled(true)
            const fivebutton11 = new MessageButton()
                .setLabel("5")
                .setStyle("SECONDARY")
                .setCustomId("חמש")
                .setDisabled(true)
            const sixbutton11 = new MessageButton()
                .setLabel("6")
                .setStyle("SECONDARY")
                .setCustomId("שש")
                .setDisabled(true)
            const sevenbutton11 = new MessageButton()
                .setLabel("7")
                .setStyle("SECONDARY")
                .setCustomId("שבע")
                .setDisabled(true)
            const eightbutton11 = new MessageButton()
                .setLabel("8")
                .setStyle("SECONDARY")
                .setCustomId("שמונה")
                .setDisabled(true)
            const ninebutton11 = new MessageButton()
                .setLabel("9")
                .setStyle("SECONDARY")
                .setCustomId("תשע")
                .setDisabled(true)
            const teenbutton11 = new MessageButton()
                .setLabel("10")
                .setStyle("SECONDARY")
                .setCustomId("עשר")
                .setDisabled(true)
            let row111 = new MessageActionRow()
                .addComponents(
                    [onebutton11, twobutton11, threebutton11, Fourbutton11, fivebutton11]
                )

            let row222 = new MessageActionRow()
                .addComponents(
                    [sixbutton11, sevenbutton11, eightbutton11, ninebutton11, teenbutton11]
                )
            msg.edit({ embeds: [embed11], components: [row111, row222] })

            btn.followUp(`**${message.author} הימרת לא נכון, לכן ירדו לך- ${parseInt(args[0])} מטבעות.**`)
           db.subtract(`${message.guild.id}.coins.${message.author.id}`, parseInt(args[0]))
        } else {

            const embed1 = new Discord.MessageEmbed()
                .setTitle(`ניחשת נכון!`)
                .setColor('#00ffab')
                .setAuthor({ text: "תוצאות סופיות" })
                .addField(`המספר שאתה ניחשת`, `${btn.customId}`)
                .addField(`המספר שאני בחרתי`, `${randomNumber}`)
                .setDescription(`כל הכבוד לך, הצלחת לנחש את המספר למרות שזה קשה!`)

            const onebutton1 = new MessageButton()
                .setLabel("1")
                .setStyle("SECONDARY")
                .setCustomId("אחד")
                .setDisabled(true)
            const twobutton1 = new MessageButton()
                .setLabel("2")
                .setStyle("SECONDARY")
                .setCustomId("שתיים")
                .setDisabled(true)
            const threebutton1 = new MessageButton()
                .setLabel("3")
                .setStyle("SECONDARY")
                .setCustomId("שלוש")
                .setDisabled(true)
            const Fourbutton1 = new MessageButton()
                .setLabel("4")
                .setStyle("SECONDARY")
                .setCustomId("ארבע")
                .setDisabled(true)
            const fivebutton1 = new MessageButton()
                .setLabel("5")
                .setStyle("SECONDARY")
                .setCustomId("חמש")
                .setDisabled(true)
            const sixbutton1 = new MessageButton()
                .setLabel("6")
                .setStyle("SECONDARY")
                .setID("שש")
                .setDisabled(true)
            const sevenbutton1 = new MessageButton()
                .setLabel("7")
                .setStyle("SECONDARY")
                .setCustomId("שבע")
                .setDisabled(true)
            const eightbutton1 = new MessageButton()
                .setLabel("8")
                .setStyle("SECONDARY")
                .setCustomId("שמונה")
                .setDisabled(true)
            const ninebutton1 = new MessageButton()
                .setLabel("9")
                .setStyle("SECONDARY")
                .setCustomId("תשע")
                .setDisabled(true)
            const teenbutton1 = new MessageButton()
                .setLabel("10")
                .setStyle("SECONDARY")
                .setCustomId("עשר")
                .setDisabled(true)
            let row11 = new MessageActionRow()
                .addComponents(
                    [onebutton1, twobutton1, threebutton1, Fourbutton1, fivebutton1]
                )

            let row22 = new MessageActionRow()
                .addComponents(
                    [sixbutton1, sevenbutton1, eightbutton1, ninebutton1, teenbutton1]
                )
            msg.edit({ embeds: [embed1], components: [row11, row22] })
            btn.followUp(`**${message.author} הימרת נכון, וזכית ב-  ${parseInt(args[0])* 2} מטבעות **`)
                  db.add(`${message.guild.id}.coins.${message.author.id}`, parseInt(args[0])* 2)
        };
    })



    collector.on("end", async (collected, reason) => {
        if (reason === 'time') {
            let embed = new MessageEmbed()
                .setTitle(`הזמן נגמר !`)
                .setDescription(`**${message.author} לא ענית בזמן, לכן ירדו לך- ${parseInt(args[0])} מטבעות.**`);
db.subtract(`${message.guild.id}.coins.${message.author.id}`, parseInt(args[0]))
            msg.edit({
                embeds: [embed]
            }).then(msg => {setTimeout(() => msg.delete(), 5000)}).catch(err => { });
    
        }
    })
    setTimeout(() => {
        db.delete(`${message.guild.id}.gamble_cooldown.${message.author.id}`);
    }, cooldownTime);
}
module.exports.conf = {
  enable: true,
    aliases: []
};

module.exports.help = {
    name: "gamble",
    category: "Shop",
    usage: "",
    desc: ""
};