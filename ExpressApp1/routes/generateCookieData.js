var createCookieData = require('../domain/createCookieData');
var randomStuff = require('../helper_routines/getRandomLineOfFile');

function generateCookieData() {
    let cookieData = new createCookieData();
    cookieData.setUserCookie(randomStuff.getRandomLine('./public/resources/userCookie.txt'));
    cookieData.setFpCookie(randomStuff.getRandomLine('./public/resources/forgotpasswordCookie.txt'));
    cookieData.setCsrfCookie(randomStuff.getRandomLine('./public/resources/csrfCookie.txt'));
    cookieData.setPermissionsCookie(randomStuff.getRandomLine('./public/resources/permissionsCookie.txt'));
    cookieData.setPermissionsUserVal(randomStuff.getRandomLine('./public/resources/permissionsUserValues.txt'));
    cookieData.setPermissionsAdminVal(randomStuff.getRandomLine('./public/resources/permissionsAdminValues.txt'));
    cookieData.setPermissionsNoneVal(randomStuff.getRandomLine('./public/resources/permissionsNoneValues.txt'));
    cookieData.setPermissionsSeperatorVal(randomStuff.getRandomLine('./public/resources/permissionsSeperatorValues.txt'));
    return cookieData;
}
module.exports = generateCookieData;