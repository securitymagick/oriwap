var randomStuff = require('../helper_routines/getRandomLineOfFile');
var substitute = require('../helper_routines/substitutions');
var fs = require('fs');


function getSecretOrOther(baseTopic) {
    var filename = './public/resources/' + baseTopic.replace(/\s/g, '') + '.txt';
    var other = baseTopic; 
    if (fs.existsSync(filename)) {
        other = randomStuff.getRandomLine(filename);
    } else {
        other = substitute(baseTopic, randomStuff.getRandomLine('./public/resources/secretAnswer.txt'));
    }
    return other;
}
module.exports = getSecretOrOther;