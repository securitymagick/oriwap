var createComment = require('../domain/createComment');
var randomStuff = require('../helper_routines/getRandomLineOfFile');

function genComment(commentNum, post, users) {
    let comment = new createComment();
    comment.setId(commentNum);
    commentText = randomStuff.getRandomLine('./public/resources/comments-default.txt');
    commentText = commentText.replace('[verb]', randomStuff.getRandomLine('./public/resources/comment-verb.txt'));
    commentText = commentText.replace('[adjective]', randomStuff.getRandomLine('./public/resources/comment-adjective.txt'));
    userNum = randomStuff.getRandomInt(users.length);
    while (users[userNum].getUsername() == post.getUsername()) {
        userNum = randomStuff.getRandomInt(users.length);
    }
    comment.setUsername(users[userNum].getUsername());
    comment.setPostNumber(post.getId());

    if (randomStuff.getRandomInt(3) == 1) {
        var toAdd = '!';
        while (randomStuff.getRandomInt(2) == 0) {
            toAdd = toAdd + '!';
        }
        if (randomStuff.getRandomInt(4) == 2) {
            toAdd = '...';
        }
        if (randomStuff.getRandomInt(4) == 0) {
            toAdd = ' :)';
        }
        commentText = commentText + toAdd;
    }
    if (randomStuff.getRandomInt(4) == 1) {
        commentText = commentText.toUpperCase();
    }
    if (users[userNum].getAllLowercase() == 1) {
        commentText = commentText.toLowerCase();
    }
    comment.setText(commentText);
    return comment;
}
module.exports = genComment;