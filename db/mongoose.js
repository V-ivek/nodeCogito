const mongoose = require("mongoose");
const { ObjectID } = require("mongodb");

var atlasUri = "mongodb+srv://cogito:cogitoergosum@clustercogito-fax9k.mongodb.net/Cogito?retryWrites=true";
var localUri = "mongodb://localhost:27017/Cogito"
var MONGODB_URI = "mongodb://heroku_zqns4g7x:kvp6dbgc18lgrn8fg6j5kkq32p@ds127963.mlab.com:27963/heroku_zqns4g7x"
mongoose.Promise = global.Promise;
// mongoose.connect(atlasUri)
mongoose.connect(localUri)
    .then((db) => {
        console.log("Successfully connect to db");})
    .catch((err) => {
        return console.log("error",err);});

module.exports = { mongoose, ObjectID };