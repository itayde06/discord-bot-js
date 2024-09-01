const Discord = require("discord.js");
const ms = require("ms");
const { Collection, MessageEmbed, MessageButton, MessageActionRow } = require(`discord.js`);
module.exports.run = async (bot, oldState, newState) => {
  let oldId = oldState.channelID
  let newId = newState.channelID
  if (newState.member.user.bot) return;
    if (oldState.member != newState.member) return;
    const member = newState.member;
  let V = ''
  
  let blacklist_voices = ["618180816094101577","618180812658966558","618180814508916736","714161992688205875","618180833680818220","618180831768346626","618180828429549607","618180860730146826","618180858523942913","618180858523942913", "618180856783175751","618180854665052165","618180852932935720","627585919226216499"];

  let newMember = newState.member
  let oldMember = oldState.member

if(newMember.bot) return;
if(oldMember.bot) return;
  
  let newUserChannel = newState.channel
  let oldUserChannel = oldState.channel
  
  if(oldUserChannel === null && newUserChannel !== null) {
     // User Joins a voice channel
    
bot[`voice_coins_${newMember.id}`] = setInterval(function() {
if(!newMember.voice.serverMute && !newMember.voice.selfMute && !blacklist_voices.includes(newUserChannel.id)) {
let coins = bot.db.get(`${newMember.guild.id}.coins.${newMember.id}`);
if(!coins) coins = 0;
  
  bot.db.add(`${newMember.guild.id}.coins.${newMember.id}`, getRandomInt(1, 2));
  
}
}, ms("3m"))
  } else if(newUserChannel === null) {
    // User leaves a voice channel
    
           clearInterval(bot[`voice_coins_${oldMember.id}`])
  }
  
  function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

}