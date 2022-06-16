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

    if (command === "Cutlass Steel") {
        message.channel.send('https://media.discordapp.net/attachments/986106198711476227/986315676551630868/Cutlass_Steel.png'); // Send a message saying "Pong!"
        console.log('msg sent')
    }

    if (command === "Cyclone AA") {
        message.channel.send('https://cdn.discordapp.com/attachments/986106198711476227/986315676794908723/Cyclone_AA.png'); // Send a message saying "Pong!"
        console.log('msg sent')
    }

    if (command === "Ctclone RC") {
        message.channel.send('https://media.discordapp.net/attachments/986106198711476227/986315677101068338/Cyclone_RC.png'); // Send a message saying "Pong!"
        console.log('msg sent')
    }

    if (command === "Cutlass Red") {
        message.channel.send('https://media.discordapp.net/attachments/986106198711476227/986315677453398126/Cutlass_Red.png?width=381&height=905'); // Send a message saying "Pong!"
        console.log('msg sent')
    }

    if (command === "Constellation Taurus") {
        message.channel.send('https://cdn.discordapp.com/attachments/986106198711476227/986315693844754483/Constellation_Taurus.png'); // Send a message saying "Pong!"
        console.log('msg sent')
    }

    if (command === "Cutlass") {
        message.channel.send('https://cdn.discordapp.com/attachments/986106198711476227/986315694121566218/Cutlass_Black.png'); // Send a message saying "Pong!"
        console.log('msg sent')
    }

    if (command === "Cutlass Blue") {
        message.channel.send('https://cdn.discordapp.com/attachments/986106198711476227/986315694364844053/Cutlass_Blue.png'); // Send a message saying "Pong!"
        console.log('msg sent')
    }

    if (command === "Constellation Phoenix") {
        message.channel.send('https://cdn.discordapp.com/attachments/986106198711476227/986315694599708775/Constellation_Phoenix.png'); // Send a message saying "Pong!"
        console.log('msg sent')
    }

    if (command === "Carrack") {
        message.channel.send('https://cdn.discordapp.com/attachments/986106198711476227/986315715629957250/Carrack.png'); // Send a message saying "Pong!"
        console.log('msg sent')
    }

    if (command === "Caterpillar") {
        message.channel.send('https://cdn.discordapp.com/attachments/986106198711476227/986315715948740618/Caterpillar.png'); // Send a message saying "Pong!"
        console.log('msg sent')
    }

    if (command === "Constellation Andromeda") {
        message.channel.send('https://cdn.discordapp.com/attachments/986106198711476227/986315716368166952/Constellation_Andromeda.png'); // Send a message saying "Pong!"
        console.log('msg sent')
    }

    if (command === "Constellation Aquila") {
        message.channel.send('https://cdn.discordapp.com/attachments/986106198711476227/986315716745637888/Constellation_Aquila.png'); // Send a message saying "Pong!"
        console.log('msg sent')
    }

    if (command === "C8X Pisces Expedition") {
        message.channel.send('https://media.discordapp.net/attachments/986106198711476227/986315717123117116/C8X_Pisces_Expedition.png?width=382&height=904'); 
    }

    if (command === "Blade") {
        message.channel.send('https://media.discordapp.net/attachments/986106198711476227/986315737763315712/Blade.png'); 
    }

    if (command === "Buccaneer") {
        message.channel.send('https://cdn.discordapp.com/attachments/986106198711476227/986315737943638109/Buccaneer.png'); 
    }

    if (command === "C2 Hercules Starlifter") {
        message.channel.send('https://cdn.discordapp.com/attachments/986106198711476227/986315738191118376/C2_Hercules_StarLifter.png');
    }

    if (command === "Avenger Titan") {
        message.channel.send('https://media.discordapp.net/attachments/986106198711476227/986315738446962758/Avernger_Titan.png?width=329&height=905');
    }

    if (command === "Ballista") {
        message.channel.send('https://media.discordapp.net/attachments/986106198711476227/986315738681864242/Ballista.png');
    }

    if (command === "Aurora MR") {
        message.channel.send('https://cdn.discordapp.com/attachments/986106198711476227/986315758055346226/Aurora_MR.png');
    }

    if (command === "Avenger Stalker") {
        message.channel.send('https://media.discordapp.net/attachments/986106198711476227/986315758369923142/Avenger_Stalker.png?width=360&height=905');
    }

    if (command === "Avenger Warlock") {
        message.channel.send('https://media.discordapp.net/attachments/986106198711476227/986315758671921162/Avenger_Warlock.png?width=326&height=904');
    }

    if (command === "Aurora LN") {
        message.channel.send('https://media.discordapp.net/attachments/986106198711476227/986315759133290576/Aurora_LN.png?width=363&height=904');
    }

    if (command === "Aurora LX") {
        message.channel.send('https://cdn.discordapp.com/attachments/986106198711476227/986315759808544829/Aurora_LX.png');
    }

    if (command === "Ares") {
        message.channel.send('https://media.discordapp.net/attachments/986106198711476227/986315779987361892/Ares_Star_Fighter_Inferno.png');
    }

    if (command === "Ares Star Fighter Ion") {
        message.channel.send('https://media.discordapp.net/attachments/986106198711476227/986315780276764732/Ares_Star_Fighter_Ion.png');
    }

    if (command === "Arrow") {
        message.channel.send('https://media.discordapp.net/attachments/986106198711476227/986315780520022016/Arrow.png?width=338&height=905');
    }

    if (command === "Aurora CL") {
        message.channel.send('https://media.discordapp.net/attachments/986106198711476227/986315780784267284/Aurora_CL.png');
    }

    if (command === "A2 Hercules Starlifter") {
        message.channel.send('https://media.discordapp.net/attachments/986106198711476227/986315781321162964/A2_Hercules_Starlifter.png');
    }

    if (command === "325a") {
        message.channel.send('https://media.discordapp.net/attachments/986106198711476227/986315803320262666/325a.png');
    }

    if (command === "350r") {
        message.channel.send('https://media.discordapp.net/attachments/986106198711476227/986315803588689930/350r.png');
    }

    if (command === "400i") {
        message.channel.send('https://media.discordapp.net/attachments/986106198711476227/986315803827777586/400i.png?width=378&height=905');
    }

    if (command === "600i Explorer") {
        message.channel.send('https://media.discordapp.net/attachments/986106198711476227/986315804058480721/600i_Explorer.png?width=328&height=905');
    }

    if (command === "600i Touring") {
        message.channel.send('https://media.discordapp.net/attachments/986106198711476227/986315804293341264/600i_touring.png');
    }

    if (command === "315p") {
        message.channel.send('https://media.discordapp.net/attachments/986106198711476227/986315804511449108/315p.png');
    }

    if (command === "135c") {
        message.channel.send('https://media.discordapp.net/attachments/986106198711476227/986315819648700456/135c.png');
    }

    if (command === "300i") {
        message.channel.send('https://media.discordapp.net/attachments/986106198711476227/986315819908739172/300i.png?width=357&height=904');
    }

    if (command === "85x") {
        message.channel.send('https://media.discordapp.net/attachments/986106198711476227/986315820135219230/85x.png?width=386&height=905');
    }

    if (command === "125a") {
        message.channel.send('https://media.discordapp.net/attachments/986106198711476227/986315820382715934/125a.png');
    }

    if (command === "Freelancer") {
        message.channel.send('https://cdn.discordapp.com/attachments/986681882773172306/986689213514793030/FreeLancer.png');
    }

    if (command === "Freelancer MAX") {
        message.channel.send('https://cdn.discordapp.com/attachments/986106198711476227/986316638611726356/unknown.png');
    }

    if (command === "Freelancer MIS") {
        message.channel.send('https://cdn.discordapp.com/attachments/986681882773172306/986689213284089876/FreeLancer_MIS.png');
    }

    if (command === "Freelancer DUR") {
        message.channel.send('https://cdn.discordapp.com/attachments/986681882773172306/986689213040844901/FreeLancer_DUR.png');
    }

    if (command === "Gladiator") {
        message.channel.send('https://cdn.discordapp.com/attachments/986106198711476227/987044930490871838/Gladiator.png');
    }

    if (command === "Gladius") {
        message.channel.send('https://cdn.discordapp.com/attachments/986106198711476227/987044930700583032/Gladius.png');
    }

    if (command === "Hammerhead") {
        message.channel.send('https://cdn.discordapp.com/attachments/986106198711476227/987044930906099783/Hammerhead.png');
    }

    if (command === "Hawk") {
        message.channel.send('https://cdn.discordapp.com/attachments/986106198711476227/987044653155123200/Hawk.png');
    }

    if (command === "Herald") {
        message.channel.send('https://cdn.discordapp.com/attachments/986106198711476227/987044653482258442/Herald.png');
    }

    if (command === "HoverQuad") {
        message.channel.send('https://cdn.discordapp.com/attachments/986106198711476227/987044653767479337/HoverQuad.png');
    }

    if (command === "Hurricane") {
        message.channel.send('https://cdn.discordapp.com/attachments/986106198711476227/987044654224637952/Hurricane.png');
    }

    if (command === "Khertu-al") {
        message.channel.send('https://cdn.discordapp.com/attachments/986106198711476227/987044654497280120/Khartu-al.png');
    }

    if (command === "M2 Hercules Starlifter") {
        message.channel.send('https://cdn.discordapp.com/attachments/986106198711476227/987044654765711390/M2_Hercules_Starlifter.png');
    }

    if (command === "M50") {
        message.channel.send('https://cdn.discordapp.com/attachments/986106198711476227/987045399179194388/M50.png');
    }

    if (command === "Mantis") {
        message.channel.send('https://cdn.discordapp.com/attachments/986106198711476227/987045399409856522/Mantis.png');
    }

    if (command === "Mercury Star Runner") {
        message.channel.send('https://cdn.discordapp.com/attachments/986106198711476227/987045399632171118/Mercury_Star_Runner.png');
    }

    if (command === "Mole") {
        message.channel.send('https://cdn.discordapp.com/attachments/986106198711476227/987044655021572096/MOLE.png');
    }

    if (command === "MPUV Cargo") {
        message.channel.send('https://cdn.discordapp.com/attachments/986106198711476227/987044334262157362/MPUV_Cargo.png');
    }

    if (command === "MPUV Personnel") {
        message.channel.send('https://cdn.discordapp.com/attachments/986106198711476227/987044334480269312/MPUV_Personnel.png');
    }

    if (command === "Mustang Alpha") {
        message.channel.send('https://cdn.discordapp.com/attachments/986106198711476227/987044334681612348/Mustang_Alpha.png');
    }

    if (command === "Mustang Beta") {
        message.channel.send('https://cdn.discordapp.com/attachments/986106198711476227/987044334929055784/Mustang_Beta.png');
    }

    if (command === "Mustang Delta") {
        message.channel.send('https://cdn.discordapp.com/attachments/986106198711476227/987044335122001930/Mustang_Delta.png');
    }

    if (command === "Mustang Gamma") {
        message.channel.send('https://cdn.discordapp.com/attachments/986106198711476227/987044335319121980/Mustang_Gamma.png');
    }

    if (command === "Nomad") {
        message.channel.send('https://cdn.discordapp.com/attachments/986106198711476227/987044024949035028/Nomad.png');

    }

    if (command === "Nova") {
        message.channel.send('https://cdn.discordapp.com/attachments/986106198711476227/987044025196494848/Nova.png');
    }

    if (command === "Nox") {
        message.channel.send('https://cdn.discordapp.com/attachments/986106198711476227/987044025561415740/Nox.png');
    }


    if (command === "P-52 Merlin") {
        message.channel.send('https://cdn.discordapp.com/attachments/986106198711476227/987044025796263936/P-52_Merlin.png');
    }

    if (command === "Prospector") {
        message.channel.send('https://cdn.discordapp.com/attachments/986106198711476227/987044026014375946/Prospector.png');
    }

    if (command === "Prowler") {
        message.channel.send('https://cdn.discordapp.com/attachments/986106198711476227/987044026253459518/Prowler.png');
    }

    if (command === "PTV") {
        message.channel.send('https://cdn.discordapp.com/attachments/986106198711476227/987043713631010857/PTV.png');
    }

    if (command === "RAFT") {
        message.channel.send('https://cdn.discordapp.com/attachments/986106198711476227/987043713865908304/RAFT.png');
    }

    if (command === "Razor") {
        message.channel.send('https://cdn.discordapp.com/attachments/986106198711476227/987043714943827998/Razor.png');
    }

    if (command === "Razor EX") {
        message.channel.send('https://cdn.discordapp.com/attachments/986106198711476227/987043714272743455/Razor_EX.png');
    }

    if (command === "Razer LX") {
        message.channel.send('https://cdn.discordapp.com/attachments/986106198711476227/987043714662797372/Razor_LX.png');
    }

    if (command === "Reclaimer") {
        message.channel.send('https://cdn.discordapp.com/attachments/986106198711476227/987043715275161641/Reclaimer.png');
    }

    if (command === "Redeemer") {
        message.channel.send('https://cdn.discordapp.com/attachments/986106198711476227/987043386588557382/Redeemer.png');
    }

    if (command === "Reliant Kore") {
        message.channel.send('https://cdn.discordapp.com/attachments/986106198711476227/987043386852802620/Reliant_Kore.png');
    }

    if (command === "Reliant Mako") {
        message.channel.send('https://cdn.discordapp.com/attachments/986106198711476227/987043387142201344/Reliant_Mako.png');
    }

    if (command === "Reliant Sen") {
        message.channel.send('https://cdn.discordapp.com/attachments/986106198711476227/987043387536441375/Reliant_Sen.png');
    }

    if (command === "Reliant Tana") {
        message.channel.send('https://cdn.discordapp.com/attachments/986106198711476227/987043387783917638/Reliant_Tana.png');
    }

    if (command === "Retaliator Bomber") {
        message.channel.send('https://cdn.discordapp.com/attachments/986106198711476227/987043388136259685/Retaliator_Bomber.png');
    }

    if (command === "ROC") {
        message.channel.send('https://cdn.discordapp.com/attachments/986106198711476227/987041789254971542/ROC.png');
    }

    if (command === "ROC-DS") {
        message.channel.send('https://cdn.discordapp.com/attachments/986106198711476227/987041789494054922/ROC-DS.png');
    }

    if (command === "Sabre") {
        message.channel.send('https://cdn.discordapp.com/attachments/986106198711476227/987041789817000056/Sabre.png');
    }

    if (command === "Spartan") {
        message.channel.send('https://cdn.discordapp.com/attachments/986106198711476227/987041790060265542/Spartan.png');
    }

    if (command === "Starfarer") {
        message.channel.send('https://cdn.discordapp.com/attachments/986106198711476227/987041790521651242/Starfarer.png');
    }

    if (command === "Starfarer Gemini") {
        message.channel.send('https://cdn.discordapp.com/attachments/986106198711476227/987041790320345138/Starfarer_Gemini.png');
    }

    if (command === "Talon") {
        message.channel.send('https://cdn.discordapp.com/attachments/986106198711476227/987041587852886126/Talon.png');
    }

    if (command === "Talon Shrike") {
        message.channel.send('https://cdn.discordapp.com/attachments/986106198711476227/987041587546689566/Talon_Shrike.png');
    }

    if (command === "Terrapin") {
        message.channel.send('https://cdn.discordapp.com/attachments/986106198711476227/987041588070981662/Terrapin.png');
    }

    if (command === "Ursa") {
        message.channel.send('https://cdn.discordapp.com/attachments/986106198711476227/987041588293300224/Ursa.png');
    }

    if (command === "Valkyrie") {
        message.channel.send('https://cdn.discordapp.com/attachments/986106198711476227/987041588490428466/Valkyrie.png');
    }

    if (command === "Vanguard Harbinger") {
        message.channel.send('https://cdn.discordapp.com/attachments/986106198711476227/987041385469325362/Vanguard_Harbinger.png');
    }

    if (command === "Vanguard Hoplite") {
        message.channel.send('https://cdn.discordapp.com/attachments/986106198711476227/987041385712607242/Vanguard_Hoplite.png');
    }

    if (command === "Vanguard Sentinel") {
        message.channel.send('https://cdn.discordapp.com/attachments/986106198711476227/987041386056523856/Vanguard_Sentinel.png');
    }

    if (command === "Vanguard Warden") {
        message.channel.send('https://cdn.discordapp.com/attachments/986106198711476227/987041386383699979/Vanguard_Warden.png');

    }
    

});
client.login(config.token); 
