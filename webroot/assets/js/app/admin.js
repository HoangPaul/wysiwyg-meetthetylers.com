requirejs.config({
	paths : (function() {
		var currPaths = requirejs.s.contexts._.config.paths;
		currPaths['handlebars'] = 'https://cdnjs.cloudflare.com/ajax/libs/handlebars.js/4.0.5/handlebars';
		currPaths['dropzone'] = 'https://cdnjs.cloudflare.com/ajax/libs/dropzone/4.2.0/dropzone-amd-module';
	})()
});

define(["jquery", "./templater", "./templates"], function($, Templater) {
    $.get('/api/templates', function(data) {
		Templater.load($, data.templates);
        $('body').trigger('templates:loaded', data);
    });
});
