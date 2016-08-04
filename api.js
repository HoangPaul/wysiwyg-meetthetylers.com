var express = require('express');
var path = require('path');
var router = express.Router();
var async = require('async');
var multer = require('multer');
var storage = multer.diskStorage({
    'destination': function (req, file, cb) {
        cb(null, 'webroot/images/')
    },
    'filename': function (req, file, cb) {
        var reg = /(?:\.([^.]+))?$/
        var ext = reg.exec(file.originalname);
        cb(null, Date.now() + '.' + ext[1]);
    }
});
var upload = multer({storage: storage});
var fs = require('fs-extra');

var MongoClient = require('mongodb').MongoClient;
var mongoUrl = 'mongodb://mongo:27017/myproject';

var getData = function (callbackFunction) {
    async.parallel({
        data: function (callback) {
            MongoClient.connect(mongoUrl, function (err, db) {
                db.collection('sections').find({version: 1}).toArray(function (err, items) {
                    callback(null, items[0]['sections']);
                    db.close();
                });
            });
        },
        templates: function (callback) {
            var templates = fs.readFileSync(__dirname + '/templates/all.html', 'utf-8');
            callback(null, templates);
        }
    }, callbackFunction);
};

router.get('/templates', function (req, res, next) {
    getData(function (err, result) {
        res.send(result);
    });
});

router.get('/generate', function (req, res, next) {
    getData(function (err, result) {
        var data = result;
        var templates = result.templates;

        res.render('index', {layout: false, isAdmin: false}, function (err, html) {
            var $ = require('cheerio').load(html);

            var requirejs = require('requirejs');
            delete require.cache[require.resolve('requirejs')];

            var TemplateModel = requirejs('./webroot/assets/js/app/templateModel');
            var Templater = requirejs('./webroot/assets/js/app/templater');
            var templater = new Templater($);
            var templateModel = new TemplateModel($);

            templater.load(templates);
            templateModel.load(data);
            templater.generate(templateModel);
            templater.unload();

            // Strip out any admin stuff
            $('[contenteditable]').removeAttr('contenteditable');
            $('[data-editable]').removeAttr('data-editable');
            $('[data-id]').removeAttr('data-id');
            $('[data-parent]').removeAttr('data-parent');
            $('[data-type]').removeAttr('data-type');
            $('[data-add]').remove();

            var previewDirectory = path.join(path.dirname(__dirname), 'preview');
            fs.writeFile(path.join(previewDirectory, 'index.html'), $.html(), 'utf8', function (err) {
                if (err) {
                    console.log(err);
                }

                var thingsToCopy = [
                    '{{basedir}}/assets',
                    '{{basedir}}/images'
                ];

                for (var i = 0; i < thingsToCopy.length; i++) {
                    var src = thingsToCopy[i].replace('{{basedir}}', 'webroot');
                    var dest = thingsToCopy[i].replace('{{basedir}}', '../preview');
                    fs.copy(src, dest, function () {
                        if (err) {
                            console.log(err);
                        }
                    });
                }
                res.send('Generate and exported successfully. Please go to https://preview.meetthetylers.com to preview your changes');
            });
        });
    });
});

router.get('/deploy', function (req, res, next) {
    fs.copy('../preview', '../public', function () {
        if (err) {
            console.log(err);
        }
        res.send('Error - Could not deploy');
    });
    res.send('Deployment successful');
});

router.post('/save', function (req, res, next) {
    var data = req.body.data;

    var sections = [];

    for (var sec in data) {
        if (typeof data[sec] === 'object') {
            sections.push(data[sec]);
        }
    }

    MongoClient.connect(mongoUrl, function (err, db) {
        console.log("Connected correctly to server");
        var collection = db.collection('sections');
        collection.update({version: 1}, {sections: sections, version: 1}, {upsert: true}, function (err, result) {
            if (err) {
                next(err);
                db.close();
            } else {
                res.send('success');
                db.close();
            }
        });
    });
});

router.post('/upload', upload.single('file'), function (req, res, next) {
    var fileData = req.file;

    console.log(fileData);

    res.send(fileData);
});

module.exports = router;
