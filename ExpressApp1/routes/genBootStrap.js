var fs = require('fs');
var randomStuff = require('../helper_routines/getRandomLineOfFile');

class BootStrapFile {
    constructor() {
        this.newPath = null;
        this.chosenFile = null;
    }
    initModel(data) {
        this.newPath = data.newPath;
        this.chosenFile = data.chosenFile;
    }
    getNewPath() { return this.newPath; }

    setNewPath(newPath) {
        this.newPath = newPath;
        if (!newPath.endsWith('/')) {
            this.newPath = this.newPath + '/';
        }
    }

    getChosenFile() { return this.chosenFile; }

    setChosenFile(chosenFile) {
        this.chosenFile = chosenFile;
    }

    randomChoice() {
        this.chosenFile = randomStuff.getRandomInt(12);
    }

    toString() {
        return "outputTo:" + this.getNewPath() + " chosenFile:" + this.getChosenFile();
    }

    copyFile() {
        var original = './public/resources/bootstrap-options/' + this.getChosenFile() + '/bootstrap.min.css';
        var newLocation = this.getNewPath() + 'bootstrap.min.css';
        fs.createReadStream(original).pipe(fs.createWriteStream(newLocation));
    }

    fill(newFields) {
        for (let field in newFields) {
            if (this.hasOwnProperty(field) && newFields.hasOwnProperty(field)) {
                if (this[field] !== 'undefined') {
                    this[field] = newFields[field];
                }
            }
        }
    };

}
module.exports = BootStrapFile;
