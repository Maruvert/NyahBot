module.exports = {



 async levelUp(client, collection, needToLevelUp, userData, message) {

   var needToLevelUp = parseInt(needToLevelUp);
   console.log("NTLU = " + needToLevelUp);

    if (userData.xp > needToLevelUp) {

      var userWhoLevelUp = client.users.cache.get(userData.playerId);
      var userLevelBefore = userData.niveau; //Niveau avant le gain

      while (userData.xp > needToLevelUp) {
        userData.xp -= needToLevelUp;
        userData.niveau += 1;
        await collection.updateOne({ "playerId": userData.playerId }, { "$set": { "niveau": userData.niveau, "xp": userData.xp } })

        var userLevelAfter = userData.niveau; //Niveau après le gain


      }
      const embedLevelUp = {
        "title": "Niveau suivant !",
        "description": "Super, vous montez au niveau supérieur !\n" +
          userLevelBefore + " -----> " + userLevelAfter,
        "color": 26529,
        "thumbnail":
        {
          "url": userWhoLevelUp.displayAvatarURL()
        },
        "author":
        {
          "name": userWhoLevelUp.username,
          "icon_url": userWhoLevelUp.displayAvatarURL()
        }
      };

      message.channel.send({ "embed": embedLevelUp });

    }
  }



}