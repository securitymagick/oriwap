var createAdminDB = require('../domain/createAdminDatabaseEntry');
var writeFile = require('../helper_routines/writeFile');

function genAdminDBFile(path, url) {
    let adminEntry = new createAdminDB();
    adminEntry.setId(1);
    adminEntry.setName('uploadDirectory');
    adminEntry.setValue('C:\\Users\\NTISNS01\\Desktop\\etc\\Demo\\Tools\\apache-tomcat-8.0.33\\webapps\\'+ url + '\\resources\\core\\images');
    writeFile(path, 'insert-admin.sql', adminEntry.toString());
}
module.exports = genAdminDBFile;