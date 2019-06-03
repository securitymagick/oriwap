'use strict';
var express = require('express');
var createUser = require('../domain/createUser');
var randomStuff = require('../helper_routines/getRandomLineOfFile');

var router = express.Router();


/* GET users listing. */
router.get('/', function (req, res) {
    let user = new createUser();
    let username = randomStuff.getRandomLine('./public/resources/userNames.txt');
    console.log(username);
    let userpassword = randomStuff.getRandomLine('./public/resources/passwords.txt');
    console.log(userpassword);
    user.initModel({ id: 1, username: username, password: userpassword, other: 'white rhino', isUser: 1, isAdmin: 1 });
    console.log(user.toString());                 // 100
    res.send('respond with a resource: ' + user.toString());
});

module.exports = router;
