var fs = require('fs');



function createTemp(path, url, title) {
    var original = './public/resources/pom/pom-start.xml';
    var data = fs.readFileSync(original, 'utf8');
    data = data.replace('[URL]', url);
    data = data.replace('[TITLE]', title);
    var newLocation = path + 'pom.xml';
    fs.writeFileSync(newLocation, data);
    return newLocation;
}

function genPom(path, url, title) {
    var urlToUse = url.substr(0, url.length - 2);
    var outputLocation = createTemp(path, urlToUse, title);
    var endOfFile = './public/resources/pom/pom.xml';
  
    var stream = fs.createWriteStream('myFile.txt', { flags: 'a' });
    fs.createReadStream(endOfFile).pipe(fs.createWriteStream(outputLocation, { flags: 'a' }));
   
}
module.exports = genPom;