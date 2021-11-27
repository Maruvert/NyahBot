module.exports = {

async donation(message) {

const embedDonation = {
        "title": "Faire un don",
        "description": "Afin de me soutenir dans mon travail et mes projets, vous pouvez me faire un don sur Ko-fi en suivant ce lien : https://ko-fi.com/catounetmaruvert\nUn grand merci à tous les donateurs !! ^^",
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
      };

      message.channel.send({ "embed": embedDonation });





}

}