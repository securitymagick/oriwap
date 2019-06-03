'use strict';
var express = require('express');
var generateTopic = require('./generateTopic');
var getOther = require('./getSecretOrOther');
var genAppConstants = require('../domain/createAppConstants');
var generateUsers = require('./generateUsers');
var writeUsers = require('../domain/createUsers');
var listAllTopics = require('../helper_routines/listAllTopics');
var writeFile = require('../helper_routines/writeFile');
var genMenu = require('./generateMenuItem');
var createBootStrap = require('./genBootStrap');
var genAdminDBFile = require('./genAdminDBFile');
var genRestFounder = require('./generateRestOfFounder');
var genSiteLook = require('./generateSiteLook');
var genPom = require('./generatePom');
var genPosts = require('./generatePosts');
var genComments = require('./generateComments');
var router = express.Router();

let location = '/var/temp/';

/* GET home page. */
router.get('/', function (req, res) {
    if (req.query.loc == null) {
        let desc = '<p> This page will generate the random web application files for an insecure app without any chance for you to approve or modify.'
            + '  To modify the results as they are generated please use the modify as you generate button. </p>';
        let form_start = '<p style = "color:red;">Please enter a location</p><form action=\'.\' method=\'get\'>';
        let form_middle = '<p>Location: <input type="text" name="loc" value="' + location + '">';
        let form_end = '<br><br><input type="submit" value="Submit"></form>';
        let button = '<br><button onclick=\"window.location.href =\'userGenerate\'">Modify As You Generate</button>';
        res.send(desc + button + form_start + form_middle + form_end);
    }
    if (req.query.loc != null) {
        location = req.query.loc;

        let topic = generateTopic();
        //let url = topic.toString().replace(/\s/g, '-').toLowerCase();
        //console.log(url);
        console.log(topic.getBaseTopic());
        let other = getOther(topic.getBaseTopic());
        console.log(other);
        let appConstants = new genAppConstants();
        appConstants.setTopic(topic.getTopic());
        let siteLook = genSiteLook(topic, appConstants.getCopyRightYear());
        writeFile(location, 'insert-sitelook.sql', siteLook.toString());

        appConstants.writeToFile(location + 'AppConstants.java');
        let menuItems = genMenu(location + 'AppConstants.java', topic.getBaseTopic());
        let founderBackground = genRestFounder(topic);
        founderBackground.writeToFile(location + 'AppConstants.java');
        console.log(founderBackground.toString());
        //let allTopics = listAllTopics();
        writeFile(location, 'insert-menu.sql', menuItems.join('\n'));

        let users = generateUsers(topic.getBaseTopic(), appConstants.getFounderName(), appConstants.getFounderFamousOther());
        writeUsers(users, location);

        appConstants.writeFileEnd(location + 'AppConstants.java');
        genAdminDBFile(location, siteLook.getUrl());
        let posts = genPosts(users, topic, location);
        writeFile(location, 'insert-posts.sql', posts.join('\n'));

        let comments = genComments(posts, users);
        writeFile(location, 'insert-comments.sql', comments.join('\n'));
        genPom(location, siteLook.getUrl(), siteLook.getTitle());
        let bootStrapFile = new createBootStrap();
        bootStrapFile.setNewPath(location);
        bootStrapFile.randomChoice();
        console.log(bootStrapFile.toString());
        bootStrapFile.copyFile();
        res.render('index', { title: 'Oriwap', topic: topic.getTopic(), secret: other });
    }
});

module.exports = router;
