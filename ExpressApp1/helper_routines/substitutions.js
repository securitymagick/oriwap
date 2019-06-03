function getSingular(topic) {
    var singular = topic.replace('ies', 'y');
    singular = singular.replace('ats', 'at');
    singular = singular.replace('bots', 'bot');
    singular = singular.replace('ths', 'th');
    singular = singular.replace('liens', 'lien');
    singular = singular.replace('sters', 'ster');
    singular = singular.replace('ples', 'ple');
    return singular;
}

function substituteTopic(baseTopic, data) {
    var toReturn = data;
    var singularBaseTopic = getSingular(baseTopic);
    toReturn = toReturn.replace('[basetopic]', baseTopic);
    toReturn = toReturn.replace('[singular-basetopic]', singularBaseTopic);
    return toReturn;
}
module.exports = substituteTopic;