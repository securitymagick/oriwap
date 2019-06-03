'use strict';
var express = require('express');
var generateTopic = require('./generateTopic');
var genAppConstants = require('../domain/createAppConstants');
var genSiteLook = require('./generateSiteLook');
var writeFile = require('../helper_routines/writeFile');
var genRestFounder = require('./generateRestOfFounder');
var generateUsers = require('./generateUsers');
var writeUsers = require('../domain/createUsers');
var genPom = require('./generatePom');
var genPosts = require('./generatePosts');
var genComments = require('./generateComments');
var genMenu = require('./generateMenuItem');
var createBootStrap = require('./genBootStrap');
var genAdminDBFile = require('./genAdminDBFile');
var createFounder = require('../domain/createFounder');
var createSiteConstants = require('../domain/createSiteConstants');

var router = express.Router();
let page = 0;
let topic = generateTopic();
let appConstants = new genAppConstants();
let siteLook = null;
let founderBackground = null;
let location = '/var/temp/';
let users = null;
let menuItems = null;
let posts = null;
let comments = null;
let bootStrapFile = new createBootStrap();

function modifyFromArray(page, number) {
    let form_start = '<p style = "color:red;">Any red inputs could cause problems or were generated using previously approved data and thus could cause inconsistancies. </p><form action=\'userGenerate?number='+ number + '\' method=\'post\'>';
    let form_end = '</form>';

    if (page < 8) {
        return modifyItem(page);
    }
    if (page == 8) {
        return form_start + users[number-1].toModifyString() + form_end;
    }
    if (page == 9) {
        return form_start + posts[number-1].toModifyString() + form_end;
    }
    if (page == 10) {
        return form_start + comments[number-1].toModifyString() + form_end;
    }
}

function modifyItem(page) {
    let form_start = '<p style = "color:red;">Any red inputs could cause problems or were generated using previously approved data and thus could cause inconsistancies. </p><form action=\'userGenerate\' method=\'post\'>';
    let form_end = '</form>';
    if (page == 1) {
        return form_start + topic.toModifyString() + form_end;
    }
    if (page == 2) {
        return form_start + appConstants.toModifyStringFounder() + form_end;
    }
    if (page == 3) {
        return form_start + appConstants.toModifyStringSiteConstants() + form_end;
    }
    if (page == 4) {
        return form_start + appConstants.toModifyStringBooleanConstants() + form_end;
    }
    if (page == 5) {
        return form_start + appConstants.toModifyStringStringConstants() + form_end;
    }
    if (page == 6) {
        return form_start + siteLook.toModifyString() + form_end; 
    }
    if (page == 7) {
        return form_start + founderBackground.toModifyString() + form_end;
    }
}

