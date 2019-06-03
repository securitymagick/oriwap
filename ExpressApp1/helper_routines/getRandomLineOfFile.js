var fs = require('fs');

function getRandomLine(filename) {
    //console.log(filename);
    var data = fs.readFileSync(filename, 'utf8');
    //console.log(data);
    var lines = data.split('\n');
    return lines[Math.floor(Math.random() * lines.length)].trim();
}

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

module.exports = { getRandomLine, getRandomInt };

