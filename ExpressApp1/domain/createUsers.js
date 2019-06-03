var writeFile = require('../helper_routines/writeFile');

function getUsersData(users) {
    var data = '';
    for (i = 0; i < users.length; i++) {
        data += 'INSERT INTO users ' + users[i].toString() + '\n';
    }
    return data;
}

function writeUsers(users, path) {
    writeFile(path, 'insert-users.sql', getUsersData(users));
}
module.exports = writeUsers;
