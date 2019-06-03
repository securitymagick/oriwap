var createUser = require('../domain/createUser');
var randomStuff = require('../helper_routines/getRandomLineOfFile');
var getOther = require('./getSecretOrOther');

function capitalize(s) {
    if (typeof s !== 'string') return ''
    return s.charAt(0).toUpperCase() + s.slice(1)
}

function generateUser(idNumber, baseTopic) {
    let user = new createUser();
    let password = randomStuff.getRandomLine('./public/resources/passwords.txt');
    let other = getOther(baseTopic);
    let username = other;
    let allLowercase = randomStuff.getRandomInt(2);
    // choose whether username should be a male female name plus number or based on topic
    if (username.includes(' ') || randomStuff.getRandomInt(2) == 0) {
        // choose male or female
        if (randomStuff.getRandomInt(2) == 0) {
            username = randomStuff.getRandomLine('./public/resources/FemaleNames.txt');
        } else {
            username = randomStuff.getRandomLine('./public/resources/MaleNames.txt');
        }
        if (randomStuff.getRandomInt(4) != 0) {
            username = username + randomStuff.getRandomInt(100);
        }
    } else {
        if (randomStuff.getRandomInt(3) == 0) {
            username = 'ILove' + username;
        } else {
            if (username.endsWith('s')) {
                if (randomStuff.getRandomInt(3) == 0) {
                    username += 'Rule';
                } else {
                    username += '4ever';
                }
            }
        } 
        if (randomStuff.getRandomInt(5) == 0) {
            username = username + randomStuff.getRandomInt(1000);
        }
    }
    if (randomStuff.getRandomInt(10) == 0) {
        password = password.toUpperCase();
        password += "!";
    }
    user.initModel({ id: idNumber, username: username, password: password, other: other, isUser: 1, isAdmin: 0, allLowercase: allLowercase });

    return user;
}
module.exports = generateUser;