var fs = require('fs');

class FounderBackground {
    constructor() {
        this.founderSpecial = null;
        this.adversity = 'societal negligence';
        this.badResult = 'facing starvation';
        this.selfHelp = null;
        this.descriptiveToSubject = null;
        this.location = null;
        this.descriptivePlace = null;
        this.founderStudied = null;
        this.subjectOfSite = null;
    }
    initModel(data) {
        this.founderSpecial = data.founderSpecial;
        this.adversity = data.adversity;
        this.badResult = data.badResult;
        this.selfHelp = data.selfHelp;
        this.descriptiveToSubject = data.descriptiveToSubject;
        this.location = data.location;
        this.descriptivePlace = data.descriptivePlace;
        this.founderStudied = data.founderStudied;
        this.subjectOfSite = data.subjectOfSite;
    }
    getFounderSpecial() { return this.founderSpecial; }

    setFounderSpecial(founderSpecial) { this.founderSpecial = founderSpecial; }

    getAdversity() { return this.adversity; }

    setAdversity(adversity) { this.adversity = adversity; }

    getBadResult() { return this.badResult; }

    setBadResult(badResult) { this.badResult = badResult; }

    getSelfHelp() { return this.selfHelp; }

    setSelfHelp(selfHelp) { this.selfHelp = selfHelp; }

    getDescriptiveToSubject() { return this.descriptiveToSubject; } 

    setDescriptiveToSubject(descriptiveToSubject) { this.descriptiveToSubject = descriptiveToSubject; }

    getLocation() { return this.location; }

    setLocation(location) {
        var items = location.split(':');
        if (items.length > 1) {
            this.location = items[0];
            if (this.descriptiveToSubject == null) {
                this.descriptiveToSubject = items[1];
            }
            if (this.descriptivePlace == null) {
                this.descriptivePlace = items[2];
            }
        } else {
            this.location = location;
        }
    }

    getDescriptivePlace() { return this.descriptivePlace; }

    setDescriptivePlace(descriptivePlace) { this.descriptivePlace = descriptivePlace;}

    getFounderStudied() { return this.founderStudied; }

    setFounderStudied(founderStudied) { this.founderStudied = founderStudied; }

    getSubjectOfSite() { return this.subjectOfSite; }

    setSubjectOfSite(subjectOfSite) { this.subjectOfSite = subjectOfSite; }

    equals(other) {
        return other.getFounderSpecial() == this.getFounderSpecial()
            && other.getAdversity() == this.getAdversity()
            && other.getBadResult() == this.getBadResult()
            && other.getSelfHelp() == this.getSelfHelp()
            && other.getDescriptiveToSubject() == this.getDescriptiveToSubject()
            && other.getLocation() == this.getLocation()
            && other.getDescriptivePlace() == this.getDescriptivePlace()
            && other.getFounderStudied() == this.getFounderStudied()
            && other.getSubjectOfSite() == this.getSubjectOfSite();

    }
    copy(other) {
        this.setFounderSpecial(other.getFounderSpecial());
        this.setAdversity(other.getAdversity());
        this.setBadResult(other.getBadResult());
        this.setSelfHelp(other.getSelfHelp());
        this.setDescriptiveToSubject(other.getDescriptiveToSubject());
        this.setLocation(other.getLocation());
        this.setDescriptivePlace(other.getDescriptivePlace());
        this.setFounderStudied(other.getFounderStudied());
        this.setSubjectOfSite(other.getSubjectOfSite());
    }
    toString() {
        var start = '\tpublic static final String ';
        var end = '";\n';
        return start + 'FounderSpecial ="' + this.getFounderSpecial() + end
            + start + 'Adversity = "' + this.getAdversity() + end
            + start + 'BadResultOfAdversisty ="' + this.getBadResult()+ end
            + start + 'SelfHelp = "' + this.getSelfHelp() + end
            + start + 'DescriptiveToSubject = "' + this.getDescriptiveToSubject() + end
            + start + 'Location ="' + this.getLocation() + end
            + start + 'DescriptivePlace = "' + this.getDescriptivePlace() + end
            + start + 'FounderStudied ="' + this.getFounderStudied() + end
            + start + 'SubjectOfSite ="' + this.getSubjectOfSite() + end;
    }

    toHtmlString() {
        var start = '<p>public static final String ';
        var end = '";</p>';
        return start + 'FounderSpecial ="' + this.getFounderSpecial() + end
            + start + 'Adversity = "' + this.getAdversity() + end
            + start + 'BadResultOfAdversisty ="' + this.getBadResult() + end
            + start + 'SelfHelp = "' + this.getSelfHelp() + end
            + start + 'DescriptiveToSubject = "' + this.getDescriptiveToSubject() + end
            + start + 'Location ="' + this.getLocation() + end
            + start + 'DescriptivePlace = "' + this.getDescriptivePlace() + end
            + start + 'FounderStudied ="' + this.getFounderStudied() + end
            + start + 'SubjectOfSite ="' + this.getSubjectOfSite() + end;
    }

    toModifyString() {
        var start = '<br>';
        var middlefront = ':<br><input type="text" name="';
        var middlewarning = ':<br><input type="text" style = "color:red;" name="';

        var middleback = '" value="';
        var end = '">';
        let submitHtml = '<br><br><input type="submit" value="Submit">';
        let contents = '';

        for (var property in this) {
            if (this.hasOwnProperty(property)) {
                contents = contents + start + property + middlefront + property + middleback + this[property] + end;
            }

        }
        return contents + submitHtml;

    }

    writeToFile(fileAppConstants) {
        fs.appendFileSync(fileAppConstants, this.toString());
    }

    setValue(propertyName, value) {
        if (this.hasOwnProperty(propertyName)) {
            this[propertyName] = value;
        }
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
module.exports = FounderBackground;