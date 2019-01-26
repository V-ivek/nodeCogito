const express = require('express');
const bodyParser = require('body-parser');
const _ = require('lodash');


//Importing MongoDB connection and models
const { mongoose, ObjectID } = require("./db/mongoose.js");
const { User } = require("./models/user.js");


const port = process.env.PORT || 3000;
var app = express();

app.use(bodyParser())

app.get('/',(req,res) => {  
    res.send("Hello world");
});

//Handling POST login request
app.post("/users", (req, res) => {
    console.log("Users ss",req.body.email,req.body.password)
    var body = _.pick(req.body, ["email","password"]);
    var user = new User(body);
    user.save().then((user) => {
        res.status(200).send("success");
    }).catch((error) => {
        res.status(400).send("error");
    })
})

app.listen(port, () => {
    console.log(`server listening at port ${port}`);
});