var createMenuItem = require('../domain/createMenuItem');
var createSplitSiteConstants = require('../domain/createSplitSiteConstants');
var fs = require('fs');
var substitute = require('../helper_routines/substitutions');

function generateItemsForMenu(menu, index, baseTopic, fileAppConstants) {
    var menuItems = [];
    let order = 1;
    var filename = './public/resources/' + menu + 'Menu.txt';
    let splitSiteConstants = new createSplitSiteConstants();
    splitSiteConstants.setFilename(filename);
    console.log(fileAppConstants + ":" + splitSiteConstants.toString());
    fs.appendFileSync(fileAppConstants, splitSiteConstants.toString());
    for (var i = 0; i < splitSiteConstants.getLength(); i++) {
        let item = new createMenuItem();
        var splitItem = splitSiteConstants.getFullLine(i).split(':');
        item.setId(index + order - 1);
        item.setMenu(menu);
        item.setOrder(order);
        item.setUrl(splitItem[0]);
        item.setTitle(splitItem[1]);
        item.setAdditional(substitute(baseTopic, splitItem[2]));
        item.setGlyphicon(splitItem[3]);
        menuItems.push(item);
        order = order + 1;
    }
   
    return menuItems;
}

function generateMenuItems(filename, baseTopic) {
    var menuItems = [];
    let index = 1;
    var data = fs.readFileSync('./public/resources/menu.txt', 'utf8');
    var lines = data.split('\n');
    for (var i = 0; i < lines.length; i++) {
        var generated = generateItemsForMenu(lines[i].trim(), index, baseTopic, filename);
        for (var j = 0; j < generated.length; j++) {
            menuItems.push(generated[j]);
            index = index + 1;
        }
    }
    return menuItems;
}
module.exports = generateMenuItems;