const Discord = require("discord.js");
const { MessageEmbed } = require(`discord.js`);
const ms = require(`ms`);
const humanizeDuration = require('humanize-duration');
const cooldowns = new Map();
const { MessageActionRow, MessageSelectMenu } = require('discord.js');

/**
 * @param {Discord.Client} client
 * @param {Discord.ButtonInteraction} interaction
 */
module.exports.run = async (client, interaction) => {

  let guild = client.guilds.cache.get('294856169573449729');
  let role1 = guild.roles.cache.find(r => r.id === "987981877686190112");
  let role2 = guild.roles.cache.find(r => r.id === "634485619883507723");
  let role3 = guild.roles.cache.find(r => r.id === "993128667301552180");
  const roleadd = new Array();
  const roleremoved = new Array();
  if(interaction.isSelectMenu())  {
  if (interaction.values[0] === 'first_option' || interaction.values[1] === 'first_option') {

    if (interaction.member.roles.cache.has(role1.id)) {
      roleremoved.push(role1)
      interaction.member.roles.remove('987981877686190112')

    } else {
      roleadd.push(role1)
      interaction.member.roles.add('987981877686190112')

    }
  } 
  if (interaction.values[0] === 'second_option' || interaction.values[1] === 'second_option') {
 let ooo = interaction.guild.roles.cache.get(interaction.customId) || undefined;
    if (interaction.member.roles.cache.has(role2.id)) {
      roleremoved.push(role2)
      interaction.member.roles.remove('634485619883507723')




    } else {
      roleadd.push(role2)
      interaction.member.roles.add('634485619883507723')



    }
  }
   if (interaction.values[0] === 'third_option' || interaction.values[1] === 'third_option') {
 let ooo = interaction.guild.roles.cache.get(interaction.customId) || undefined;
    if (interaction.member.roles.cache.has(role3.id)) {
      roleremoved.push(role3)
      interaction.member.roles.remove('993128667301552180')

    } else {
      roleadd.push(role3)
      interaction.member.roles.add('993128667301552180')

    }
  }
  const embed = new MessageEmbed()
    .setColor("RANDOM")
    .setDescription(`Added the role: ${roleadd.join(", ")} \n Removed the role: ${roleremoved.join(", ")}`)
    .setTimestamp()
  interaction.reply({ embeds: [embed], ephemeral: true });


  }
}





	 
	




