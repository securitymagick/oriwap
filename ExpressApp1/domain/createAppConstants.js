var generateBooleanSiteConstants = require('../routes/generateBooleanSiteConstants');
var generateStringSiteConstants = require('../routes/generateStringSiteConstants');
var generateSiteConstants = require('../routes/generateSiteConstants');
var generateFounder = require('../routes/generateFounder');
var fs = require('fs');

class AppConstants {
    constructor() {
        this.topic = null;
        this.siteConstants = null;
        this.booleanConstants = null;
        this.stringConstants = null;
        this.founder = null;
    }

    initModel(data) {
        this.topic = data.topic;
        this.siteConstants = generateSiteConstants(this.topic);
        this.booleanConstants = generateBooleanSiteConstants();
        this.stringConstants = generateStringSiteConstants();
        this.founder = generateFounder();
    }

    setTopic(topic) {
        this.topic = topic;
        this.siteConstants = generateSiteConstants(this.topic);
        this.booleanConstants = generateBooleanSiteConstants();
        this.stringConstants = generateStringSiteConstants();
        this.founder = generateFounder();
    }

    getTopic() { return this.topic;}

    getCopyRightYear() { return this.siteConstants.getCopyrightYear(); }

    setFounderData(otherFounder) { this.founder.copy(otherFounder); }

    setSiteConstants(other) { this.siteConstants.copy(other); }

    getFounderName() { return this.founder.getFirstname() + this.founder.getLastname(); }

    getFounderYoungAge() { return this.founder.getFounderYoungAge(); }

    getFounderFamousOther() { return this.founder.getFamousName(); }

    getIndexOfNameBooleanConstant(constantName) {
        return this.booleanConstants.getIndexOfName(constantName);
    }

    setBooleanConstantValue(i, constantValue) {
        this.booleanConstants.setConstantValue(i, constantValue);
    }

    setStringConstantValue(i, constantValue) {
        this.stringConstants.setConstantValue(i, constantValue);
    }

    getIndexOfNameStringConstant(constantName) {
        return this.stringConstants.getIndexOfName(constantName);
    }

    toStringBeginning() {
        var packageName = 'package com.securitymagick;\n';
        var className = 'public class AppConstants {\n';
        var constructorDef = '\tprivate AppConstants() {\n\t}\n';

        return packageName + className + constructorDef; 
    }

    toStringEnding() {
        return '}\n';
    }

    toStringFounder() { return this.founder.toString(); }

    toHtmlStringFounder() { return this.founder.toHtmlString(); }

    toModifyStringFounder() { return this.founder.toModifyString();}

    toStringSiteConstants() { return this.siteConstants.toString(); }

    toHtmlStringSiteConstants() { return this.siteConstants.toHtmlString(); }

    toModifyStringSiteConstants() { return this.siteConstants.toModifyString(); }

    toStringBooleanConstants() { return this.booleanConstants.toString(); }

    toHtmlStringBooleanConstants() { return this.booleanConstants.toHtmlString(); }

    toModifyStringBooleanConstants() { return this.booleanConstants.toModifyString(); }

    toStringStringConstants() { return this.stringConstants.toString(); }

    toHtmlStringStringConstants() { return this.stringConstants.toHtmlString(); }

    toModifyStringStringConstants() { return this.stringConstants.toModifyString(); }


    writeToFile(filename) {
        fs.writeFileSync(filename, this.toStringBeginning() + '\n' + this.toStringFounder() + '\n');
        fs.appendFileSync(filename, this.toStringSiteConstants() + '\n');
        fs.appendFileSync(filename, this.toStringBooleanConstants() + '\n');
        fs.appendFileSync(filename, this.toStringStringConstants() + '\n');
    }

    writeFileEnd(filename) {
        fs.appendFileSync(filename, '\n' + this.toStringEnding());
    }
}
module.exports = AppConstants;