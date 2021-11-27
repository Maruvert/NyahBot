module.exports = {

async help(message, prefix) {


 const embedHelp = {
        "title": "Liste des commandes",
        "description": "NyahBot est actuellement en phase de test. Des changements auront possiblement lieu par la suite. En théorie, aucune réinitialisation de la base de données n'est prévue. N'hésitez pas à donner votre avis sur votre expérience pour aider son créateur à améliorer le contenu !\nLe prefixe actuel est " + prefix,
        "color": 26529,
        "thumbnail":
        {
          "url": "https://cdn.discordapp.com/attachments/495580815393292288/533998019201204244/chabot2.png" //Image en haut à droite.
        },
        "author":
        {
          "name": "NyahBot",
          "icon_url": "https://cdn.discordapp.com/attachments/495580815393292288/533998019201204244/chabot2.png" //Image en haut (profile)
        },
        "fields":
          [
            {
              "name": "Ping",
              "value": "Obtenez le ping de NyahBot."
            },
            {
              "name": "Info",
              "value": "Affiche les informations générales de NyahBot."
            },
            {
              "name": "Update",
              "value": "Affiche les notes de la dernière mise à jour."
            },
            {
              "name": "NextUpdate",
              "value": "Affiche les changements prévus pour les futures mises à jour."
            },
            {
              "name": "Profile",
              "value": "Affiche le profil du joueur."
            },
            {
              "name": "Manual",
              "value": "Détaille le fonctionnement d'apparition des jetons et de l'expérience."
            },
             {
              "name": "Donation",
              "value": "Faites un don sur ma page Ko-fi pour soutenir mon travail ! ^^"
            },
            {
              "name": ":3",
              "value": ":3"
            }
          ]
      };

      message.channel.send({ "embed": embedHelp });





}



}