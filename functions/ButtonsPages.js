const { MessageEmbed } = require("discord.js")
const { Collection, MessageActionRow, MessageButton } = require("discord.js");
const { Permissions } = require('discord.js')
async function ButtonsPages(client, message, pages, pageTravel = false, button = ['left_button', 'right_button'], time = 5 * 60 * 1000) {

  if (!message) throw new ReferenceError('"message" is not defined')
  if (!pages || typeof pages !== 'object') throw new SyntaxError('Invalid form body [pages]')
  if (!button || button.length !== 2) throw new SyntaxError('Invalid form body [button]')
  if (!time) throw new ReferenceError('"time" is not defined')
  if (typeof time !== "number") throw new ReferenceError('"time" must be a number')
if(!message.guild.me.permissions.has(Permissions.FLAGS.MANAGE_MESSAGES)) {
    const ms1 = await pages[0].setFooter({text : `${client.user.username} | Page 1 / ${pages.length}`})

    let rightbutton = new MessageButton()
      .setLabel("העמוד הבא")
      .setStyle("PRIMARY")
      .setCustomId("right_button")

    let leftbutton = new MessageButton()
      .setLabel("העמוד הקודם")
      .setStyle("PRIMARY")
      .setCustomId("left_button")

    let row = new MessageActionRow()
      .addComponents(
        [leftbutton, rightbutton]
      )
    message.channel.send({
      embeds: [ms1.pages[0]],
      component: [row]

    }).then(async msg => {

      const filter = (button) => message.guild.member(button.clicker.user.id);
      const collector = msg.createMessageComponentCollector(filter, { time: time });
      let i = 0;
      collector.on('collect', async b => {
        if (b.clicker.user.id !== message.author.id) return b.deferReply();
        b.deferReply();
        switch (b.id) {
          case button[0]:
            if (i === 0) return;
            i--;
            pages[i].setFooter({ text: `${client.user.username} | Page ${i + 1} / ${pages.length}` })
            break;
          case button[1]:
            if (i === pages.length - 1) return;
            i++;
            pages[i].setFooter({ text: `${client.user.username} | Page ${i + 1} / ${pages.length}` })
            break;
        }
        await msg.edit({
          component: [row],
          embeds: [pages[i]]
        })
      })
      collector.on('end', () => {
        rightbutton.setDisabled();
        leftbutton.setDisabled();

        let rowEnd = new MessageActionRow()
          .addComponents(
            [leftbutton, rightbutton]
          )


        msg.edit({
          component: [rowEnd],
          embeds: [pages[i]]
        })
      });
      if (pageTravel === true) {

        message.createMessageComponentCollector(x => x.clicker.user.id === message.author.id, { time: time, errors: ['time'] }).on('collect', async (data) => {
          const a = data.content;
          if (isNaN(a)) return;
          data.delete()
          const b = parseInt(a);
          if (b > 0 && b - 1 <= pages.length) {
            i = b - 1
            pages[b - 1].setFooter({ text: `${client.user.username} | Page ${b} / ${pages.length}` })
            msg.edit({
              component: [row],
              embeds: [pages[b - 1]]
            })
          }

        })
      }
      // message.channel.awaitMessages(fil, {time : 60000, error: ['time']})
      // .then(async (collected) => {
      //     console.log(collected.first())
      //     const a = collected.first()
      //     if(isNaN(a)) return;
      //     const b = parseInt(a);
      //     if(b > 0 && b - 1 <=  pages.length) {
      //         i = b -1
      //     }
      // })
      return msg;
    })
  } else {
    let rightbutton = new MessageButton()
      .setLabel("►")
      .setStyle("PRIMARY")
      .setCustomId("right_button")

    let leftbutton = new MessageButton()
      .setLabel("◄")
      .setStyle("PRIMARY")
      .setCustomId("left_button")

      let row = new MessageActionRow()
      .addComponents(
        [leftbutton, rightbutton]
      )

    message.channel.send({
      component: [row],
      embeds: [pages[0]]
    }).then(async msg => {

      const filter = (button) => message.guild.member(button.clicker.user.id);
      const collector = msg.createMessageComponentCollector(filter, { time: time });
      let i = 0;
      collector.on('collect', b => {
        if (b.clicker.user.id !== message.author.id) return b.deferReply();
        b.deferReply();
        switch (b.id) {
          case button[0]:
            if (i === 0) return;
            i--;
            pages[b - 1].setFooter({ text:`${client.user.username} | Page ${i + 1} / ${pages.length}`})
            break;
          case button[1]:
            if (i === pages.length - 1) return;
            pages[b - 1].setFooter({ text:`${client.user.username} | Page ${i + 1} / ${pages.length}`} )
            i++;
            break;
        }
        msg.edit({
          component: row,
          embed: pages[b - 1]
        })
      })
      collector.on('end', () => {
        rightbutton.setDisabled();
        leftbutton.setDisabled();

        let rowEnd = new MessageActionRow()
        .addComponents(
          [leftbutton, rightbutton]
        )
  


        msg.edit({
          component: [rowEnd],
          embeds: [pages[i]]
        })
      });
      if (pageTravel === true) {
        message.createMessageComponentCollector(x => x.clicker.user.id === message.author.id, { time: time, errors: ['time'] }).on('collect', async (data) => {
          const a = data.content;
          if (isNaN(a)) return;
          const b = parseInt(a);
          if (b > 0 && b - 1 <= pages.length) {
            i = b - 1
            pages[b - 1].setFooter({ text:`${client.user.username} | Page ${b} / ${pages.length}`})
            msg.edit({
              component: [row],
              embeds: [pages[b - 1]]
            })
          }

        }).catch(err => msg.edit({ embeds: [pages[i]] }));
      }
      return msg;
    })
  }
}
module.exports = ButtonsPages;

