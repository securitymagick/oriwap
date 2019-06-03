var generateUser = require('./generateUser');
var randomStuff = require('../helper_routines/getRandomLineOfFile');
var generateAdmin = require('./generateAdminUser');
var genFounderUser = require('./genUserForFounder');

function generateUsers(baseTopic, founderName, founderOther) {
    var users = [];
    var numUsers = 3 + randomStuff.getRandomInt(3);
    let founder = genFounderUser(founderName, founderOther);

    users.push(founder);

    for (var i = 2; i <= numUsers+1; i++) {
        let user = generateUser(i, baseTopic);
        users.push(user);
    }
    // add a admin user?
    if (randomStuff.getRandomInt(2) == 0) {
        let admin = generateAdmin(numUsers + 2, baseTopic);
        users.push(admin);
    }
    return users;
}
module.exports = generateUsers;