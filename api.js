var express = require('express');
var router = express.Router();
var async = require('async');

var fs = require('fs');

var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/myproject';

router.get('/templates', function(req, res, next) {
	async.parallel({
		data: function(callback) {
			MongoClient.connect(url, function(err, db) {
				db.collection('wedding').find().toArray(function(err, items) {
					console.log(items);
					callback(null, items);
					db.close();
				});
			});
		},
		templates: function(callback) {
			var templates = fs.readFileSync(__dirname + '/webroot/public/all.html', 'utf-8');
			callback(null, templates);
		}
	}, function(err, result) {
		res.send(result);
	});
});


router.post('/save', function(req, res, next) {
	var data = req.body;
	var id = data._id || -1;
	
	MongoClient.connect(url, function(err, db) {
	  	console.log("Connected correctly to server");
		var collection = db.collection('wedding');
		collection.update({ _id : id}, data, {upsert:true}, function(err, result) {
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

router.get('/load', function(req, res, next) {
	var synopsis = {
		type : 'synopsis',
		data : {
	        bride : {
	            image : 'https://placehold.it/1000x1000',
	            title : 'The Bride',
	            synopsis : 'This is the bride synopsis'
	        },
	        groom : {
	            image : 'https://placehold.it/1500x1500',
	            title : 'The Groom',
	            synopsis : 'This is the groom synopsis'
	        }
		}
	};
	var timer = {
		type : 'timer',
		data : {
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
	MongoClient.connect(url, function(err, db) {
	  	console.log("Connected correctly to server");
		var collection = db.collection('wedding');
		collection.insert([synopsis, timer], function(err, result) {
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
