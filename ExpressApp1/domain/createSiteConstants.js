class SiteConstants {
    constructor() {
        this.siteName = null;
        this.foundedYear = null;
        this.copyrightYear = null;
        this.aboutLayout = null;
        this.fpTokenExpiration = null;
    }

    initModel(data) {
        this.siteName = data.siteName;
        this.foundedYear = data.foundedYear;
        this.copyrightYear = data.copyrightYear;
        this.aboutLayout = data.aboutLayout;
        this.fpTokenExpiration = data.fpTokenExpiration;
    }

    getSiteName() { return this.siteName; }

    setSiteName(siteName) { this.siteName = siteName; }

    getFoundedYear() { return this.foundedYear; }

    setFoundedYear(foundedYear) { this.foundedYear = foundedYear; }

    getCopyrightYear() { return this.copyrightYear; }

    setCopyrightYear(copyrightYear) { this.copyrightYear = copyrightYear; }

    getAboutLayout() { return this.aboutLayout; }

    setAboutLayout(aboutLayout) {
        if (aboutLayout >= 0 && aboutLayout <= 3) {
            this.aboutLayout = aboutLayout;
        }
    }

    getFpTokenExpiration() { return this.fpTokenExpiration; }

    setFpTokenExpiration(fpTokenExpiration) { this.fpTokenExpiration = fpTokenExpiration; }


    equals(other) {
        return other.getSiteName() == this.getSiteName()
            && other.getFoundedYear() == this.getFoundedYear()
            && other.getCopyrightYear() == this.getCopyrightYear()
            && other.getAboutLayout() == this.getAboutLayout()
            && other.getFpTokenExpiration() == this.getFpTokenExpiration();
    }

    copy(other) {
        this.setSiteName(other.getSiteName());
        this.setFoundedYear(other.getFoundedYear());
        this.setCopyrightYear(other.getCopyrightYear());
        this.setAboutLayout(other.getAboutLayout());
        this.setFpTokenExpiration(other.getFpTokenExpiration());
    }

    toString() {
        var startStr = '\tpublic static final String ';
        var endStr = '";\n';
        var startInt = '\tpublic static final ';
        var endInt = ';\n';

        return startStr + 'SiteName = "' + this.getSiteName() + endStr
            + startStr + 'FoundedYear = "' + this.getFoundedYear() + endStr
            + startStr + 'CopyRightYear = "' + this.getCopyrightYear() + endStr
            + startInt + 'Integer AboutLayout = ' + this.getAboutLayout() + endInt
            + startInt + 'Long FORGOT_PASSWORD_TOKEN_EXPIRATION_IN_SECONDS = ' + this.getFpTokenExpiration() + 'L' + endInt;
    }

    toHtmlString() {
        var startStr = '<p>public static final String ';
        var endStr = '";</p>';
        var startInt = '<p>public static final ';
        var endInt = ';</p>';

        return startStr + 'SiteName = "' + this.getSiteName() + endStr
            + startStr + 'FoundedYear = "' + this.getFoundedYear() + endStr
            + startStr + 'CopyRightYear = "' + this.getCopyrightYear() + endStr
            + startInt + 'Integer AboutLayout = ' + this.getAboutLayout() + endInt
            + startInt + 'Long FORGOT_PASSWORD_TOKEN_EXPIRATION_IN_SECONDS = ' + this.getFpTokenExpiration() + 'L' + endInt;
    }

    toModifyString() {
        var start = '<br>';
        var middlefront = ':<br><input type="text" name="';
        var middlewarning = ':<br><input type="text" style = "color:red;" name="';
        
        var middleback = '" value="';
        var end = '">';
        let submitHtml = '<br><br><input type="submit" value="Submit">';

        return start + 'SiteName' + middlewarning + 'siteName' + middleback + this.getSiteName() + end
            + start + 'FoundedYear' + middlefront + 'foundedYear' + middleback + this.getFoundedYear() + end
            + start + 'CopyRightYear' + middlefront + 'copyRightYear' + middleback + this.getCopyrightYear() + end
            + start + 'Integer 0:3 AboutLayout' + middlefront + 'aboutLayout' + middleback + this.getAboutLayout() + end
            + start + 'Long FORGOT_PASSWORD_TOKEN_EXPIRATION_IN_SECONDS' + middlefront + 'fpTokenExpiration' + middleback + this.getFpTokenExpiration() + end
            + submitHtml;

        
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
module.exports = SiteConstants;