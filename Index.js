const Discord = require('discord.js'); 
const config = require('./config.json');
const client = new Discord.Client({
    intents: [
        Discord.Intents.FLAGS.GUILDS,
        Discord.Intents.FLAGS.GUILD_MEMBERS,
        Discord.Intents.FLAGS.DIRECT_MESSAGES,
        Discord.Intents.FLAGS.GUILD_MESSAGES,
        Discord.Intents.FLAGS.GUILD_VOICE_STATES,
        Discord.Intents.FLAGS.GUILD_INTEGRATIONS,
    ],
});

client.on('ready', () => { // When bot is online and ready
    console.log(`Star Citizen bot online!!!!`);
});

client.login(config.token); // Log in with the bot token from our config file. 
