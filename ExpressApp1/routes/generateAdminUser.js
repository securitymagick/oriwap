var createUser = require('../domain/createUser');
var randomStuff = require('../helper_routines/getRandomLineOfFile');
var getOther = require('./getSecretOrOther');

function generateAdminUser(idNumber, baseTopic) {
    let admin = new createUser();
    let username = 'admin';
    let password = 'admin123';
    let other = getOther(baseTopic);
    if (randomStuff.getRandomInt(5) == 3) {
        password = 'admin';
    } else if (randomStuff.getRandomInt(10) == 1) {
        password = 'P@$$w0rd';
    } else if (randomStuff.getRandomInt(6) == 2) {
        password = 'password1234';
    }
    if (randomStuff.getRandomInt(10) == 1) {
        username = 'Bob';
        if (randomStuff.getRandomInt(2) == 0) {
            password = 'trustno1';
        }
    } else if (randomStuff.getRandomInt(5) == 2) {
        username = 'root';
        if (randomStuff.getRandomInt(2) == 0) {
            password = 'Stronglongpassword!';
        }
    }
    admin.initModel({ id: idNumber, username: username, password: password, other: other, isUser: 1, isAdmin: 1, allLowercase: 0 });
    return admin;
}
module.exports = generateAdminUser;

let admin1 = generateAdminUser(2, 'Pandorica');
console.log(admin1.toString());