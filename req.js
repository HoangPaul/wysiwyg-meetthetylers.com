var requirejs = require('requirejs');

var Templater = requirejs('./webroot/assets/js/app/templater');
var util = requirejs('./webroot/assets/js/app/util/util');

module.exports = {
	load : function($, templates) {
		Templater.load($, templates);
	},
	unload : function($) {
		Templater.unload($);
	},
	generate : function($, Handlebars, data) {
		Templater.generate($, Handlebars, util, data, {});
	}
};


