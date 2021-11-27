module.exports = {

async info(message) {

const embedInfo = {
        "title": "NyahBot",
        "description": "Version 0.3.2 (Bêta)",
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
              "name": "Information générales",
              "value": "NyahBot est un petit bot de jeu, mais les possibilités croitront au fil du temps."
            },
            {
              "name": "Crédits",
              "value": "• Le bot a été développé et mis à jour par Câtounet Maruvert,\n\n• La photo de profil du bot a été dessinée par Cyrio (instagram : @lyric78440),\n\n•Les jetons ont été designés par Câtounet Maruvert."
            }
          ]
      };

      message.channel.send({ "embed": embedInfo });


}



}