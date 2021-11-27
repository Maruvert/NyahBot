module.exports = {

async update(message) {


const embedUpdate = {
        "title": "Mise à jour de version",
        "description": "Version 0.3.2 (prerelease 1.0.0) du 16/03/2021",
        "color": 26529,
        "thumbnail":
        {
          "url": "https://cdn.discordapp.com/attachments/495580815393292288/533998019201204244/chabot2.png"
        },
        "author":
        {
          "name": "NyahBot",
          "icon_url": "https://cdn.discordapp.com/attachments/495580815393292288/533998019201204244/chabot2.png"
        },
        "fields":
          [
            {
              "name": "Ajouts",
              "value": "•Ajout d'un système de niveau et d'XP complet\n•Ajout du manuel détaillant le fonctionnement des jetons et de l'expérience\n•0.3.1 : Ajout de la commande donation (pour fêter la première version stable du bot)\n•0.3.2 : Ajout de la commande \"NextUpdate\" permettant de suivre les mises à jour prévues dans le futur"
            },
            {
              "name": "Modifications",
              "value": "•Refonte totale de la commande \"token\", qui prend le nom \"profile\", et s'affiche sous forme d'une image\n•Suppression de la commande \"register\", l'entrée dans la base de données est désormais automatique "
            },
            {
              "name": "Corrections",
              "value": "•0.3.1 : Correction de nombreux bugs et optimisation du code\n•0.3.2 : Correction d'une faute mineure"
            }
          ]
      };

      message.channel.send({ "embed": embedUpdate });


}





}