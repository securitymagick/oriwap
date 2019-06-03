class Post {
    constructor() {
        this.id = null;
        this.username = null;
        this.title = null;
        this.image = null;
        this.text = null;
        this.originalImage = null;
    }

    initModel(data) {
        this.id = data.id;
        this.username = data.username;
        this.title = data.title;
        this.image = data.image;
        this.text = data.text;
        this.originalImage = data.originalImage; 
    }

    getOriginalImage() { return this.originalImage; }

    setOriginalImage(originalImage) { this.originalImage = originalImage; }

    getId() { return this.id; }

    setId(id) { this.id = id; }

    getUsername() { return this.username; }

    setUsername(username) { this.username = username; }

    getTitle() { return this.title; }

    setTitle(title) { this.title = title; }

    getImage() { return this.image; }

    setImage(image) { this.image = image; }

    getText() { return this.text; }

    setText(text) { this.text = text; }


    equals(otherPost) {
        return otherPost.getId() == this.getId()
            && otherPost.getUsername() == this.getUsername()
            && otherPost.getTitle() == this.getTitle()
            && otherPost.getImage() == this.getImage()
            && otherPost.getText() == this.getText();
    }

    toString() {
        return "INSERT INTO posts VALUES(" + this.getId() + ", '" + this.getTitle() + "', '" + this.getImage() + "', '" + this.getUsername() + "', '" + this.getText() + "');";
    }

    toHtmlString() {
        return "<p>(" + this.getId() + ", '" + this.getTitle() + "', '" + this.getImage() + "', '" + this.getUsername()
            + "', '" + this.getText() + ")<button onclick=\"window.location.href ='userGenerate?modify=yes&number="
            + this.getId() + "'\">Modify</button></p>";
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
module.exports = Post;


let post1 = new Post();
post1.initModel({ id: 1, username: 'RickPotter', title: 'Baby Red Panda Playing', image: 'baby-red-panda-playing.jpg', text: 'This is one awesome red panda.' });
console.log(post1.toString());                 // 100

let post2 = new Post();
post2.initModel({ id: 3, username: 'Elephantus', title: 'Baby Elephant playing with baby ducks!', image: 'baby-elephant-playing-with-ducks.jpg', text: 'Elephants always remember to play with ducks ... hahaha'});
console.log(post1.equals(post2));
console.log(post2.toString());

let sameAsPost1 = new Post({ id: 1, username: 'RickPotter', title: 'Baby Red Panda Playing', image: 'baby-red-panda-playing.jpg', text: 'This is one awesome red panda.' });
sameAsPost1.initModel({ id: 1, username: 'RickPotter', title: 'Baby Red Panda Playing', image: 'baby-red-panda-playing.jpg', text: 'This is one awesome red panda.' });
console.log(post1.equals(sameAsPost1));       // true

let sameAsPost2 = new Post();
console.log(post2.equals(sameAsPost2));       // false

sameAsPost2.fill({id: 3, username: 'Elephantus', title: 'Baby Elephant playing with baby ducks!', image: 'baby-elephant-playing-with-ducks.jpg', text: 'Elephants always remember to play with ducks ... hahaha'});
console.log(post2.equals(sameAsPost2)); 