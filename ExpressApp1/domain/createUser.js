class User {
    constructor() {
        this.id = null;
        this.username = null;
        this.password = null;
        this.other = null;
        this.isUser = null;
        this.isAdmin = null;
        this.allLowercase = null;
    }

    initModel(data) {
        this.id = data.id;
        this.username = data.username;
        this.password = data.password;
        this.other = data.other;
        this.isUser = data.isUser;
        this.isAdmin = data.isAdmin;
        this.allLowercase = data.allLowercase;
    }

    getId() { return this.id; }

    setId(id) { this.id = id; }

    getUsername() {return this.username; }

    setUsername(username) { this.username = username; }

    getPassword() { return this.password; }

    setPassword(password) { this.password = password; }

    getOther() { return this.other; }

    setOther(other) {
        if (other.length <= 32) {
            this.other = other;
        } else {
            this.other = other.substr(0, 32);
        }
    }

    getIsUser() { return this.isUser; }

    setIsUser(isUser) { this.isUser = isUser; }

    getIsAdmin() { return this.isAdmin; }

    setIsAdmin(isAdmin) { this.isAdmin = isAdmin; }

    getAllLowercase() { return this.allLowercase; }

    setAllLowercase(allLowercase) { this.allLowercase = allLowercase; }

    equals(otherUser) {
        return otherUser.getId() == this.getId()
            && otherUser.getUsername() == this.getUsername()
            && otherUser.getPassword() == this.getPassword()
            && otherUser.getOther() == this.getOther()
            && otherUser.getIsUser() == this.getIsUser()
            && otherUser.getIsAdmin() == this.getIsAdmin()
            && otherUser.getAllLowercase() == this.getAllLowercase();
    }

    copy(otherUser) {
        this.setId(otherUser.getId());
        this.setUsername(otherUser.getUsername());
        this.setPassword(otherUser.getPassword());
        this.setOther(otherUser.getOther());
        this.setIsUser(otherUser.getIsUser());
        this.setIsAdmin(otherUser.getIsAdmin());
        this.setAllLowercase(otherUser.getAllLowercase());
    }

    toString() {
        var usernm = this.getUsername();
        var passwd = this.getPassword();
        var other = this.getOther();

        if (this.getAllLowercase() == 1) {
            usernm = usernm.toLowerCase();
            passwd = passwd.toLowerCase();
            other = other.toLowerCase();
        }
        return "VALUES(" + this.getId() + ", '" + usernm + "', '" + passwd + "', '"
            + other + "', " + this.getIsUser() + ", " + this.getIsAdmin() + ");";
    }

    toHtmlString() {
        var usernm = this.getUsername();
        var passwd = this.getPassword();
        var other = this.getOther();

        if (this.getAllLowercase() == 1) {
            usernm = usernm.toLowerCase();
            passwd = passwd.toLowerCase();
            other = other.toLowerCase();
        }
        //return "test";
        return "<p>(" + this.getId() + ", '" + usernm + "', '" + passwd + "', '"
            + other + "', " + this.getIsUser() + ", " + this.getIsAdmin() + ") (AllLowerCase: "
            + this.getAllLowercase() + ")<button onclick=\"window.location.href ='userGenerate?modify=yes&number="
            + this.getId() +"'\">Modify</button></p>";
    }

    setValue(propertyName, value) {
        if (this.hasOwnProperty(propertyName)) {
            this[propertyName] = value;
        }
    }

    toModifyString() {
        var start = '<br>';
        var middlefront = ':<br><input type="text" name="';
        var middlewarning = ':<br><input type="text" style = "color:red;" name="';

        var middleback = '" value="';
        var end = '">';
        let submitHtml = '<br><br><input type="submit" value="Submit">';
        let contents = '';
        let extra_instructions = '<p style = "color:red;">REALLY THINK TWICE BEFORE EDITING THE ID</p>';

        for (var property in this) {
            if (this.hasOwnProperty(property)) {
                if (property == 'id') {
                    contents = contents + extra_instructions + start + property + middlewarning + property + middleback + this[property] + end;
                } else {
                    contents = contents + start + property + middlefront + property + middleback + this[property] + end;
                }
            }

        }
        return contents + submitHtml;

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
module.exports = User;

/*
let user1 = new User();
user1.initModel({ id: 1, username: 'RickPotter', password: 'WhiteRhino', other: 'white rhino', isUser: 1, isAdmin: 1 });
console.log(user1.toString());                 // 100

let user2 = new User();
user2.initModel({ id: 2, username: 'Elephantus', password: 'Mfaite,aIro.', other: 'Elephant', isUser: 1, isAdmin: 0 });
console.log(user1.equals(user2));
console.log(user2.toString());

let sameAsUser1 = new User({ id: 1, username: 'RickPotter', password: 'WhiteRhino', other: 'white rhino', isUser: 1, isAdmin: 1 });
sameAsUser1.initModel({ id: 1, username: 'RickPotter', password: 'WhiteRhino', other: 'white rhino', isUser: 1, isAdmin: 1 })
console.log(user1.equals(sameAsUser1));       // true

let sameAsUser2 = new User();
console.log(user2.equals(sameAsUser2));       // false

sameAsUser2.fill({ id: 2, username: 'Elephantus', password: 'Mfaite,aIro.', other: 'Elephant', isUser: 1, isAdmin: 0 });
console.log(user2.equals(sameAsUser2)); */