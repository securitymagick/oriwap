var genPost = require('./generatePost');
var randomStuff = require('../helper_routines/getRandomLineOfFile');

function generatePosts(users, topic, path) {
    let numberPosts = randomStuff.getRandomInt(4) + 3;
    let postTypes = ['opinion', 'favorite', 'offtopic'];
    var posts = [];

    let welcomePost = genPost(1, users[0], 'welcome', topic, path, '');
    posts.push(welcomePost);

    for (var i = 2; i <= numberPosts; i++) {
        let postTypeNum = randomStuff.getRandomInt(postTypes.length);
        if (i < 5) {
            postTypeNum = i - 2;
        }
        let userNum = randomStuff.getRandomInt(users.length);
        let post = genPost(i, users[userNum], postTypes[postTypeNum], topic, path, welcomePost.getOriginalImage());
        posts.push(post);
    }

    return posts;
}
module.exports = generatePosts;