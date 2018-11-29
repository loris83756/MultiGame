const Discord = require('discord.js');
const bot = new Discord.Client();

var prefix = ("*")


bot.on("guildMemberAdd" , member => {
    member.guild.channels.find("name","nouveau-départ").send(`Bienvenue ${member}`)
})

bot.on("guildMemberRemove" , member => {
    member.guild.channels.find("name","nouveau-départ").send(`**${member} a quitté le serveur **`)
})

bot.on(`guildMemberAdd`,member => {
    var role = member.guild.roles.find(`name`, `Membres`);
    member.addRole(role)
})

bot.on('ready',function() {
    bot.user.setGame("Commande: *help");
    console.log ("Connectedç");
});


bot.on('message', message => {
    if (message.content === prefix + "help"){ 
        message.author.send("**Liste des commandes**: \n ```*informations: (nouveau)``` Donne des informations sur le bot.\n \n ```*ping: (nouveau)``` Donne le temps de réaction du bot en ms. \n \n ```*ban: (bientôt disponible)``` Permet de banir des personnes. \n \n ```*kick: (bientôt disponible)``` Permet d´expulser des personnes. \n \n ```*mute: (bientôt disponible)``` Permet de mute des personnes. \n \n **Autres fonctionalitées:** \n ```**Salut**``` Dites Salut et le bot vous dira Bonjour. \n \n ```**Bienvenue/a quitté le serveur**``` Dés qu'une personne rejoindra votre serveur le bot lui shoutera la Bienvenue et a sont départ le bot dira @...#0000 a quitté le serveur.\n Attention il faut posséder d'un salon nouveau/départ pour pouvoir avoir accés a cette fonctionalité. ")
        message.channel.sendMessage("**Les commandes vous on était envoyé en MP :bee: **")
    }
    
    if (message.content === prefix + "informations"){
        message.channel.sendMessage("_ Je suis développer par loris83756#3705 et je suis hébergé chez Heroku. \n **Serveur officiel: https://discord.gg/WFDfbZm_" )
        console.log("Commande effectué");
    }
    
    if (message.content === "Salut"){
        message.reply("Bien le bonjour. :)");
        console.log("Commande Salut effectué");
    }
    
     if (message.content === prefix + "serveurs"){
        message.channel.sendMessage(bot.guilds.map(r => r.name + ` | **${r.memberCount}** membres`))
    }


    if (message.content === prefix + "ping"){
        message.channel.sendMessage(`**Pong:** ${message.createdTimestamp - Date.now()} ms`);
    }
    
});
bot.login(process.env.TOKEN);


