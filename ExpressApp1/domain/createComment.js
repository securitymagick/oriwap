class Comment {
    constructor() {
        this.id = null;
        this.username = null;
        this.postNumber = null;
        this.text = null;
    }

    initModel(data) {
        this.id = data.id;
        this.username = data.username;
        this.postNumber = data.postNumber;
        this.text = data.text;
    }

    getId() { return this.id; }

    setId(id) { this.id = id; }

    getUsername() { return this.username; }

    setUsername(username) { this.username = username; }

    getPostNumber() { return this.postNumber; }

    setPostNumber(postNumber) { this.postNumber = postNumber; }

    getText() { return this.text; }

    setText(text) { this.text = text; }


    equals(otherComment) {
        return otherComment.getId() == this.getId()
            && otherComment.getUsername() == this.getUsername()
            && otherComment.getPostNumber() == this.getPostNumber()
            && otherComment.getText() == this.getText();
    }

    toString() {
        return "INSERT INTO comments VALUES(" + this.getId() + ", " + this.getPostNumber() + ", '" + this.getText() + "', '"  + this.getUsername()  + "');";
    }

    toHtmlString() {
        return "<p>(" + this.getId() + ", " + this.getPostNumber() + ", '" + this.getText() + "', '" + this.getUsername()
            + ")<button onclick=\"window.location.href ='userGenerate?modify=yes&number=" + this.getId()
            + "'\">Modify</button></p>";
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
module.exports = Comment;


let c1 = new Comment();
c1.initModel({ id: 1, username: 'RickPotter', postNumber: 1, text: 'This is one awesome red panda.' });
console.log(c1.toString());                 // 100

let c2 = new Comment();
c2.initModel({ id: 3, username: 'Elephantus', postNumber: 2, text: 'Elephants always remember to play with ducks ... hahaha'});
console.log(c1.equals(c2));
console.log(c2.toString());

let sameAsC1 = new Comment({ id: 1, username: 'RickPotter', postNumber: 1,  text: 'This is one awesome red panda.' });
sameAsC1.initModel({ id: 1, username: 'RickPotter', postNumber: 1, text: 'This is one awesome red panda.' });
console.log(c1.equals(sameAsC1));       // true

let sameAsC2 = new Comment();
console.log(c2.equals(sameAsC2));       // false

sameAsC2.fill({id: 3, username: 'Elephantus', postNumber: 2, text: 'Elephants always remember to play with ducks ... hahaha'});
console.log(c2.equals(sameAsC2)); 