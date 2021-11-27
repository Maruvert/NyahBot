


//---------------------------------------------Import de discord.js et canvas------------------------------------

const discord = require("discord.js");
const Canvas = require("canvas");
const registerDatabase = require('./registerDatabase.js');









//---------------------------------------------Polices d'écriture préchargées------------------------------------

const { registerFont } = require('canvas');
registerFont('./Roboto-Regular.ttf', { family: 'Roboto' });



const { registerFont2 } = require('canvas');
registerFont('./ShipporiMinchoB1-Medium.ttf', { family: 'ShipporiMinchoB1' });






module.exports = {

  async profile(collection, message) {

 

    //Création du canvas, ajout de l'image de fond
    const canvas = Canvas.createCanvas(1500, 1000);
    const ctx = canvas.getContext('2d');
    const background = await Canvas.loadImage("https://media.discordapp.net/attachments/819246442454712350/819671183305211914/unknown.png?width=833&height=473");
    ctx.drawImage(background, 0, 0, canvas.width, canvas.height);



//Création de la variable utilisateur, enregistrement dans la base de données si celui-ci n'y est pas
    var userFound = await collection.find({ "playerId": message.author.id }).toArray()
            if (!(userFound.length == 1))
            {
              await registerDatabase.registerDatabase(collection, message.author, message);
              /*while (!(userFound.length == 1)) {

                  userFound = await collection.find({ "playerId": message.author.id }).toArray();

              }*/
              

            }
    var user = await collection.find({ "playerId": message.author.id }).toArray()
    user = user[0]





    //Création des variables xpNiveauSuivant, avancementBarreXp et tailleJeton
    var xpNiveauSuivant = 10 * Math.floor(((Math.pow(35, user.niveau + 1) / Math.pow(34, user.niveau + 1) - 1) * 2900) / 10);

    var avancementBarreXp = (((user.xp * 100) / xpNiveauSuivant) * 885) / 100;
    const tailleJeton = 130;

    /*/
    xpNiveauSuivant :
    Formule de la progression de l'XP nécessaire à la montée de niveau, arrondie à la dizaine inférieure,
    ( (35^x  /   34^x) -1 ) * 2900
    
    avancementBarreXp :
    Conversion en % de l'xp actuelle par rapport à xpNiveauSuivant, puis conversion du % en de remplissage sur la barre par rapport aux coordonnées x.
    Le 885 est la distance x à parcourir.
    885 = 1400 - 515 avec :
    1400 = centre du demi-cercle au bout de la barre d'XP.
    515 = centre du demi-cercle témoignant de l'avancement de l'XP.
    ---> l'épaisseur du trait est prise en compte.
    /*/



    //Cercle de la barre d'XP (remplissage bleu)
    ctx.arc(500, 320, 70, 0, Math.PI * 2);
    ctx.fillStyle = "#0067A1";
    ctx.fill();




    //Demi-cercle de l'avancement de l'XP
    ctx.beginPath();
    ctx.arc(515 + avancementBarreXp, 320, 50, -0.5 * Math.PI, 0.5 * Math.PI, false);
    ctx.lineWidth = 10;
    ctx.fillStyle = "#0067A1";
    ctx.fill();




    //Rectangle remplissant la barre d'XP derrière le demi-cercle
    ctx.beginPath();
    ctx.rect(540, 270, avancementBarreXp, 100);
    ctx.lineWidth = 10;
    ctx.fillStyle = "#0067A1";
    ctx.fill();




    //Demi-cercle au bout de la barre d'XP
    ctx.beginPath();
    ctx.arc(1400, 320, 50, -0.5 * Math.PI, 0.5 * Math.PI, false);
    ctx.lineWidth = 10;
    ctx.strokeStyle = "black";
    ctx.stroke();




    //Barre XP, partie haute
    ctx.beginPath();
    ctx.moveTo(546, 270);
    ctx.lineTo(1400, 270);
    ctx.lineWidth = 10;
    ctx.strokeStyle = "black";
    ctx.stroke();




    //Barre XP, partie basse
    ctx.beginPath();
    ctx.moveTo(546, 370);
    ctx.lineTo(1400, 370);
    ctx.lineWidth = 10;
    ctx.strokeStyle = "black";
    ctx.stroke();




    //Cercle de la barre d'XP (contour noir)
    ctx.beginPath();
    ctx.arc(500, 320, 70, 0, Math.PI * 2);
    ctx.lineWidth = 10;
    ctx.strokeStyle = "black";
    ctx.stroke();




    //Affichage du pseudonyme, la boucle le limite à 20 caractères
    ctx.font = '80px Roboto';
    ctx.fillStyle = '#ffffff';
    var username = '';
    if (message.author.username.length > 20) {

      for (var i = 0; i < 20; i++) {

        username += message.author.username.charAt(i);

      }
      username += '...';

    }

    else {

      username = message.author.username;
    }
    ctx.fillText(username, 400, 130);




    //Affichage de l'avancement en XP chiffré au dessus de la barre
    ctx.font = '30px Roboto';
    ctx.fillText(user.xp + " / " + xpNiveauSuivant, 560, 260);




    //Affichage du niveau, centré sur le cercle de la barre d'XP
    ctx.font = '80px Roboto';
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(user.niveau, 500, 320);




    //Chargement des images des jetons
    const jetonCommun = await Canvas.loadImage("https://media.discordapp.net/attachments/777923030260514838/777973610614620210/JetonCommun.png");
    const jetonAtypique = await Canvas.loadImage("https://media.discordapp.net/attachments/777923030260514838/777973647167848488/JetonAtypique.png");
    const jetonRare = await Canvas.loadImage("https://media.discordapp.net/attachments/777923030260514838/777973688690933790/JetonRare.png");
    const jetonEpique = await Canvas.loadImage("https://media.discordapp.net/attachments/777923030260514838/777973713714413618/JetonEpique.png");
    const jetonExotique = await Canvas.loadImage("https://media.discordapp.net/attachments/777923030260514838/777973729602174996/JetonExotique.png");
    const jetonLegendaire = await Canvas.loadImage("https://media.discordapp.net/attachments/777923030260514838/777973749957263360/JetonLegendaire.png");




    //Affichage des jetons
    ctx.font = '60px ShipporiMinchoB1';
    ctx.drawImage(jetonCommun, 260, 621 - tailleJeton / 2, tailleJeton, tailleJeton);
    ctx.drawImage(jetonAtypique, 635, 621 - tailleJeton / 2, tailleJeton, tailleJeton);
    ctx.drawImage(jetonRare, 1010, 621 - tailleJeton / 2, tailleJeton, tailleJeton);
    ctx.drawImage(jetonEpique, 260, 821 - tailleJeton / 2, tailleJeton, tailleJeton);
    ctx.drawImage(jetonExotique, 635, 821 - tailleJeton / 2, tailleJeton, tailleJeton);
    ctx.drawImage(jetonLegendaire, 1010, 821 - tailleJeton / 2, tailleJeton, tailleJeton);




    //Affichage du nombre de jetons
    ctx.fillStyle = "black";
    ctx.fillText(user.commun, 420, 621);
    ctx.fillText(user.atypique, 795, 621);
    ctx.fillText(user.rare, 1170, 621);
    ctx.fillText(user.epique, 420, 821);
    ctx.fillText(user.exotique, 795, 821);
    ctx.fillText(user.legendaire, 1170, 821);




    //Affichage de l'avatar de l'utilisateur, ne rien écrire derrière
    ctx.beginPath();
    ctx.arc(225, 225, 175, 0, Math.PI * 2, true);
    ctx.closePath();
    ctx.clip();

    const avatar = await Canvas.loadImage(message.author.displayAvatarURL({ format: 'jpg' }));
    ctx.drawImage(avatar, 50, 50, 350, 350);




    //Envoie du canvas
    const attachment = new discord.MessageAttachment(canvas.toBuffer(), "");
    message.channel.send(attachment);

  }

}

