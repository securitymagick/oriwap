var randomStuff = require('../helper_routines/getRandomLineOfFile');
var createTopic = require('../domain/CreateTopic');


function generateTopic() {
    let mainTopic = randomStuff.getRandomLine('./public/resources/MainTopics.txt').trim();
    let secondaryTopic = randomStuff.getRandomLine('./public/resources/SecondaryTopics.txt').trim();
    let topicModifier = randomStuff.getRandomLine('./public/resources/TopicModifier.txt').trim();
    let topicModifierWithSecondary = randomStuff.getRandomLine('./public/resources/TopicModifierWithSecondary.txt').trim();
    if (mainTopic == 'Cute Cats' || mainTopic == 'Zoo Babies' || mainTopic == 'Precious Puppies' || mainTopic == 'Adorable Babies') {
        secondaryTopic = '';
    }
    if (mainTopic == 'Temple Cats' && secondaryTopic.startsWith('from ')) {
        secondaryTopic = '';
    }
    if (randomStuff.getRandomInt(8) != 0) {
        secondaryTopic = '';
    } 
    if (secondaryTopic != '') {
        topicModifier = topicModifierWithSecondary;
        if (randomStuff.getRandomInt(3) != 0) {
            topicModifier = '';
        } 
    }
    let topic = new createTopic();
    topic.initModel({ mainTopic: mainTopic, secondaryTopic: secondaryTopic, topicModifier: topicModifier });
    console.log(mainTopic + ":" + secondaryTopic + ":" + topicModifier);
    return topic;
}
module.exports = generateTopic;
