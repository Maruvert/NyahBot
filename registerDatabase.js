module.exports = {


async registerDatabase(collection, user, message) {
    var askRegisterPlayer = user.id;

    const embedIsNotRegistered = {
      "title": "Vous avez bien été enregistré !",
      "description": "Vous pouvez consulter votre progression grâce à la commande :3profile !",
      "color": 26529,
      "author":
      {
        "name": user.username,
        "icon_url": user.displayAvatarURL(),
      }
    };
    message.channel.send({ "embed": embedIsNotRegistered });

    await collection.insertOne({ "playerId": askRegisterPlayer, "nom": user.username, "xp": 0, "niveau": 0, "commun": 0, "atypique": 0, "rare": 0, "epique": 0, "exotique": 0, "legendaire": 0 });

  }


}
