var fs = require('fs');

class StringSiteConstants {
    constructor() {
        this.filename = null;
        this.constantNames = [];
        this.constantValues = [];
    }

    initModel(data) {
        this.filename = data.filename;
        this.initConstantNamesValues();
    }

    initConstantNamesValues() {
        this.constantNames = [];
        this.constantValues = [];
        var data = fs.readFileSync(this.getFilename(), 'utf8');
        var lines = data.split('\n');
        for (var i = 0; i < lines.length; i++) {
            this.constantNames.push(lines[i].trim());
            this.constantValues.push('data');
        }
    }

    getFilename() { return this.filename; }

    setFilename(filename) {
        this.filename = filename;
        this.initConstantNamesValues();
    }

    getConstantName(i) {
        if (i < this.constantNames.length) {
            return this.constantNames[i];
        } else {
            return null;
        }
    }

    setConstantName(i, constantName) {
        if (i < this.constantNames.length) {
            this.constantNames[i] = constantName;
        }
    }

    getConstantValue(i) {
        if (i < this.constantValues.length) {
            return this.constantValues[i];
        } else {
            return null;
        }
    }

    setConstantValue(i, constantValue) {
        if (i < this.constantValues.length) {
            this.constantValues[i] = constantValue;
        }
    }

    getIndexOfName(constantName) {
        var index = null;
        for (var i = 0; i < this.constantNames.length; i++) {
            if (this.getConstantName(i) == constantName) {
                index = i;
            }
        }
        return index;
    }

    getLength() { return this.constantNames.length; }

    toString() {
        var start = '\tpublic static final String ';
        var end = '";\n';

        var constants = '';
        for (var i = 0; i < this.constantNames.length; i++) {
            constants += start + this.getConstantName(i) + ' = "' + this.getConstantValue(i) + end;
        }
        return constants;
    }

    toHtmlString() {
        var start = '<p>public static final String ';
        var end = '";</p>';

        var constants = '';
        for (var i = 0; i < this.constantNames.length; i++) {
            constants += start + this.getConstantName(i) + ' = "' + this.getConstantValue(i) + end;
        }
        return constants;
    }

    toModifyString() {
        var start = '<br>';
        var middlefront = ':<br><input type="text" name="';
        var middleback = '" value="';
        var end = '">';
        let submitHtml = '<br><br><input type="submit" value="Submit">';
        var constants = '';
        for (var i = 0; i < this.constantNames.length; i++) {
            constants += start + this.getConstantName(i) + middlefront + this.getConstantName(i) + middleback + this.getConstantValue(i) + end;
        }
        return constants + submitHtml;
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
module.exports = StringSiteConstants;
