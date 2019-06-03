var createClientSideOpts = require('../domain/createClientSideSecurityOptions');
var randomStuff = require('../helper_routines/getRandomLineOfFile');

function getSetting() {
    var setting = 'true';
    if (randomStuff.getRandomInt(2) == 0) {
        setting = 'false';
    }
    return setting;
}

function generateClientSideOpts() {
    let clientSide = new createClientSideOpts();
    
    clientSide.setPasswordMeter(getSetting());
    clientSide.setPasswordMatch(getSetting());
    clientSide.setUsernameCheck(getSetting());
    clientSide.setXssComments(getSetting());
    clientSide.setXssPost(getSetting());
    clientSide.setXssPostTitle(getSetting());
    return clientSide;
}
module.exports = generateClientSideOpts;