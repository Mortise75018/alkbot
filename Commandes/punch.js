const Discord = require('discord.js');

module.exports.help = {
name:"punch"
}


const client = new Discord.Client();

const fs = require ('fs');

client.login("NzE3NDQ3OTc3NjM1MTUxOTk0.XtnvpA.mGxQV8J2D-1DEk7pDCBNq1_LdrE");

client.commands = new Discord.Collection();
client.on("message",message => 
{
    if(message.content.startsWith(prefix="alk " + "punch"))   
    {
         var result = Math.floor((Math.random() * 100) + 1);
         if( result <= 5){
            message.reply("J'représente la population carcérale J'la mets dans le cul d'la grosse pute d'Marion Maréchal.");}
         else if(  result <= 10){
            message.reply("T'as bugué, j'ai baisé ta meuf dans ton lit. Elle a beuglé, mon sperme l'a aveuglé comme Chong Li.");}
         else if(  result <= 15){
            message.reply("J'éjacule vite, je suis si rapide.");}
         else if(  result <= 20){
            message.reply("J'encule les sionistes comme Richard Gere."); }
         else if(  result <= 25){
            message.reply("J'mets du Versace pendant la crise.");}
         else if(  result <= 30){
            message.reply("Suce moi même si t'as un strabisme.");}
         else if(  result <= 35){
            message.reply("Avec ou sans vaseline ça glisse.");}
         else if(  result <= 40){
            message.reply("Salope j'te la mets tous doucement dans le cul mets la en veilleuse.");}
         else if(  result <= 45){
            message.reply("J'entre et ressors ma bite de la bouche d'une maman, faut que je fasse vite une autre pouf m'attend.");}
         else if(  result <= 50){
            message.reply("J'm'en fous que ta mère ou ta sœur soit charmée");}
         else if(  result <= 55){
            message.reply("J'ai la bouche pâteuse viens m'voir sur Périscope;J'pénètre des foufs crasseuses avec mon pénis propre.");}
         else if(  result <= 60){
            message.reply("Alk baise tout Même les grosses obèses comme Sarah Fraisou.");}
         else if( result <= 65){
            message.reply("Oui je mets la dose, on mixe le matos ton anus est crados comme la myxomatose.");}
         else if(  result <= 70){
            message.reply("Elles veulent sucer mon anus, parait-il qu'il a l'goût du sucre.");}
         else if(  result <= 75){
            message.reply("Pécho chez mes artisans, on offre des bons d'achats.");}
         else if(  result <= 80){
            message.reply("j'vais t'baiser jusqu'à faire enfler ma bite.");}
         else if(  result <= 85){
            message.reply("Aller va sucer des micro-pénis, je vous décapite comme Milošević.");}
        else if(  result <= 90){
            message.reply("Je te prends de dos si tu me prends de haut.");}
         else if(  result <= 95){
             message.reply("Tu n'es qu'une simple pute, je baise des doubles putes Méga triple pute, quadruple nano pute."); }
        else if(  result <= 99){
            message.reply("Mademoiselle suce des bites à Bruxelles, la nuit elle chante le blues ");}
         else {
             message.reply("Tu goûteras jamais la queue de Travis Scott.");}
                 
    }                
    
});