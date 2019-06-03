var createStringSiteConstants = require('./createStringSiteConstants');
var randomStuff = require('../helper_routines/getRandomLineOfFile');

class SplitSiteConstants {
    constructor() {
        this.filename = null;
        this.stringConstants = new createStringSiteConstants;
        this.fullLines = [];
    }

    initModel(data) {
        this.filename = data.filename;
        this.stringConstants.setFilename(this.filename);
        initFullLinesAndConstants();
    }

    initFullLinesAndConstants() {
        this.fullLines = [];
        for (var i = 0; i < this.stringConstants.getLength(); i++)  {
            var file = './public/resources/' + this.getConstantName(i) + '.txt';
            this.fullLines[i] = randomStuff.getRandomLine(file);
            var theSplit = this.fullLines[i].split(':');
            this.stringConstants.setConstantValue(i, theSplit[0]);
        }
    }

    getFilename() { return this.filename; }

    setFilename(filename) {
        this.filename = filename;
        this.stringConstants.setFilename(this.filename);
        this.initFullLinesAndConstants();
    }

    getConstantName(i) {
        if (i < this.stringConstants.getLength()) {
            return this.stringConstants.getConstantName(i);
        } else {
            return null;
        }
    }

    setConstantName(i, constantName) {
        if (i < this.stringConstants.getLength()) {
            this.stringConstants.setConstantName(i, constantName);
        }
    }

    getConstantValue(i) {
        if (i < this.stringConstants.getLength()) {
            return this.stringConstants.getConstantValue(i);
        } else {
            return null;
        }
    }

    setConstantValue(i, constantValue) {
        if (i < this.stringConstants.getLength()) {
            this.stringConstants.setConstantValue(i, constantValue);
        }
    }

    getLength() { return this.fullLines.length; }

    getFullLine(i) {
        if (i < this.getLength()) {
            return this.fullLines[i];
        } else {
            return null;
        }

    }

    setFullLine(i, fullLineValue) {
        if (i < this.getLength()) {
            this.fullLines[i] = fullLineValue;
        }
    }

    toString() {
        return this.stringConstants.toString();
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
module.exports = SplitSiteConstants;
