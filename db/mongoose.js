const mongoose = require("mongoose");
const { ObjectID } = require("mongodb");

var atlasUri = "mongodb+srv://cogito:cogitoergosum@clustercogito-fax9k.mongodb.net/Cogito?retryWrites=true";
var localUri = "mongodb://localhost:27017/Cogito"

mongoose.Promise = global.Promise;
mongoose.connect(atlasUri)
    .then((db) => {
        console.log("Successfully connect to db");})
    .catch((err) => {
        return console.log("error",err);});

module.exports = { mongoose, ObjectID };