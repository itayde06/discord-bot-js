const Discord = require("discord.js");
const { Collection, MessageEmbed } = require(`discord.js`);
const { MessageActionRow, MessageSelectMenu } = require('discord.js');
const db = require("quick.db");

module.exports.run = async (client, message, args) => {
 if(!message.member.permissions.has("ADMINISTRATOR")) return;

 const row = new MessageActionRow()
 .addComponents(
	 new MessageSelectMenu()
		 .setCustomId('roles')
		 .setPlaceholder('Select a reaction role')
		 .setMinValues(1)
		 

		 .addOptions([
			 { //edit the option according to you ⚠leave the emoji fields like they are 
				 label: 'Casino-Role - רול קזינו',
				 description: 'כדי לקחת את הרול לחץ עליי\n כדי להסיר את הרול לחץ עליי שוב', 
				 value: 'first_option',
				 emoji: "<a:940604362483437608:997509949477372034>  "
			 },
			 {
				 label: `Events-Role - רול איוונטים`,
				 description: 'כדי לקחת את הרול לחץ עליי\n כדי להסיר את הרול לחץ עליי שוב', 
				 value: 'second_option',
				 emoji: "<a:861290619498135572:997509920356311251>  "
			 },
			 {
				 label: 'Daily-Questions - רול שאלות יומיות',
				 description: 'כדי לקחת את הרול לחץ עליי\n כדי להסיר את הרול לחץ עליי שוב', 
				 value: 'third_option',
				 emoji:  "<a:861290564854087710:997509931928391811>"
			 }
		 ]),
 );
 const embed = new MessageEmbed()
 .setColor('#ff0e00')

 .setImage("https://media.discordapp.net/attachments/724098680109879072/724098680109879072/pedixol.png")
 .setDescription(`**<a:940604362483437608:997509949477372034> Casino-Role - רול קזינו\n\n <a:861290619498135572:997509920356311251> Events-Role - רול איוונטים\n\n <a:861290564854087710:997509931928391811> Daily-Questions - רול שאלות יומיות**`)
 .setThumbnail(message.guild.iconURL({dynamic: true, width: 500, height: 500}))

 
await message.channel.send({ embeds: [embed], ephemeral: false ,components: [row]})//edit the content here
//this sends it as empheral so that the chat does not get choked with these 
}




module.exports.conf = {
  enable: true,
  aliases: []
};

module.exports.help = {
  name: "roles",
  category: "mod",
  usage: "",
  desc: ""
};