router.post('/', function (req, res) {
    let continue_button = '<button onclick="window.location.href=\'userGenerate\'">Continue</button>';
    let continue_url = '<p>' + continue_button + '<button onclick = "window.location.href=\'userGenerate?modify=yes\'" > Modify</button></p > ';
    let header = '<p><h2>Modifed</h2></p>';
    if (page == 1) {
        topic.setMainTopic(req.body.mainTopic);
        topic.setSecondaryTopic(req.body.secondaryTopic);
        topic.setTopicModifier(req.body.topicModifier);
        topic.setTopic();
        res.send(header + '<p>' + topic.toString() + '</p>' + continue_url);
    }
    if (page == 2) {    
        let founderUpdated = new createFounder();
        founderUpdated.setFirstname(req.body.firstname);
        founderUpdated.setLastname(req.body.lastname);
        founderUpdated.setFamousOther(req.body.famousOther);
        founderUpdated.setFamousName(req.body.famousName);
        founderUpdated.setFamousProfession(req.body.famousProfession);
        founderUpdated.setFamousPossesive(req.body.famousPossesive);
        founderUpdated.setFamousPronoun(req.body.famousPronoun);
        founderUpdated.setFounderPossesive(req.body.founderPossesive);
        founderUpdated.setFounderPronoun(req.body.founderPronoun);
        founderUpdated.setFounderYoungAge(req.body.founderYoungAge);
        appConstants.setFounderData(founderUpdated);
        res.send(header + '<p>' + appConstants.toHtmlStringFounder() + '</p>' + continue_url);
    }
    if (page == 3) {
        let siteConstantsUpdated = new createSiteConstants();
        siteConstantsUpdated.setSiteName(req.body.siteName);
        siteConstantsUpdated.setFoundedYear(req.body.foundedYear);
        siteConstantsUpdated.setCopyrightYear(req.body.copyRightYear);
        siteConstantsUpdated.setAboutLayout(req.body.aboutLayout);
        siteConstantsUpdated.setFpTokenExpiration(req.body.fpTokenExpiration);
        appConstants.setSiteConstants(siteConstantsUpdated);
        res.send(header + '<p>' + appConstants.toHtmlStringSiteConstants() + '</p>' + continue_url);
    }
    if (page == 4) {
        for (var item in req.body) {
            var index = appConstants.getIndexOfNameBooleanConstant(item);
            appConstants.setBooleanConstantValue(index, req.body[item]);
        }
        res.send(header + '<p>' + appConstants.toHtmlStringBooleanConstants() + '</p>' + continue_url);
    }
    if (page == 5) {
        for (var item in req.body) {
            var index = appConstants.getIndexOfNameStringConstant(item);
            appConstants.setStringConstantValue(index, req.body[item]);
        }
        res.send(header + '<p>' + appConstants.toHtmlStringStringConstants() + '</p>' + continue_url);

    }
    if (page == 6) {
        for (var item in req.body) {
            siteLook.setValue(item, req.body[item]);
        }
        res.send(header + '<p>' + siteLook.toString() + '</p>' + continue_url);
    }
    if (page == 7) {
        for (var item in req.body) {
            founderBackground.setValue(item, req.body[item]);
        }
        res.send(header + '<p>' + founderBackground.toHtmlString() + '</p>' + continue_url);
    }
    if (page == 8) {
        for (var item in req.body) {
            users[req.query.number-1].setValue(item, req.body[item]);
        }
        var data = '';
        for (i = 0; i < users.length; i++) {
            data += users[i].toHtmlString();
        }
        res.send(header + '<p>' + data + '</p><p>' + continue_button + '</p>');
    }
    if (page == 9) {
        for (var item in req.body) {
            posts[req.query.number-1].setValue(item, req.body[item]);
        }
        var data = '';
        for (i = 0; i < posts.length; i++) {
            data += posts[i].toHtmlString();
        }
        res.send(header + '<p>' + data + '</p><p>' + continue_button + '</p>');
    }
    if (page == 10) {
        for (var item in req.body) {
            comments[req.query.number-1].setValue(item, req.body[item]);
        }
        var data = '';
        for (i = 0; i < comments.length; i++) {
            data += comments[i].toHtmlString();
        }
        res.send(header + '<p>' + data + '</p><p>' + continue_button + '</p>');
    }
    res.send(header + continue_url + " Page: " + page);
});

