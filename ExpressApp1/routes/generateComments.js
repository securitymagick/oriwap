var genComment = require('./generateComment');
var randomStuff = require('../helper_routines/getRandomLineOfFile');

function genComments(posts, users) {
    var comments = [];
    var commentNum = 1;
    for (var i = 0; i < posts.length; i++) {
        if (randomStuff.getRandomInt(2) == 1) {
            let comment = genComment(commentNum, posts[i], users);
            comments.push(comment);
            commentNum = commentNum + 1;
            if (randomStuff.getRandomInt(4) == 0) {
                let comment2 = genComment(commentNum, posts[i], users);
                comments.push(comment2);
                commentNum = commentNum + 1;
            }
        }
    }
    return comments;
}
module.exports = genComments;