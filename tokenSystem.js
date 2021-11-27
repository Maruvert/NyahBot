const registerDatabase = require('./registerDatabase.js');
const levelUp = require('./levelUp.js');




module.exports = {

async tokenSystem(client, collection, needToLevelUp, message, tryTokenPlayers) {




    if (!tryTokenPlayers[message.guild.id]) {
      tryTokenPlayers[message.guild.id] = { "gotToken": false, "users": {} };
    }



    if (tryTokenPlayers[message.guild.id].gotToken == false) {

      if (!tryTokenPlayers[message.guild.id].users[message.author.id]) //tryTokenPlayer = dictionnaire, vérifie si la personne a déjà envoyé un message.
      {

        tryTokenPlayers[message.guild.id].users[message.author.id] = true //Si elle n'a pas envoyé de message, change le booléen
        var pourcentage = Math.random() * 100 //Pourcentage pour savoir si le jeton va apparaître

        if (pourcentage <= 20) {
          tryTokenPlayers[message.guild.id].gotToken = true //Un token a spawn, on le note

          const embedToken = {
            "title": "Un jeton est apparu !",
            "description": "Réagissez vite pour le récupérer !",
            "color": 26529
          };
          var messageSent = await message.channel.send({ "embed": embedToken });
          await messageSent.react("🎁");
          const filter = (reaction) => reaction.emoji.name == "🎁"
          var reactionsCollection = await messageSent.awaitReactions(filter, { "max": 1, "time": 10000 }) //Filtre et détecte les réactions gift, une seule personne aura le jeton, 10 secondes de cooldown
          if (reactionsCollection.first()) {
            //Une personne a bien réagie
            var reaction = reactionsCollection.first()
            /*/reaction.users -> reactionUserManager
            reaction.users.cache -> Collection d'utilisateur/*/
            var playerIDToken = reaction.users.cache.last().id //-> L'utilisateur qui a réagit


            var tokenCreate = Math.floor(Math.random() * 4095) + 1
            var userFound = await collection.find({ "playerId": playerIDToken }).toArray()
            if (!(userFound.length == 1)) //L'utilisateur n'est pas dans la base de données
            {

              registerDatabase.registerDatabase(collection, reaction.users.cache.last(), message);

            }

            var userData = await collection.find({ "playerId": playerIDToken }).toArray()
            userData = userData[0]
            var userSpawn = await collection.find({ "playerId": message.author.id }).toArray()
            var userSpawnInDatabase = 0;
            if (userSpawn.length == 1) {
              userSpawnInDatabase = 1;
            }
            userSpawn = userSpawn[0]








            if (tokenCreate >= 1 && tokenCreate <= 3072) {

              userData.commun++;
              userData.xp += 5;
              if (userData.playerId == userSpawn.playerId) {

                userData.xp += 1;

              }

              await collection.updateOne({ "playerId": playerIDToken }, { "$set": { "commun": userData.commun, "xp": userData.xp } })

              if (userSpawnInDatabase && (userData.playerId != userSpawn.playerId)) {

                userSpawn.xp += 1;
                await collection.updateOne({ "playerId": message.author.id }, { "$set": { "xp": userSpawn.xp } })
                levelUp.levelUp(client, collection, needToLevelUp, userSpawn, message);


              }


              levelUp.levelUp(client, collection, userData, message);

              const embedCommun = {
                "title": "Super !",
                "description": "Vous avez obtenu un jeton Commun !",
                "color": 26529,
                "thumbnail":
                {
                  "url": "https://media.discordapp.net/attachments/777923030260514838/777973610614620210/JetonCommun.png"
                },
                "author":
                {
                  "name": client.users.cache.get(playerIDToken).username,
                  "icon_url": client.users.cache.get(playerIDToken).displayAvatarURL(),
                },
                "fields":
                  [
                    {
                      "name": "Expérience",
                      "value": client.users.cache.get(playerIDToken).username + " : XP + 5\n" + message.author.username + " : XP + 1",
                    }
                  ]
              };
              messageSent.edit({ "embed": embedCommun })
            }









            else if (tokenCreate >= 3073 && tokenCreate <= 3840) {

              userData.atypique++;

              userData.xp += 20;
              if (userData.playerId == userSpawn.playerId) {

                userData.xp += 2;

              }

              await collection.updateOne({ "playerId": playerIDToken }, { "$set": { "atypique": userData.atypique, "xp": userData.xp } })

              if (userSpawnInDatabase && (userData.playerId != userSpawn.playerId)) {

                userSpawn.xp += 2;
                await collection.updateOne({ "playerId": message.author.id }, { "$set": { "xp": userSpawn.xp } })
                levelUp.levelUp(client, collection, needToLevelUp, userSpawn, message);


              }

              levelUp.levelUp(client, collection, userData, message);

              const embedAtypique = {
                "title": "Bien joué !",
                "description": "Vous avez obtenu un jeton Atypique !",
                "color": 26529,
                "thumbnail":
                {
                  "url": "https://media.discordapp.net/attachments/777923030260514838/777973647167848488/JetonAtypique.png"
                },
                "author":
                {
                  "name": client.users.cache.get(playerIDToken).username,
                  "icon_url": client.users.cache.get(playerIDToken).displayAvatarURL(),
                },
                "fields":
                  [
                    {
                      "name": "Expérience",
                      "value": client.users.cache.get(playerIDToken).username + " : XP + 20\n" + message.author.username + " : XP + 2",
                    }
                  ]
              };
              messageSent.edit({ "embed": embedAtypique })
            }









            else if (tokenCreate >= 3841 && tokenCreate <= 4032) {

              userData.rare++;

              userData.xp += 80;
              if (userData.playerId == userSpawn.playerId) {

                userData.xp += 3;

              }

              await collection.updateOne({ "playerId": playerIDToken }, { "$set": { "rare": userData.rare, "xp": userData.xp } })

              if (userSpawnInDatabase && (userData.playerId != userSpawn.playerId)) {

                userSpawn.xp += 3;
                await collection.updateOne({ "playerId": message.author.id }, { "$set": { "xp": userSpawn.xp } })
                levelUp.levelUp(client, collection, needToLevelUp, userSpawn, message);


              }

              levelUp.levelUp(client, collection, userData, message);

              const embedRare = {
                "title": "Wow !",
                "description": "Vous avez obtenu un jeton Rare !",
                "color": 26529,
                "thumbnail":
                {
                  "url": "https://media.discordapp.net/attachments/777923030260514838/777973688690933790/JetonRare.png"
                },
                "author":
                {
                  "name": client.users.cache.get(playerIDToken).username,
                  "icon_url": client.users.cache.get(playerIDToken).displayAvatarURL(),
                },
                "fields":
                  [
                    {
                      "name": "Expérience",
                      "value": client.users.cache.get(playerIDToken).username + " : XP + 80\n" + message.author.username + " : XP + 3",
                    }
                  ]
              };
              messageSent.edit({ "embed": embedRare })
            }









            else if (tokenCreate >= 4033 && tokenCreate <= 4080) {
              userData.epique++;

              userData.xp += 320;
              if (userData.playerId == userSpawn.playerId) {

                userData.xp += 4;

              }

              await collection.updateOne({ "playerId": playerIDToken }, { "$set": { "epique": userData.epique, "xp": userData.xp } })

              if (userSpawnInDatabase && (userData.playerId != userSpawn.playerId)) {

                userSpawn.xp += 4;
                await collection.updateOne({ "playerId": message.author.id }, { "$set": { "xp": userSpawn.xp } })
                levelUp.levelUp(client, collection, needToLevelUp, userSpawn, message);


              }

              levelUp.levelUp(client, collection, userData, message);

              const embedEpique = {
                "title": "Félicitations !",
                "description": "Vous avez obtenu un jeton Épique !",
                "color": 26529,
                "thumbnail":
                {
                  "url": "https://media.discordapp.net/attachments/777923030260514838/777973713714413618/JetonEpique.png"
                },
                "author":
                {
                  "name": client.users.cache.get(playerIDToken).username,
                  "icon_url": client.users.cache.get(playerIDToken).displayAvatarURL(),
                },
                "fields":
                  [
                    {
                      "name": "Expérience",
                      "value": client.users.cache.get(playerIDToken).username + " : XP + 320\n" + message.author.username + " : XP + 4",
                    }
                  ]
              };
              messageSent.edit({ "embed": embedEpique })
            }








            else if (tokenCreate >= 4081 && tokenCreate <= 4092) {

              userData.exotique++;

              userData.xp += 1280;
              if (userData.playerId == userSpawn.playerId) {

                userData.xp += 5;

              }

              await collection.updateOne({ "playerId": playerIDToken }, { "$set": { "exotique": userData.exotique, "xp": userData.xp } })

              if (userSpawnInDatabase && (userData.playerId != userSpawn.playerId)) {

                userSpawn.xp += 5;
                await collection.updateOne({ "playerId": message.author.id }, { "$set": { "xp": userSpawn.xp } })
                levelUp.levelUp(client, collection, needToLevelUp, userSpawn, message);


              }

              levelUp.levelUp(client, collection, userData, message);

              const embedExotique = {
                "title": "Fabuleux !",
                "description": "Vous avez obtenu un jeton Exotique !",
                "color": 26529,
                "thumbnail":
                {
                  "url": "https://media.discordapp.net/attachments/777923030260514838/777973729602174996/JetonExotique.png"
                },
                "author":
                {
                  "name": client.users.cache.get(playerIDToken).username,
                  "icon_url": client.users.cache.get(playerIDToken).displayAvatarURL(),
                },
                "fields":
                  [
                    {
                      "name": "Expérience",
                      "value": client.users.cache.get(playerIDToken).username + " : XP + 1280\n" + message.author.username + " : XP + 5",
                    }
                  ]
              };
              messageSent.edit({ "embed": embedExotique })
            }









            else if (tokenCreate >= 4093 && tokenCreate <= 4095) {

              userData.legendaire++;

              userData.xp += 5120;
              if (userData.playerId == userSpawn.playerId) {

                userData.xp += 6;

              }

              await collection.updateOne({ "playerId": playerIDToken }, { "$set": { "legendaire": userData.legendaire, "xp": userData.xp } })

              if (userSpawnInDatabase && (userData.playerId != userSpawn.playerId)) {

                userSpawn.xp += 6;
                await collection.updateOne({ "playerId": message.author.id }, { "$set": { "xp": userSpawn.xp } })
                levelUp.levelUp(client, collection, needToLevelUp, userSpawn, message);


              }

              levelUp.levelUp(client, collection, userData, message);

              const embedLegendaire = {
                "title": "INCROYABLE !!!",
                "description": "Vous venez juste d'obtenir un jeton LÉGENDAIRE !!!",
                "color": 26529,
                "thumbnail":
                {
                  "url": "https://media.discordapp.net/attachments/777923030260514838/777973749957263360/JetonLegendaire.png"
                },
                "author":
                {
                  "name": client.users.cache.get(playerIDToken).username,
                  "icon_url": client.users.cache.get(playerIDToken).displayAvatarURL(),
                },
                "fields":
                  [
                    {
                      "name": "Expérience",
                      "value": client.users.cache.get(playerIDToken).username + " : XP + 5120\n" + message.author.username + " : XP + 6",
                    }
                  ]
              };
              messageSent.edit({ "embed": embedLegendaire })
            }



          }//if (reactionsCollection.first())



          else {
            const embedPerdu = {
              "title": "Personne n'a récupéré le jeton...",
              "description": "Le jeton a été perdu...",
              "color": 26529,
            };
            messageSent.edit({ "embed": embedPerdu })
          }


        }//if (pourcentage <= 20)

      }//

    }//if (!tryTokenPlayers[message.guild.id].users[message.author.id])

}



}