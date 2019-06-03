var createFounder = require('../domain/createFounder');
var randomStuff = require('../helper_routines/getRandomLineOfFile');


function generateFounder() {
    let founder = new createFounder();

    if (randomStuff.getRandomInt(2) != 0) {
        founder.setFounderPossesive('his');
        founder.setFounderPronoun('he');
        founder.setFirstname(randomStuff.getRandomLine('./public/resources/MaleNames.txt').trim());
    } else {
        founder.setFounderPossesive('her');
        founder.setFounderPronoun('she');
        founder.setFirstname(randomStuff.getRandomLine('./public/resources/FemaleNames.txt').trim());
    }
    founder.setLastname(randomStuff.getRandomLine('./public/resources/Surnames.txt').trim());

    if (randomStuff.getRandomInt(2) != 0) {
        founder.setFamousPossesive('his');
        founder.setFamousPronoun('he');
        founder.setFamousName(randomStuff.getRandomLine('./public/resources/MaleNames.txt').trim() + " " + founder.getLastname());
        founder.setFamousOther(randomStuff.getRandomLine('./public/resources/MaleFamily.txt').trim());
}   else {
        founder.setFamousPossesive('her');
        founder.setFamousPronoun('she');
        founder.setFamousName(randomStuff.getRandomLine('./public/resources/FemaleNames.txt').trim() + " " + founder.getLastname());
        founder.setFamousOther(randomStuff.getRandomLine('./public/resources/FemaleFamily.txt').trim());
    }
    founder.setFamousProfession(randomStuff.getRandomLine('./public/resources/professions.txt').trim());
    founder.setFounderYoungAge(8 + randomStuff.getRandomInt(8));
    return founder;
}
module.exports = generateFounder;

console.log(generateFounder().toString());