/ * GET home page. * /
router.get('/', function (req, res) {
    let header = '<p><h2>User Generate Page: ' +  page + '</h2></p>';
    let continue_button = '<button onclick="window.location.href=\'userGenerate\'">Continue</button>';
    let continue_url ='<p>'+ continue_button +'<button onclick = "window.location.href=\'userGenerate?modify=yes\'" > Modify</button></p > ';
    var data = '';

    //let continue_url = '<p><a href=\'userGenerate\'>continue</a> or <a href=\'userGenerate?modify=yes\'>modify</a></p>';
    let location_html = '<p>Location to write to is: ' + location + '</p><p>Please set the loc parameter if you want to change it</p>';
    if (req.query.modify == 'yes' && req.query.number !== 'undefined') {
        res.send(modifyFromArray(page, req.query.number));
    } else if (req.query.modify == 'yes') {
        res.send(modifyItem(page));
    } else if (req.query.loc == null && page == 0) {
        location_html = '<p style="color:red;">Please set the loc parameter with location to write files.</p>';
        let form_start = '<p style = "color:red;">Please enter a location</p><form action=\'userGenerate\' method=\'get\'>';
        let form_middle = '<p>Location: <input type="text" name="loc" value="' + location + '">';
        let form_end = '<br><br><input type="submit" value="Submit"></form>';
        res.send(location_html + form_start + form_middle + form_end);
    } else {
        page = page + 1;
    }
    if (req.query.loc != null && page <= 8) {
        location = req.query.loc;
        location_html = '<p>Location to write to is: ' + location + '</p>';
    }
    
    if (page == 1) {
        res.send(header +'<p>' + topic.toString() + '</p>' + continue_url + location_html);
    }
    if (page == 2) {
        appConstants.setTopic(topic.getTopic());
        res.send(header + '<p>' + appConstants.toHtmlStringFounder() + '</p>' + continue_url + location_html);
    }
    if (page == 3) {
        res.send(header + '<p>' + appConstants.toHtmlStringSiteConstants() + '</p>' + continue_url + location_html);
    }
    if (page == 4) {
        res.send(header + '<p>' + appConstants.toHtmlStringBooleanConstants() + '</p>' + continue_url + location_html);
    }
    if (page == 5) {
        res.send(header + '<p>' + appConstants.toHtmlStringStringConstants() + '</p>' + continue_url + location_html);
    }
    if (page == 6) {
        siteLook = genSiteLook(topic, appConstants.getCopyRightYear());
        res.send(header + '<p>' + siteLook.toString() + '</p>' + continue_url + location_html);
    }
    if (page == 7) {
        founderBackground = genRestFounder(topic);
        res.send(header + '<p>' + founderBackground.toHtmlString() + '</p>' + continue_url + location_html);
    }
    if (page == 8) {
        users = generateUsers(topic.getBaseTopic(), appConstants.getFounderName(), appConstants.getFounderFamousOther());
        data = '';
        for (i = 0; i < users.length; i++) {
            data += users[i].toHtmlString();
        }
        res.send(header + '<p>' + data + '</p><p>' + continue_button + '</p>' + location_html);
    }
    if (page == 9) {
        posts = genPosts(users, topic, location);
        data = '';
        for (i = 0; i < posts.length; i++) {
            data += posts[i].toHtmlString();
        }
        res.send(header + '<p>' + data + '</p><p>' + continue_button + '</p>');
    }
    if (page == 10) {
        comments = genComments(posts, users);
        data = '';
        for (i = 0; i < comments.length; i++) {
            data += comments[i].toHtmlString();
        }
        res.send(header + '<p>' + data + '</p><p>' + continue_button + '</p>');
    }
    if (page == 11) {
        appConstants.writeToFile(location + 'AppConstants.java');
        menuItems = genMenu(location + 'AppConstants.java', topic.getBaseTopic());
        res.send(header + '<p>' + menuItems.toString() + '</p>' + continue_url );
    }
    if (page == 12) {
        founderBackground.writeToFile(location + 'AppConstants.java');
        appConstants.writeFileEnd(location + 'AppConstants.java');
        writeFile(location, 'insert-sitelook.sql', siteLook.toString());
        writeFile(location, 'insert-menu.sql', menuItems.join('\n'));
        writeUsers(users, location);
        genAdminDBFile(location, siteLook.getUrl());
        writeFile(location, 'insert-posts.sql', posts.join('\n'));
        writeFile(location, 'insert-comments.sql', comments.join('\n'));
        genPom(location, siteLook.getUrl(), siteLook.getTitle());
        bootStrapFile.setNewPath(location);
        bootStrapFile.randomChoice();
        bootStrapFile.copyFile();
        page = 0;
        topic = generateTopic();
        res.send(header + '<p>Files written to : ' + location + '</p><p><a href=\'userGenerate\'>create another</a></p>');
    }

    res.send('other: ' + page);
});
module.exports = router;