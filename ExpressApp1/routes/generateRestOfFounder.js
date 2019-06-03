var createTopic = require('../domain/CreateTopic');
var createFounderBackground = require('../domain/createFounderBackground');
var randomStuff = require('../helper_routines/getRandomLineOfFile');

function getSpecialFromTopic(mainTopic) {
    var words = mainTopic.split(' ');
    var special = words[words.length - 1].toLowerCase();
    if (mainTopic.toLowerCase() == 'zoo babies') {
        special = randomStuff.getRandomLine('./public/resources/zoobabies.txt') + 's';
    } 
    if (special == 'cats') {
        if (randomStuff.getRandomInt(2) == 1) {
            special = 'stray cats';
        }
    }
    if (special == 'puppies') {
        if (randomStuff.getRandomInt(2) == 1) {
            special = 'stray dogs';
        }
    }
    if (special == 'myths') {
        special = 'cache of objects';
        if (randomStuff.getRandomInt(2) == 1) {
            special = 'statue';
            if (randomStuff.getRandomInt(2) == 1) {
                special = 'ivory statue';
            } else {
                special = 'bronze statue';
            }
        }
    }
    return special;
}

function getDescriptiveFromTopicSpecial(mainTopic) {
    var words = mainTopic.split(' ');
    var descriptive = null;
    if (words.length > 1) {
        descriptive = words[0];
    }
    if (mainTopic.toLowerCase() == 'zoo babies') {
        descriptive = 'baby';
    }
    return descriptive;
}


function generateRestOfFounder(topic) {
    let founderBackground = new createFounderBackground();
    founderBackground.setFounderSpecial(getSpecialFromTopic(topic.getMainTopic()));
    founderBackground.setDescriptiveToSubject(getDescriptiveFromTopicSpecial(topic.getMainTopic()));
    
    founderBackground.setFounderStudied(randomStuff.getRandomLine('./public/resources/FounderStudied.txt'));
    founderBackground.setLocation(randomStuff.getRandomLine('./public/resources/FounderLocation.txt'));
    founderBackground.setSubjectOfSite(topic.getBaseTopic().toLowerCase());

    if (topic.getSecondaryTopic().startsWith('from ') || topic.getTopicModifier().startsWith('for ') || topic.getTopicModifier().startsWith('to ')) {
        founderBackground.setSelfHelp('Yes');
        founderBackground.setAdversity(randomStuff.getRandomLine('./public/resources/Adversity-SelfHelp.txt'));
        founderBackground.setBadResult(randomStuff.getRandomLine('./public/resources/BadResultOfAdversity-SelfHelp.txt'));
        founderBackground.setDescriptiveToSubject(randomStuff.getRandomLine('./public/resources/DescriptiveToSubject-SelfHelp.txt'));
        if (topic.getSecondaryTopic().startsWith('from ')) {
            founderBackground.setFounderSpecial(topic.getSecondaryTopic().substring(5).toLowerCase());
        } 
        if (topic.getTopicModifier().startsWith('for ')) {
            founderBackground.setDescriptiveToSubject(topic.getTopicModifier().substring(4).toLowerCase());
        }
        if (topic.getTopicModifier().startsWith('to ')) {
            founderBackground.setDescriptiveToSubject(topic.getTopicModifier().substring(3).toLowerCase());
        }
    } else {
        founderBackground.setSelfHelp('');
        if (topic.getMainTopic().toLowerCase() == 'temples' || topic.getMainTopic().toLowerCase() == 'myths') {
            founderBackground.setBadResult(randomStuff.getRandomLine('./public/resources/badResultsTemplesMyths.txt'));
            founderBackground.setAdversity(randomStuff.getRandomLine('./public/resources/adversityTemplesMyths.txt'));
        }
    }
    return founderBackground;
}
module.exports = generateRestOfFounder;