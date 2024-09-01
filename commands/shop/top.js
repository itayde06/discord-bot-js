const Discord = require("discord.js");
const db = require("quick.db");
const { Collection, MessageEmbed, MessageActionRow, MessageButton } = require("discord.js");


module.exports.run = async (client, message, args) => {

const users = db.get(`${message.guild.id}.coins`);
    let coins = Object.keys(users).map((raw) => ({
        userID: raw,
        coins: users[raw]
     })).filter(x => x.coins && x.coins > 0 && message.guild.members.cache.get(x.userID)).sort((a,b) => b.coins-a.coins);
if(coins.length <= 10) {

const embed = new Discord.MessageEmbed()
.setAuthor(  `${client.user.username} | Top coins Leaderboard`)
.setColor("YELLOW")
.setDescription(coins.map((x, i) => `**\`${i+1}\` - ${message.guild.members.cache.get(x.userID).user.tag} • has \`${x.coins.toLocaleString()}\` coins**`).join("\n"))

message.reply({embeds: [embed]})
} else {

var perPage = 10;
var maxPages = 50;
coins = coins.slice(0, maxPages*perPage);
var numPages = parseInt(Math.ceil(coins.length/perPage));
var times = 0;
var Embeds = {}

for(var i=0; i<numPages; i++) {

let xpNow = coins.slice(0, perPage);
const embed = new Discord.MessageEmbed()
.setDescription(xpNow.map((x, i) => `**\`${(i+1)+times}\` - ${message.guild.members.cache.get(x.userID)} • has \`${x.coins.toLocaleString()}\` Coins**`).join("\n"))
coins = coins.slice(perPage);
times += perPage;

}

function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const ButtonsPages = require("../../functions/ButtonsPages")
const { MessageEmbed } = require("discord.js");
const pages = [];

let embeds = Object.keys(Embeds).map((raw) => ({
        id: [raw],
        embeds: [Embeds[raw]]
     }))
embeds.forEach(async embed => {
pages.push(embed.embeds);
})

ButtonsPages(client, message, pages, true);
};
};

module.exports.conf = {
  enable: false,
  aliases: []
};

module.exports.help = {
  name: "dwdwa",
  category: "Shop",
  usage: "",
  desc: ""
};