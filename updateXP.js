module.exports = {


async updateXP(client, collection, needToLevelUp, message) {


var userData = await collection.find().toArray();
userData.forEach((elem) => {

  console.log(elem);
})


}




 }