define(["jquery", "handlebars", "./util/util"], function($, Handlebars, util) {
    var synopsisPartial = null;
    var synopsisTemplate = null;
    var timerPartial = null;
    var timerTemplate = null;
    var detailsPartial = null;
    var detailsTemplate = null;
    var rsvpPartial = null;
    var rsvpTemplate = null;
    var registryPartial = null;
    var registryTemplate = null;

	var mappings = {};

    $('body').on('templates:loaded', function(_, data) {
        var synopsisCardTextTemplate = $('#synopsis-card-text').html();
        var timeUnitTemplate = $('#time-unit').html();
        var featureTemplate = $('#feature-partial').html();
        var detailCardTemplate = $('#detail-card-partial').html();
        var detailImageTemplate = $('#detail-image-partial').html();
		
		$.each(data.data, function(_, item) {
			mappings[item.data.type] = {data : item.data};
		});
		util.recursiveWalk(mappings, function(target) {
		    target['id'] = Math.random();
			return true;
		});

        Handlebars.registerPartial('synopsis-card-text', synopsisCardTextTemplate);
        Handlebars.registerPartial('time-unit', timeUnitTemplate);
        Handlebars.registerPartial('detail-card', detailCardTemplate);
        Handlebars.registerPartial('feature', featureTemplate);
        Handlebars.registerPartial('detail-image', detailImageTemplate);

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

        jQuery('#asd').append(synopsisTemplate(mappings['synopsis'].data));

        jQuery('#asd').append(timerTemplate(mappings['timer'].data));

        jQuery('#asd').append(detailsTemplate(mappings['details'].data));

        jQuery('#asd').append(rsvpTemplate());

        jQuery('#asd').append(registryTemplate());

		$('body').trigger('templates:appended');
    });

    $(document).on('click', '[data-editable]', function(e) {
        var id = $(this).data('id');
		var parentModel = $(this).parents('[data-parent]').data('type');

        var target = null;

        var isFound = false;
        util.recursiveWalk(mappings[parentModel], function(target) {
            if (typeof target !== 'undefined' && target['id'] != id) {
                return true;
            }
            $('#overlay').addClass('show');
            $('#overlay').data('target', target['id']);
			$('#overlay').data('model', mappings[parentModel]);
            $('#overlay [data-overlay-text]').val(target['text']);
            isFound = true;
            return false;
        });

        if (isFound) {
            e.stopPropagation()
        }
    });
	
	$('[data-overlay-cancel]').on('click', function() {
		$('#overlay').removeClass('show');
	});

    $('[data-overlay-submit]').on('click', function() {
        var id = $("#overlay").data('target');
		var model = $('#overlay').data('model');
        var text = $('[data-overlay-text]').val();
        util.recursiveWalk(model, function(target) {
            if (typeof target !== 'undefined' && target['id'] != id) {
                return true;
            }
			var template = model.template;
            target['text'] = text;
            jQuery('[data-type="' + model.data.type + '"]').replaceWith(template(model.data));
            return false;
        });

		jQuery.post('/api/save', {data : model.data});
    });

	$('[data-overlay-submit-file]').on('click', function() {
		var formData = new FormData($('#qwe')[0]);
		$.ajax({
			url : '/api/asd',
			type: 'POST',
	        xhr: function() {  // Custom XMLHttpRequest
    	        var myXhr = $.ajaxSettings.xhr();
	            if(myXhr.upload){ // Check if upload property exists
	                myXhr.upload.addEventListener('progress',progressHandlingFunction, false); // For handling the progress of the upload
	            }
	            return myXhr;
	        },
    	    //Ajax events
	        success: function(){console.log('success');},
	        error: function(){console.log('failed');},
	        // Form data
	        data: formData,
	        //Options to tell jQuery not to process data or worry about content-type.
	        cache: false,
	        contentType: false,
	        processData: false
		});
	});
});
