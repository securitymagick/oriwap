var randomStuff = require('../helper_routines/getRandomLineOfFile');
var createPost = require('../domain/createPost');
var fs = require('fs');
var substitute = require('../helper_routines/substitutions');


function getNumberOfImages(path) {
    var files = fs.readdirSync(path);
    return files.length;
}

function getImage(path, lastImage) {
    var files = fs.readdirSync(path);
    
    fileNum = randomStuff.getRandomInt(files.length);
    while (files[fileNum] == lastImage) {
        fileNum = randomStuff.getRandomInt(files.length);
    }

    return files[fileNum];
}

function copyFile(original, newPath, index, mainTopic) {
    var fileExt = original.split('.');
    var newName = mainTopic + '-' + index + '.' + fileExt[2];
    var newLocation = newPath + '/' + newName;
    fs.createReadStream(original).pipe(fs.createWriteStream(newLocation));
    return newName;
}

function substituteDescription(description, data) {
    var toReturn = data;
    toReturn = toReturn.replace('[description]', description);
    return toReturn;
}

function generatePost(index, user, type, topic, copyTo, lastImage) {
    let post = new createPost();
    post.setId(index);
    post.setUsername(user.getUsername());
    var baseTopicPath = './public/resources/images/' + topic.getBaseTopic().toLowerCase().replace(/\s/g, '');
    var path = './public/resources/images/' + topic.getMainTopic().toLowerCase().replace(/\s/g, '');
    if (fs.existsSync(baseTopicPath) && type != 'offtopic') {
        if (getNumberOfImages(baseTopicPath) >= index) {
            path = baseTopicPath;
        }
    }
   
    var imageName = getImage(path, lastImage);
    post.setOriginalImage(imageName);
    var newName = copyFile(path + '/' + imageName, copyTo, index, topic.getMainTopic().toLowerCase().replace(/\s/g, ''));
    post.setImage(newName);
    var nameDescription = imageName.split('.');
    var description = nameDescription[0].replace(/-/g, ' ');
    var title = randomStuff.getRandomLine('./public/resources/titles-' + type + '.txt');
    var postText = randomStuff.getRandomLine('./public/resources/posts-' + type + '.txt');
    if (randomStuff.getRandomInt(2) == 0) {
        title = substitute(topic.getMainTopic(), title);
        postText = substitute(topic.getMainTopic(), postText);
    } else {
        title = substitute(topic.getBaseTopic(), title);
        postText = substitute(topic.getBaseTopic(), postText);
    }
    title = substituteDescription(description, title);
    postText = substituteDescription(description, postText);
    if (user.getAllLowercase() == 1) {
        title = title.toLowerCase();
        postText = postText.toLowerCase();
    }
    post.setTitle(title);
    post.setText(postText);
    return post;
}
module.exports = generatePost;