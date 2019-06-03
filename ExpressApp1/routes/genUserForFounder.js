var createUser = require('../domain/createUser');

function genFounderUser(founderName, other) {
    let user = new createUser();
    let password = other.replace(/\s/g, '');
    user.initModel({ id: 1, username: founderName, password: password.toLowerCase(), other: other, isUser: 1, isAdmin: 1, allLowercase: 0 });

    return user;
}
module.exports = genFounderUser;