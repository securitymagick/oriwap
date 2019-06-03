var randomStuff = require('../helper_routines/getRandomLineOfFile');
var createSiteConstants = require('../domain/createSiteConstants');

function generateSiteConstants(siteName) {
    let siteConstants = new createSiteConstants();
    siteConstants.setSiteName(siteName);
    var founded = 2000 + randomStuff.getRandomInt(20);
    var copy = founded + randomStuff.getRandomInt(2019 - founded);
    siteConstants.setFoundedYear(founded);
    siteConstants.setCopyrightYear(copy);
    siteConstants.setAboutLayout(randomStuff.getRandomInt(4));
    var seconds = 300 * randomStuff.getRandomInt(12);
    siteConstants.setFpTokenExpiration(300 + seconds);
    return siteConstants;
}
module.exports = generateSiteConstants;