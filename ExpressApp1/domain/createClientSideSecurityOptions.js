class ClientSideSecurityOpts {
    constructor() {
        this.passwordMeter = null;
        this.passwordMatch = null;
        this.usernameCheck = null;
        this.xssComments = null;
        this.xssPost = null;
        this.xssPostTitle = null;
    }

    initModel(data) {
        this.passwordMeter = data.passwordMeter;
        this.passwordMatch = data.passwordMatch;
        this.usernameCheck = data.usernameCheck;
        this.xssComments = data.xssComments;
        this.xssPost = data.xssPost;
        this.xssPostTitle = data.xssPostTitle;
    }

    getPasswordMeter() { return this.passwordMeter; }

    setPasswordMeter(passwordMeter) { this.passwordMeter = passwordMeter; }

    getPasswordMatch() { return this.passwordMatch; }

    setPasswordMatch(passwordMatch) { this.passwordMatch = passwordMatch; }

    getUsernameCheck() { return this.usernameCheck; }

    setUsernameCheck(usernameCheck) { this.usernameCheck = usernameCheck; }

    getXssComments() { return this.xssComments; }

    setXssComments(xssComments) { this.xssComments = xssComments; }

    getXssPost() { return this.xssPost; }

    setXssPost(xssPost) { this.xssPost = xssPost; }

    getXssPostTitle() { return this.xssPostTitle; }

    setXssPostTitle(xssPostTitle) { this.xssPostTitle = xssPostTitle; }

    equals(other) {
        return other.getPasswordMeter() == this.getPasswordMeter()
            && other.getPasswordMatch() == this.getPasswordMatch()
            && other.getUsernameCheck() == this.getUsernameCheck()
            && other.getXssComments() == this.getXssComments()
            && other.getXssPost() == this.getXssPost()
            && other.getXssPostTitle() == this.getXssPostTitle();
    }

    copy(other) {
        this.setPasswordMeter(other.getPasswordMeter());
        this.setPasswordMatch(other.getPasswordMatch());
        this.setUsernameCheck(other.getUsernameCheck());
        this.setXssComments(other.getXssComments());
        this.setXssPost(other.getXssPost());
        this.setXssPostTitle(other.getXssPostTitle());
    }

    toString() {
        var start = 'public static final Boolean clientSide';
        var end = ';\n';

        return start + 'PasswordMeter = ' + this.getPasswordMeter() + end
            + start + 'PasswordMatch = ' + this.getPasswordMatch() + end
            + start + 'UsernameCheck = ' + this.getUsernameCheck() + end
            + start + 'XSSComments = ' + this.getXssComments() + end
            + start + 'XSSPost = ' + this.getXssPost() + end
            + start + 'XSSPostTitle = ' + this.getXssPostTitle() + end;
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
module.exports = ClientSideSecurityOpts;