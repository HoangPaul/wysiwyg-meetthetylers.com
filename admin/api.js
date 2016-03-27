var express = require('express');
var path = require('path');
var router = express.Router();
var async = require('async');
var multer = require('multer');
var storage = multer.diskStorage({
	destination: function (req, file, cb) {
		cb(null, 'webroot/images/')
	},
	filename: function(req, file, cb) {
		var reg = /(?:\.([^.]+))?$/
		var ext = reg.exec(file.originalname);
		cb(null, Date.now() + '.' + ext[1]);
	}
});
var upload = multer({storage: storage});

var fs = require('fs-extra');

var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://mongo:27017/myproject';

var getData = function(callbackFunction) {
	async.parallel({
		data: function(callback) {
			MongoClient.connect(url, function(err, db) {
				db.collection('sections').find({version : 1}).toArray(function(err, items) {
					callback(null, items[0]['sections']);
					db.close();
				});
			});
		},
		templates: function(callback) {
			var templates = fs.readFileSync(__dirname + '/templates/all.html', 'utf-8');
			callback(null, templates);
		}
	}, callbackFunction);
};

router.get('/templates', function(req, res, next) {
	getData(function(err, result) {
		res.send(result);
	});
});

router.get('/generate', function(req, res, next) {
	getData(function(err, result) {
		var data = result;
		var templates = result.templates;

  		res.render('index', {layout: false, isAdmin : false}, function(err, html) {
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

            var publicDirectory = path.join(path.dirname(__dirname), 'public');

			fs.writeFile(path.join(publicDirectory, 'index.html'), $.html(), 'utf8', function(err) {
				if (err) {
					console.log(err);
				}

				var thingsToCopy = [
					'{{basedir}}/assets',
					'{{basedir}}/images'
				];

				for (var i = 0; i < thingsToCopy.length; i++) {
					var src = thingsToCopy[i].replace('{{basedir}}', 'webroot');
					var dest = thingsToCopy[i].replace('{{basedir}}', '../public');
					fs.copy(src, dest, function() {
						if (err) {
							console.log(err);
						}
					});
				}
				res.send('generated and exported sucessfully');
			});
		});
	});
});


router.post('/save', function(req, res, next) {
	var data = req.body.data;

	var sections = [];

	for (var sec in data) {
		if (typeof data[sec] === 'object') {
			sections.push(data[sec]);
		}
	}

	MongoClient.connect(url, function(err, db) {
	  	console.log("Connected correctly to server");
		var collection = db.collection('sections');
		collection.update({version: 1}, {sections: sections, version: 1}, {upsert:true}, function(err, result) {
			if (err) {
				next(err);
			  	db.close();
			} else {
				console.log('success');
				res.send('success');
			  	db.close();
			}
		});
	});
});

router.post('/asd', upload.single('file'), function(req, res, next) {
	var fileData = req.file;

	console.log(fileData);

	res.send(fileData);
});

