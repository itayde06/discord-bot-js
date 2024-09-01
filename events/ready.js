const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
module.exports.run = async client => {
  const guild = client.guilds.cache.get("294856169573449729");

  console.log(`Bot Online!`);
  process.bot = client;


  const fetch = require("node-fetch");
  const { exec } = require("child_process")

if (db.get(`${guild.id}.tasks`)) {
setTimeout(() => {
if(db.get(`${guild.id}.tasks.winners`)) {
let winners = db.get(`${guild.id}.tasks.winners`).map(id => `<@${id}>`).join("\n");
guild.channels.cache.get("1003269917379936307").send({ content: `__🏅מנצחי המשימה היומית🏅__\n ${winners}`});
  };
db.delete(`${guild.id}.tasks`)
db.delete(`voice.`)
db.delete(`${guild.id}.tasks.users.`)
}, db.get(`${guild.id}.tasks`).time + db.get(`${guild.id}.tasks`).date - new Date().getTime())
}
  let hastebin = {
    url: "https://hastebin.com"
  }

  hastebin.raw = `${hastebin.url}/raw`
  hastebin.api = `${hastebin.url}/documents`

  hastebin.post = function (data) {
    if (!data) throw Error("data must be text input");

    return fetch(hastebin.api, {
      method: "POST",
      body: data,
      headers: { "Content-Type": "text/plain" }

    })
      .catch(console.error)
      .then(res => res.json())
      .then(body => `${hastebin.url}/${body.key}`);
  }

  hastebin.get = function (target) {
    if (!target) throw Error("target must be url or code of hastebin");

    if (!target.startsWith("https://"))
      target = `${hastebin.raw}/${target}`;
    else
      target = `${hastebin.raw}/${target.split(hastebin.url + "/")[1]}`;

    return fetch(target)
      .catch(console.error)
      .then(res => res.text());
  }

  global.hastebin = hastebin;
  if (guild) client.user.setActivity(`${guild.memberCount} Members.`, { type: 'WATCHING' });

};