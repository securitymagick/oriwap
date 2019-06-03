var createSiteLook = require('../domain/createSiteLook');
var randomStuff = require('../helper_routines/getRandomLineOfFile');
var substitute = require('../helper_routines/substitutions');

function getLabelCols(labelCols, offset) {
    let format = 'col-md-' + labelCols;
    let offsetFormat = '';
    if (offset > 0) {
        offsetFormat = 'col-md-offset-' + offset + ' ';
    }
    return offsetFormat + format;
}

function getGlyphFromMain(mainTopic) {
    var glyph = '';
    if (mainTopic.endsWith(' Cats')) {
        glyph = 'glyphicon-eye-open';
    } else if (mainTopic.endsWith(' Babies')) {
        glyph = 'glyphicon-baby-formula';
    } else if (mainTopic.endsWith(' Puppies')) {
        glyph = 'glyphicon-baby-formula';
    }

    return glyph;
}

function getGlyphFromSecondary(secondaryTopic) {
    var glyph = '';
    if (secondaryTopic == 'Eygptian') {
        glyph = 'glyphicon-triangle-top';
    } else if (secondaryTopic == 'Roman') {
        glyph = 'glyphicon-leaf';
    } else if (secondaryTopic == 'Grecian') {
        glyph = 'glyphicon-fire';
    } else if (secondaryTopic == 'from The Library') {
        glyph = 'glyphicon-book';
    } else if (secondaryTopic.startsWith('from ')) {
        glyph = 'glyphicon-star';
    }
    return glyph;
}

function getPreLogoText(mainTopic) {
    let preText = '';
    if (mainTopic.endsWith(' Cats')) {
        preText = 'CATS';
    } else if (mainTopic.endsWith(' Puppies')) {
        preText = 'PUPPIES';
    } else if (mainTopic == 'Zoo Babies') {
        preText = 'ZOO';
    } else if (mainTopic.endsWith(' Babies')) {
        preText = 'BABIES';
    } else {
        preText = mainTopic.toUpperCase();
    }
    return preText;
}

function generateSiteLook(topic, year) {
    let siteLook = new createSiteLook();
    siteLook.setUrl(topic.toString().replace(/\s/g, '-').toLowerCase() + '-1');
    siteLook.setYear(year);
    siteLook.setTitle(topic.toString());
    siteLook.setFontColor(randomStuff.getRandomLine('./public/resources/colors.txt'));
    siteLook.setMenuCols(randomStuff.getRandomLine('./public/resources/menuFormat.txt'));
    let labelCols = randomStuff.getRandomInt(3) + 4;
    let maxFormCols = 12 - labelCols;
    let formCols = randomStuff.getRandomInt(4) + 5;
    if (formCols > maxFormCols) {
        formCols = maxFormCols;
    }
    let offset = 0;
    // if extra space decide on offset
    if ((labelCols + formCols) < 12) {
        // should there be an offset
        if (randomStuff.getRandomInt(2) == 0) {
            offset = 12 - labelCols - formCols;
        }
    }

    siteLook.setLabelCols(getLabelCols(labelCols, offset));
    siteLook.setFormCols('col-md-' + formCols);
    siteLook.setLogoSize(2 + randomStuff.getRandomInt(2));
    siteLook.setGlyphSize(24 + randomStuff.getRandomInt(9));

    siteLook.setPreLogoText(getPreLogoText(topic.getMainTopic()));
    let glyph1 = getGlyphFromSecondary(topic.getSecondaryTopic());
    let glyph2 = getGlyphFromMain(topic.getMainTopic());
    siteLook.setLogoGlyphOne(glyph1);
    siteLook.setLogoGlyph4(glyph1);
    siteLook.setLogoGlyph2(glyph2);
    siteLook.setLogoGlyph3(glyph2);

    if (randomStuff.getRandomInt(4) == 0) {
        siteLook.setAddWhat('Post New ' + topic.getMainTopic());
    }
    if (randomStuff.getRandomInt(4) == 0) {
        siteLook.setFavorite(substitute('Favorite [singular-basetopic]', topic.getMainTopic()));
    }


    return siteLook;
}
module.exports = generateSiteLook;