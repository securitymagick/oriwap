var createTopic = require('../domain/CreateTopic');
var fs = require('fs');

function readFile(filename) {
    var data = fs.readFileSync(filename, 'utf8');
    var lines = data.split('\n');
    return lines;
}

function generateAllTopics() {
    let mainTopics = readFile('./public/resources/MainTopics.txt');
    let secondaryTopics = readFile('./public/resources/SecondaryTopics.txt');
    let topicModifiers = readFile('./public/resources/TopicModifier.txt');
    let topicModifierWithSecondarys = readFile('./public/resources/TopicModifierWithSecondary.txt');
    var topics = [];
    for (var i = 0; i < mainTopics.length; i++) {
        let mainTopic = mainTopics[i].trim();
        var secondaryTopic = '';
        var topicModifier = '';
        let topic = new createTopic();
        topic.initModel({ mainTopic: mainTopic, secondaryTopic: secondaryTopic, topicModifier: topicModifier });
        topics.push(mainTopic);
        if (mainTopic == 'Cute Cats' || mainTopic == 'Zoo Babies' || mainTopic == 'Precious Puppies' || mainTopic == 'Adorable Babies') {
            secondaryTopic = '';
            for (var j = 0; j < topicModifiers.length; j++) {
                topic.setTopicModifier(topicModifiers[j].trim());
                topics.push(mainTopic + " " + topicModifiers[j].trim());
            }
        } else {
            for (var j = 0; j < secondaryTopics.length; j++) {
                topic.setTopicModifier('');
                topic.setSecondaryTopic(secondaryTopics[j].trim());
                topics.push(mainTopic + ' ' + secondaryTopics[j].trim());
                for (var k = 0; k < topicModifierWithSecondarys.length; k++) {
                    topic.setTopicModifier(topicModifierWithSecondarys[k].trim());
                    topics.push(mainTopic + ' ' + secondaryTopics[j].trim() + ' ' + topicModifierWithSecondarys[k].trim());
                }
            }
        }
    }
  
    return topics;
}
module.exports = generateAllTopics;
