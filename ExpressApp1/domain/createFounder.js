class Founder {
    constructor() {
        this.firstname = 'Rick';
        this.lastname = 'Potter';
        this.famousOther = 'grandfather';
        this.famousName = 'Merryweather Potter';
        this.famousProfession = 'archeology';
        this.famousPronoun = 'he';
        this.famousPossesive = 'his';
        this.founderPronoun = 'he';
        this.founderPossesive = 'his';
        this.founderYoungAge = '13';
    }

    initModel(data) {
        this.firstname = data.firstname;
        this.lastname = data.lastname;
        this.famousOther = data.famousOther;
        this.famousName = data.famousName;
        this.famousProfession = data.famousProfession;
        this.famousPronoun = data.famousPronoun;
        this.famousPossesive = data.famousPossesive;
        this.founderPronoun = data.founderPronoun;
        this.founderPossesive = data.founderPossesive;
        this.founderYoungAge = data.founderYoungAge;
    }

    getFirstname() { return this.firstname; }

    setFirstname(firstname) { this.firstname = firstname; }

    getLastname() { return this.lastname; }

    setLastname(lastname) { this.lastname = lastname; }

    getFamousOther() { return this.famousOther; }

    setFamousOther(famousOther) { this.famousOther = famousOther; }

    getFamousName() { return this.famousName; }

    setFamousName(famousName) { this.famousName = famousName; }

    getFamousProfession() { return this.famousProfession; }

    setFamousProfession(famousProfession) { this.famousProfession = famousProfession; }

    getFamousPronoun() { return this.famousPronoun; }

    setFamousPronoun(famousPronoun) { this.famousPronoun = famousPronoun; }

    getFamousPossesive() { return this.famousPossesive; }

    setFamousPossesive(famousPossesive) { this.famousPossesive = famousPossesive; }

    getFounderPronoun() { return this.founderPronoun; }

    setFounderPronoun(founderPronoun) { this.founderPronoun = founderPronoun; }

    getFounderPossesive() { return this.founderPossesive; }

    setFounderPossesive(founderPossesive) { this.founderPossesive = founderPossesive; }

    getFounderYoungAge() { return this.founderYoungAge; }

    setFounderYoungAge(founderYoungAge) { this.founderYoungAge = founderYoungAge;}

    equals(otherFounder) {
        return otherFounder.getFirstname() == this.getFirstname()
            && otherFounder.getLastname() == this.getLastname()
            && otherFounder.getFamousOther() == this.getFamousOther()
            && otherFounder.getFamousName() == this.getFamousName()
            && otherFounder.getFamousProfession() == this.getFamousProfession()
            && otherFounder.getFamousPossesive() == this.getFamousPossesive()
            && otherFounder.getFamousPronoun() == this.getFamousPronoun()
            && otherFounder.getFounderPossesive() == this.getFounderPossesive()
            && otherFounder.getFounderPronoun() == this.getFounderPronoun()
            && otherFounder.getFounderYoungAge() == this.getFounderYoungAge();
    }

    copy(otherFounder) {
        this.setFirstname(otherFounder.getFirstname());
        this.setLastname(otherFounder.getLastname());
        this.setFamousOther(otherFounder.getFamousOther());
        this.setFamousName(otherFounder.getFamousName());
        this.setFamousProfession(otherFounder.getFamousProfession());
        this.setFamousPossesive(otherFounder.getFamousPossesive());
        this.setFamousPronoun(otherFounder.getFamousPronoun());
        this.setFounderPossesive(otherFounder.getFounderPossesive());
        this.setFounderPronoun(otherFounder.getFounderPronoun());
        this.setFounderYoungAge(otherFounder.getFounderYoungAge());
    }

    toString() {
        var start = '\tpublic static final String ';
        var end = '";\n';
        return start + 'FounderFName = "' + this.getFirstname() + end
            + start + 'FounderLName = "' + this.getLastname() + end
            + start + 'FamousOther = "' + this.getFamousOther() + end
            + start + 'FamousName ="' + this.getFamousName() + end
            + start + 'FamousProfessional = "' + this.getFamousProfession() + end
            + start + 'FamousPossessive = "' + this.getFamousPossesive() + end
            + start + 'FamousPronoun ="' + this.getFamousPronoun() + end
            + start + 'FounderPossessive = "' + this.getFounderPossesive() + end
            + start + 'FounderPronoun ="' + this.getFounderPronoun() + end
            + start + 'FounderYoungAge ="' + this.getFounderYoungAge() + end;
    }

    toHtmlString() {
        var start = '<p>public static final String ';
        var end = '";</p>';
        return start + 'FounderFName = "' + this.getFirstname() + end
            + start + 'FounderLName = "' + this.getLastname() + end
            + start + 'FamousOther = "' + this.getFamousOther() + end
            + start + 'FamousName ="' + this.getFamousName() + end
            + start + 'FamousProfessional = "' + this.getFamousProfession() + end
            + start + 'FamousPossessive = "' + this.getFamousPossesive() + end
            + start + 'FamousPronoun ="' + this.getFamousPronoun() + end
            + start + 'FounderPossessive = "' + this.getFounderPossesive() + end
            + start + 'FounderPronoun ="' + this.getFounderPronoun() + end
            + start + 'FounderYoungAge ="' + this.getFounderYoungAge() + end;
    }

    toModifyString() {
        var start = '<br>';
        var middlefront = ':<br><input type="text" name="';
        var middleback = '" value="';
        var end = '">';
        let submitHtml = '<br><br><input type="submit" value="Submit">';
        return start + 'FounderFName"' + middlefront + 'firstname' + middleback + this.getFirstname() + end
            + start + 'FounderLName"' + middlefront + 'lastname' + middleback + this.getLastname() + end
            + start + 'FamousOther"' + middlefront + 'famousOther' + middleback + this.getFamousOther() + end
            + start + 'FamousName"' + middlefront + 'famousName' + middleback + this.getFamousName() + end
            + start + 'FamousProfessional"' + middlefront + 'famousProfession' + middleback + this.getFamousProfession() + end
            + start + 'FamousPossessive"' + middlefront + 'famousPossesive' + middleback + this.getFamousPossesive() + end
            + start + 'FamousPronoun"' + middlefront + 'famousPronoun' + middleback + this.getFamousPronoun() + end
            + start + 'FounderPossessive"' + middlefront + 'founderPossesive' + middleback + this.getFounderPossesive() + end
            + start + 'FounderPronoun"' + middlefront + 'founderPronoun' + middleback + this.getFounderPronoun() + end
            + start + 'FounderYoungAge"' + middlefront + 'founderYoungAge' + middleback + this.getFounderYoungAge() + end + submitHtml;

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
module.exports = Founder;

let founder1 = new Founder();
founder1.initModel({ firstname: 'Rick', lastname: 'Potter', special: 'white rhino', famousOther: 'grandfather', famousName: 'Merryweather Potter', famousProfession: 'anthropologist', famousPossesive: 'his', famousPronoun: 'he', founderPossesive: 'his', founderPronoun: 'he' });
console.log(founder1.toString());