var fs = require('fs');

function writeFile(path, filename, data) {
    fs.writeFileSync(path + filename, data);
}
module.exports = writeFile;