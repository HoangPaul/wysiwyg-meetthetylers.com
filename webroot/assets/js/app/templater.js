if (typeof define !== 'function') { var define = require('amdefine')(module) }

define(function() {
	var templateContainerId = 'template-container';

	return {
		load : function($, templates) {
			// Inlining the template ID instead of passing an object since
			// cheerio doesn't support it yet
			return $('<div id="' + templateContainerId + '" />')
				.appendTo('body')
				.append(templates);
		},
		unload : function($) {
			return $('#' + templateContainerId).remove();
		},
		generate : function($, Handlebars, util, data, mappings) {
	        var synopsisCardTextTemplate = $('#synopsis-card-text').html();
	        var timeUnitTemplate = $('#time-unit').html();
	        var featureTemplate = $('#feature-partial').html();
	        var detailCardTemplate = $('#detail-card-partial').html();
	        var detailImageTemplate = $('#detail-image-partial').html();
	        var registryItemTemplate = $('#registry-item-partial').html();

			util.each($, data.data, function(_, item) {
				mappings[item.data.type] = {data : item.data};
			});

			util.recursiveWalk($, mappings, function(target) {
			    target['id'] = Math.random();
				return true;
			});
	
	        Handlebars.registerPartial('synopsis-card-text', synopsisCardTextTemplate);
	        Handlebars.registerPartial('time-unit', timeUnitTemplate);
	        Handlebars.registerPartial('detail-card', detailCardTemplate);
    	    Handlebars.registerPartial('feature', featureTemplate);
	        Handlebars.registerPartial('detail-image', detailImageTemplate);
	        Handlebars.registerPartial('registry-item', registryItemTemplate);

	        synopsisPartial = $('#synopsis').html();
	        synopsisTemplate = Handlebars.compile(synopsisPartial);
	        timerPartial = $('#timer-partial').html();
	        timerTemplate = Handlebars.compile(timerPartial);
	        detailsPartial = $('#details-partial').html();
	        detailsTemplate = Handlebars.compile(detailsPartial);
	        rsvpPartial = $('#rsvp-partial').html();
	        rsvpTemplate = Handlebars.compile(rsvpPartial);
	        registryPartial = $('#registry-partial').html();
	        registryTemplate = Handlebars.compile(registryPartial);

			mappings['synopsis']['template'] = synopsisTemplate;
			mappings['timer']['template'] = timerTemplate;
			mappings['details']['template'] = detailsTemplate;
			mappings['registry']['template'] = registryTemplate;

	        $('#asd').append(synopsisTemplate(mappings['synopsis'].data));
	        $('#asd').append(timerTemplate(mappings['timer'].data));
	        $('#asd').append(detailsTemplate(mappings['details'].data));
	        $('#asd').append(rsvpTemplate());
	        $('#asd').append(registryTemplate(mappings['registry'].data));
		}
	};
});