router.get('/load', function(req, res, next) {
	var synopsis = {
		data : {
			type : 'synopsis',
	        bride : {
	            image : 'https://placehold.it/1000x1000',
	            title : 'The Bride',
	            text : 'This is the bride synopsis'
	        },
	        groom : {
	            image : 'https://placehold.it/1500x1500',
	            title : 'The Groom',
	            text : 'This is the groom synopsis'
	        }
		}
	};
	var registry = {
		data : {
			type : 'registry',
			items : [
				{
					image : 'https://placehold.it/1000x1000',
					title : 'Wish us luck (Red Envelope)',
					text : 'If you want to wish us luck in the future, money in a red envelope is the perfect gift. "li xi" (Vietnamese: pronounced "lee see") is typically given to the bride and groom to signify luck and happiness.'
				},
				{
					image : 'https://placehold.it/1000x1000',
					title : 'Peter\'s of Kensington',
					text : 'Some text'
				}
			]
		}
	}
	var timer = {
		data : {
			type : 'timer',
			time : '1476093600',
			'time-units' : [
	            {
	                'icon' : 'calendar',
	                'short-unit' : 'DAYS',
	            },
	            {
	                'icon' : 'clock-o',
	                'short-unit' : 'HRS',
	            },
	            {
	                'icon' : 'sliders',
	                'short-unit' : 'MINS',
	            },
	            {
	                'icon' : 'heart-o',
	                'short-unit' : 'SECS',
	            }
	        ]
		}
    };
	var details =  	{
		data : {
		"id" : "0.5141239578370005",
		"type" : "details",
		"wedding" : {
				"text" : "Wedding",
				"features" : [
					{
						"id" : "0.882109182421118",
						"icon" : "calendar",
						"text" : "Monday, 1st September,2016"
					},
					{
						"icon" : "black-tie",
						"text" : "Attire Cocktail",
						"id" : "0.17907951399683952"
					},
					{
						"icon" : "clock-o",
						"text" : "Save this timeaa",
						"id" : "0.04733124724589288"
					},
					{
						"icon" : "map-marker",
						"text" : "Olive Garden\n123 Fake Street, Shepparton, Australia",
						"id" : "0.39021703437902033"
					}
				],
				"images" : [
					{
						"image" : "https://placehold.it/400x400",
						"class" : "col-xs-6 col-sm-10 col-lg-6",
						"rot" : "15",
						"id" : "0.35019781277514994"
					},
					{
						"image" : "https://placehold.it/400x400",
						"class" : "col-xs-6 col-sm-8 col-lg-6",
						"rot" : "-10",
						"id" : "0.7076751342974603"
					},
					{
						"image" : "https://placehold.it/400x400",
						"class" : "col-xs-6 col-sm-6",
						"rot" : "-5",
						"id" : "0.765263854758814"
					},
					{
						"image" : "https://placehold.it/400x400",
						"class" : "col-xs-6 col-sm-6",
						"rot" : "10",
						"id" : "0.20749113825149834"
					}
				],
				"id" : "0.654514555586502"
			},
			"reception" : {
				"text" : "Reception",
				"features" : [
					{
						"icon" : "calendar",
						"text" : "Monday, 1st September, 2015",
						"id" : "0.010780639480799437"
					},
					{
						"icon" : "black-tie",
						"text" : "Monday, 1st September, 2015",
						"id" : "0.3818817550782114"
					},
					{
						"icon" : "clock-o",
						"text" : "Monday, 1st September, 2015",
						"id" : "0.08026738557964563"
					},
					{
						"icon" : "map-marker",
						"text" : "Monday, 1st September, 2015",
						"id" : "0.3400469911284745"
					}
				],
				"images" : [
					{
						"image" : "https://placehold.it/400x400",
						"class" : "col-xs-6 col-sm-12 col-lg-8",
						"rot" : "15",
						"id" : "0.7780193318612874"
					},
					{
						"image" : "https://placehold.it/400x400",
						"class" : "col-xs-6 col-sm-8 col-md-6",
						"rot" : "-10",
						"id" : "0.1954994227271527"
					},
					{
						"image" : "https://placehold.it/400x400",
						"class" : "col-xs-10 col-xs-offset-1 col-sm-offset-0 col-sm-12 col-md-6",
						"rot" : "-5",
						"id" : "0.23725437093526125"
					}
				],
				"id" : "0.440505079459399"
			},
			"reception-viet" : {
				"text" : "Vietnamese Reception (Family only)",
				"features" : [
					{
						"icon" : "calendar",
						"text" : "Monday, 1st September, 2015",
						"id" : "0.22138357325457036"
					},
					{
						"icon" : "black-tie",
						"text" : "Monday, 1st September, 2015",
						"id" : "0.912217250559479"
					},
					{
						"icon" : "clock-o",
						"text" : "Monday, 1st September, 2015",
						"id" : "0.03435907978564501"
					},
					{
						"icon" : "map-marker",
						"text" : "Monday, 1st September, 2015",
						"id" : "0.5026170937344432"
					}
				],
				"images" : [
					{
						"image" : "https://placehold.it/400x400",
						"class" : "col-xs-6 col-sm-12 col-md-11 col-lg-8",
						"rot" : "10",
						"id" : "0.2712129754945636"
					},
					{
						"image" : "https://placehold.it/400x400",
						"class" : "col-xs-6 col-sm-12 col-md-12 col-lg-10",
						"rot" : "-15",
						"id" : "0.4639722043648362"
					}
				],
				"id" : "0.06939435540698469"
			}
		}
	};

	MongoClient.connect(url, function(err, db) {
	  	console.log("Connected correctly to server");
		var collection = db.collection('wedding');
		collection.insert([synopsis, timer, details, registry], function(err, result) {
			if (err) {
				next(err);
			  	db.close();
			} else {
				console.log('success');
				res.send('success');
			  	db.close();
			}
		});

	});
});


module.exports = router;
