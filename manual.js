module.exports = {

async manual(message) {

  const embedManual = {
        "title": "Comment fonctionne NyahBot ?",
        "description": "Le manuel détaille le fonctionnement de NyahBot concernant les jetons et l'expérience.",
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
              "name": "Apparition des jetons",
              "value": "Un jeton est disponible lors de chaque tranche de 5 minutes. Durant chaque période de temps, un utilisateur envoyant un message possède 20% de chance de faire apparaître le jeton. Si le jeton apparaît, le prochain ne sera disponible que durant la tranche de 5 minutes suivante. De plus, chaque utilisateur n'est compté qu'une seul fois par période. Ainsi, si un joueur n'est pas parvenu à faire apparaître le jeton, ses messages ne pourront plus tenter l'apparition jusqu'à la prochaine période."
            },
            {
              "name": "Définition de la rareté",
              "value": "La chance d'apparition d'un jeton donné est 4 fois inférieur à la chance d'apparition du jeton précédent. Voici les probabilités arrondies :\nCommun : 75%\nAtypique : 18,75%\nRare : 4,7%\nÉpique : 1,2%\nExotique : 0,3%\nLégendaire : 0,07%\nIl est à noter que la rareté est attribuée lors de l'obtention du jeton, et non lors de son apparition."
            },
            {
              "name": "Attribution de l'expérience",
              "value": "Le joueur ayant récupéré le jeton obtient de l'expérience. Le gain est 4 fois plus élevé pour un jeton de rareté supérieure. Notez également que l'utilisateur ayant fait apparaître le jeton gagne également quelques points, dépendant également de la rareté. Les valeurs sont les suivantes, le nombre entre parenthèses désignant l'expérience obtenue pour l'apparition :\nCommun : 5 (+1)\nAtypique : 20 (+2)\nRare : 80 (+3)\nÉpique : 320 (+4)\nExotique : 1280 (+5)\nLégendaire : 5120 (+6)"
            },
            {
              "name": "La montée de niveau",
              "value": "Lorsqu'un joueur obtient suffisamment d'expérience, il monte en niveau. L'expérience nécessaire pour atteindre le niveau suivant croit après chaque montée. Le niveau de départ est 0."
            },
             {
              "name": "À quoi servent les jetons ?",
              "value": "Pour le moment, les jetons ne sont qu'une sorte de collection. Peut-être auront-ils une utilité plus tard ?"
            }
          ]
      };

      message.channel.send({ "embed": embedManual });


}







}