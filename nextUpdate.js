module.exports = {

async nextUpdate(message) {


const embedNextUpdate = {
        "title": "Changements prévus pour les mises à jour à suivre",
        "description": "Les ajouts, Modifications et corrections prévus pour les mises à jour suivantes sont décris ci-dessous :",
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
              "value": "•Possibilité de définir un salon précis d'apparition pour les jetons"
            },
            {
              "name": "Modifications",
              "value": "•Refonte possible du système d'XP, la montée sera plus rapide"
            },
            {
              "name": "Corrections",
              "value": "•Correction prévue d'un bug de récupération de jeton dans certains cas précis"
            }
          ]
      };

      message.channel.send({ "embed": embedNextUpdate });


}





}