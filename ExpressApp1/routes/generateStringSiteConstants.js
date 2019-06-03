var createStringSiteConstants = require('../domain/createStringSiteConstants');
var randomStuff = require('../helper_routines/getRandomLineOfFile');

function getSetting() {
    var setting = 'true';
    if (randomStuff.getRandomInt(2) == 0) {
        setting = 'false';
    }
    return setting;
}

function generateStringSiteConstants() {
    let stringConstants = new createStringSiteConstants();
    stringConstants.setFilename('./public/resources/stringConstantNames.txt');
    for (var i = 0; i < stringConstants.getLength(); i++) {
        var file = './public/resources/' + stringConstants.getConstantName(i) + '.txt';
        stringConstants.setConstantValue(i, randomStuff.getRandomLine(file));
    }

    return stringConstants;
}
module.exports = generateStringSiteConstants;