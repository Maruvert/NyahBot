
var commandes = [

  "ping",
  "info",
  "update",
  "manual"

];





//------------------------------Connexion à la base de données--------------------------

var collection;
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://Catounet:" + process.env.MONGOPASSWORD + "@nyahbot.qt7bi.mongodb.net";
const mongoClient = new MongoClient(uri, { useUnifiedTopology : true });
mongoClient.connect(err => {
  collection = mongoClient.db("NyahBot").collection("Token");
  // perform actions on the collection object
  //mongoClient.close();
});






//-------------------------------------Connexion à Replit------------------------------

const express = require("express");
const app = express();

const listener = app.listen(process.env.PORT, function() {
  console.log("Your app is listening on port " + listener.address().port);
});

app.get("/", function(req, res) {
  res.send("NyahBot est allumé !")
})





//-------------Appel aux librairies et définition des constantes--------------------------

const discord = require("discord.js"); //Appel de la librairie Discord
const client = new discord.Client();
client.login(process.env.TOKEN); //Pour login, process.env.TOKEN pour ne pas coller le Token




const prefix = ":3";

const nbid = "527875964005515265"; //ID de NyahBot
const catouId = "263655958775857152"; //Mon ID

var needToLevelUp = "10 * Math.floor(((Math.pow(35, userData.niveau + 1) / Math.pow(34, userData.niveau + 1) - 1) * 2900) / 10)"; //Formule de level up

var oldNeedToLevelUp = null;

var tryTokenPlayers = {};





//-----------------------------Liens des autres fichiers-----------------------------------

const info = require('./info.js');
const update = require('./update.js');
const help = require('./help.js');
const manual = require('./manual.js');
const tokenSystem = require('./tokenSystem.js');
const profile = require('./profile.js');
const donation = require('./donation.js');
const nextUpdate = require('./nextUpdate.js');
const updateXP = require('./updateXP.js');




//-------------------------------Démarrage du bot------------------------------------------

client.once('ready', () => {
  console.log('Le bot est prêt !');
  client.user.setActivity('Tapez :3help pour commencer !'); //Activité du bot
});



client.on("ready", function() {
  setInterval(function() {
    tryTokenPlayers = {}
  }, 300000) //Définition de la tranche de temps d'apparition
})





//-----------------------------------Code principal---------------------------------------

client.on("message", async function(message) {


  //Code empêchant d'envoyer des MP au bot.
  if (message.author.bot) return;

  if (message.channel.type == "dm" && message.author.id != nbid) {
    message.channel.send("Je ne réponds pas aux MP ! D:");
  }



  /*if (message.author.id != process.env.DEVID) {

    for (var keyWord in commandes) {

      if (message.content.toLowerCase() == prefix + commandes[keyWord]) {

        message.channel.send("À peine terminé la 0.3.0 que je dois déjà lancer le correctif 0.3.1...Je sais que tu as la hype mais il va falloir attendre ! C'est rude !");

        break;
      }
    }
  }*/



  //Sinon...(la commande est réduite en minuscule et ne prend donc pas en compte la casse)
  else {
    message.content = message.content.toLowerCase();




    //Commande :3
    if (message.content == ":3" && message.author.id != nbid) {
      message.channel.send(":3");
    }




    //Commande Ping
    else if (message.content == prefix + "ping") {
      var nbMili = Date.now() - message.createdTimestamp
      message.channel.send(nbMili + " ms, " + "pong :3");
    }




    //Commande Info
    else if (message.content == prefix + "info") {

      info.info(message);

    }




    //Commande Update
    else if (message.content == prefix + "update") {
      
      update.update(message);

    }

    //Commande NextUpdate
     else if (message.content == prefix + "nextupdate") {
      
      nextUpdate.nextUpdate(message);

    }



    //Commande Help
    else if (message.content == prefix + "help") {
     
      help.help(message, prefix);

    }


    //Commande Manual
    else if (message.content == prefix + "manual") {
      
      manual.manual(message);


    }

    //Commande Profile
    else if (message.content == prefix + "profile") {

      profile.profile(collection, message);

    }



    //Commande Donation
    else if (message.content == prefix + "donation") {

      //donation.donation(message);
      message.channel.send("Cette option n'est pas encore implémentée ! D:");

    }

    


    //Commandes admin
    else if (message.content == prefix + "admin_updatexp" && message.author.id == catouId) {

      updateXP.updateXP(client, collection, needToLevelUp, message);


    }

    }














    //Système de jetons
    tokenSystem.tokenSystem(client, collection, needToLevelUp, message, tryTokenPlayers);







  } //else (si le message n'est pas en MP)
 //client.on("message",async function(message)



)


//