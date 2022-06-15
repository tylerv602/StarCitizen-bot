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

client.on("messageCreate", async message => { // When the bot spots a message

    if (message.author.bot) return; // Doesn't respond to bots

    if (message.content.indexOf(config.prefix) !== 0) return; // Only responding to existing commands that start with "!"

    const args = message.content.slice(config.prefix.length).trim().split(/ +/g); // Configure arguments for the commands
    const command = args.shift().toLowerCase(); // Detect existing commands


    if (command === "100i") {
        message.channel.send('https://cdn.discordapp.com/attachments/986106198711476227/986315065760317440/Screenshot_16.png'); // Send a message saying "Pong!"
        console.log('msg sent')
    }

    if (command === "F7CR") {
        message.channel.send('https://cdn.discordapp.com/attachments/986106198711476227/986315613578346497/F7C-R_Hornet_Tracker.png');
        console.log('msg sent')
    }

    if (command === "F7C-S") {
        message.channel.send('https://media.discordapp.net/attachments/986106198711476227/986315613846769664/F7C-S_Hornet_Ghost.png?width=185&height=468');
        console.log('msg sent')
    }

    if (command === "F7C-M") {
        message.channel.send('https://media.discordapp.net/attachments/986106198711476227/986315614090055760/F7C-M_Super_Hornet.png?width=186&height=468');
        console.log('msg sent')
    }

    if (command === "Eclipse") {
        message.channel.send('https://media.discordapp.net/attachments/986106198711476227/986315625314005053/Eclipse.png?width=186&height=468'); // Send a message saying "Pong!"
        console.log('msg sent')
    }

    if (command === "F7C") {
        message.channel.send('https://media.discordapp.net/attachments/986106198711476227/986315625578262608/F7C_Hornet.png?width=185&height=468'); // Send a message saying "Pong!"
        console.log('msg sent')
    }
    if (command === "Dragonfly") {
        message.channel.send('https://media.discordapp.net/attachments/986106198711476227/986315625796362300/Dragonfly.png?width=176&height=468'); // Send a message saying "Pong!"
        console.log('msg sent')
    }
    if (command === "Cyclone TR") {
        message.channel.send('https://media.discordapp.net/attachments/986106198711476227/986315654091128882/Cyclone_TR.png?width=207&height=467');
        console.log('msg sent')
    }
    if (command === "Cyclone") {
        message.channel.send('https://media.discordapp.net/attachments/986106198711476227/986315654325997598/Cyclone.png?width=188&height=472'); // Send a message saying "Pong!"
        console.log('msg sent')
    }
    if (command === "Defender") {
        message.channel.send('https://cdn.discordapp.com/attachments/986106198711476227/986315654544097310/Defender.png'); // Send a message saying "Pong!"
        console.log('msg sent')
    }
    if (command === "Cyclone RN") {
        message.channel.send('https://media.discordapp.net/attachments/986106198711476227/986315654745444372/Cyclone_RN.png?width=212&height=473'); // Send a message saying "Pong!"
        console.log('msg sent')
    }
    /// needs link below this line///////////////////////
    if (command === "Cutlass Steel") {
        message.channel.send('https://media.discordapp.net/attachments/986106198711476227/986315625314005053/Eclipse.png?width=186&height=468'); // Send a message saying "Pong!"
        console.log('msg sent')
    }
    if (command === "Cyclone AA") {
        message.channel.send('https://media.discordapp.net/attachments/986106198711476227/986315625314005053/Eclipse.png?width=186&height=468'); // Send a message saying "Pong!"
        console.log('msg sent')
    }
    if (command === "Ctclone RC") {
        message.channel.send('https://media.discordapp.net/attachments/986106198711476227/986315625314005053/Eclipse.png?width=186&height=468'); // Send a message saying "Pong!"
        console.log('msg sent')
    }
    if (command === "Cutlass Red") {
        message.channel.send('https://media.discordapp.net/attachments/986106198711476227/986315625314005053/Eclipse.png?width=186&height=468'); // Send a message saying "Pong!"
        console.log('msg sent')
    }
    if (command === "Constellation Taurus") {
        message.channel.send('https://media.discordapp.net/attachments/986106198711476227/986315625314005053/Eclipse.png?width=186&height=468'); // Send a message saying "Pong!"
        console.log('msg sent')
    }
    if (command === "Cutlass") {
        message.channel.send('https://media.discordapp.net/attachments/986106198711476227/986315625314005053/Eclipse.png?width=186&height=468'); // Send a message saying "Pong!"
        console.log('msg sent')
    }
    if (command === "Cutlass Blue") {
        message.channel.send('https://media.discordapp.net/attachments/986106198711476227/986315625314005053/Eclipse.png?width=186&height=468'); // Send a message saying "Pong!"
        console.log('msg sent')
    }
    if (command === "Constellation Phoenix") {
        message.channel.send('https://media.discordapp.net/attachments/986106198711476227/986315625314005053/Eclipse.png?width=186&height=468'); // Send a message saying "Pong!"
        console.log('msg sent')
    }
    if (command === "Carrack") {
        message.channel.send('https://media.discordapp.net/attachments/986106198711476227/986315625314005053/Eclipse.png?width=186&height=468'); // Send a message saying "Pong!"
        console.log('msg sent')
    }
    if (command === "Caterpillar") {
        message.channel.send('https://media.discordapp.net/attachments/986106198711476227/986315625314005053/Eclipse.png?width=186&height=468'); // Send a message saying "Pong!"
        console.log('msg sent')
    }
    if (command === "Constellation Andromeda") {
        message.channel.send('https://media.discordapp.net/attachments/986106198711476227/986315625314005053/Eclipse.png?width=186&height=468'); // Send a message saying "Pong!"
        console.log('msg sent')
    }
    if (command === "Constellation Aquila") {
        message.channel.send('https://media.discordapp.net/attachments/986106198711476227/986315625314005053/Eclipse.png?width=186&height=468'); // Send a message saying "Pong!"
        console.log('msg sent')
    }
    if (command === "Eclipse") {
        message.channel.send('https://media.discordapp.net/attachments/986106198711476227/986315625314005053/Eclipse.png?width=186&height=468'); // Send a message saying "Pong!"
        console.log('msg sent')
    }
    if (command === "Eclipse") {
        message.channel.send('https://media.discordapp.net/attachments/986106198711476227/986315625314005053/Eclipse.png?width=186&height=468'); // Send a message saying "Pong!"
        console.log('msg sent')
    }
    if (command === "Eclipse") {
        message.channel.send('https://media.discordapp.net/attachments/986106198711476227/986315625314005053/Eclipse.png?width=186&height=468'); // Send a message saying "Pong!"
        console.log('msg sent')
    }
    if (command === "Eclipse") {
        message.channel.send('https://media.discordapp.net/attachments/986106198711476227/986315625314005053/Eclipse.png?width=186&height=468'); // Send a message saying "Pong!"
        console.log('msg sent')
    }

});
client.login(config.token); // Log in with the bot token from our config file. 
