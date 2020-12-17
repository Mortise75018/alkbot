const Discord = require('discord.js')
const client = new Discord.Client();

const fs = require ('fs');

client.login("NzE3NDQ3OTc3NjM1MTUxOTk0.XtnvpA.mGxQV8J2D-1DEk7pDCBNq1_LdrE");

client.commands = new Discord.Collection();

client.on("message",message => 
{
    if(message.content.startsWith(prefix="alk " + "pute"))   
    {
         var result = Math.floor((Math.random() * 100) + 1);
         if( result <= 5){
            message.reply("ton niveau de pute est de " + result+"% . Tu es une yoctopute");}
         else if(  result <= 10){
            message.reply("ton niveau de pute est de " + result+"% . Tu es une zeptopute");}
         else if(  result <= 15){
            message.reply("ton niveau de pute est de " + result+"% . Tu es une attopute");}
         else if(  result <= 20){
            message.reply("ton niveau de pute est de " + result+"% . Tu es une femtopute"); }
         else if(  result <= 25){
            message.reply("ton niveau de pute est de " + result+"% . Tu es une decipute");}
         else if(  result <= 30){
            message.reply("ton niveau de pute est de " + result+"% . Tu es une centipute");}
         else if(  result <= 35){
            message.reply("ton niveau de pute est de " + result+"% . Tu es une millipute");}
         else if(  result <= 40){
            message.reply("ton niveau de pute est de " + result+"% . Tu es une micropute");}
         else if(  result <= 45){
            message.reply("ton niveau de pute est de " + result+"% . Tu es une nanopute");}
         else if(  result <= 50){
            message.reply("ton niveau de pute est de " + result+"% . Tu es une picopute");}
         else if(  result <= 55){
            message.reply("ton niveau de pute est de " + result+"% . Tu es une simple pute");}
         else if(  result <= 60){
            message.reply("ton niveau de pute est de " + result+"% . Tu es une décapute");}
         else if( result <= 65){
            message.reply("ton niveau de pute est de " + result+"% . Tu es une octopute");}
         else if(  result <= 70){
            message.reply("ton niveau de pute est de " + result+"% . Tu es une kilopute");}
         else if(  result <= 75){
            message.reply("ton niveau de pute est de " + result+"% . Tu es une mégapute");}
         else if(  result <= 80){
            message.reply("ton niveau de pute est de " + result+"% . Tu es une gigapute");}
         else if(  result <= 85){
            message.reply("ton niveau de pute est de " + result+"% . Tu es une térapute");}
        else if(  result <= 90){
            message.reply("ton niveau de pute est de " + result+"% . Tu es une pétapute");}
         else if(  result <= 95){
             message.reply("ton niveau de pute est de " + result+"% . Tu es une exapute"); }
        else if(  result <= 99){
            message.reply("ton niveau de pute est de " + result+"% . Tu es une zettapute");}
         else {
             message.reply("ton niveau de pute est de " + result+"% . Tu es une yottapute");}
                 
    }                
    
});



fs.readdir("./Commandes/",(error, f) => {
    if(error) console.log(error);

    let commandes = f.filter(f => f.split(".").pop() === "js");
    if(commandes.length <= 0) return console.log("Aucune commande trouvée! pute");
    commandes.forEach((f) =>{
       let commande = require(`./Commandes/${f}`);
       console.log(`${f} commande chargée ! pute`);

       client.commands.set(commande.help.name,commande);

    });
           
});

fs.readdir("./Events/", (error, f) => {
    if(error) console.log(error);
    console.log(`${f.length} events en chargement pute`);
    f.forEach((f) =>{
        const events = require(`./Events/${f}`);
        const event = f.split(".")[0];

        client.on(event, events.bind(null, client));
    })
});

client.login(process.env.TOKEN);
