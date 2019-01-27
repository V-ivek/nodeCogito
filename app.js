const express = require('express');
const bodyParser = require('body-parser');
const _ = require('lodash');
const jwt = require('jsonwebtoken');


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
app.post('/users', (req, res) => {
    var body = _.pick(req.body, ["email","password"]);
    var user = new User(body);

    user.save()
        .then(() => {
          return user.generateAuthToken();
        })
        .then((token) => {
            res.status(200).header('x-auth', token).send(user);
        })
        .catch((error) => {
            res.status(400).send(error);
        })
});

app.get('/users/me', (req, res) => {
    var token = req.header('x-auth');

    User.findByToken(token)
        .then((user) => {
            if (!user) {

            }

            res.send(user);
        }).catch((e) => {
            res.status(401).send();
        })
});

app.listen(port, () => {
    console.log(`server listening at port ${port}`);
});