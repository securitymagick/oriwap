var createBooleanSiteConstants = require('../domain/createBooleanSiteConstants');
var randomStuff = require('../helper_routines/getRandomLineOfFile');

function getSetting() {
    var setting = 'true';
    if (randomStuff.getRandomInt(2) == 0) {
        setting = 'false';
    }
    return setting;
}

function generateBooleanSiteConstants() {
    let booleanConstants = new createBooleanSiteConstants();
    booleanConstants.setFilename('./public/resources/booleanConstantNames.txt');
    for (var i = 0; i < booleanConstants.getLength(); i++) {
        booleanConstants.setConstantValue(i, getSetting());
    }

    return booleanConstants;
}
module.exports = generateBooleanSiteConstants;