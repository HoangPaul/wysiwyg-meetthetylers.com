define(["jquery", "handlebars", "./util/util"], function($, Handlebars, util) {
    var context = null;

    var timeUnits = null;

    var weddingDetails  = null;


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

    $('body').on('templates:loaded', function(_, data) {
        var synopsisCardTextTemplate = $('#synopsis-card-text').html();
        var timeUnitTemplate = $('#time-unit').html();
        var featureTemplate = $('#feature-partial').html();
        var detailCardTemplate = $('#detail-card-partial').html();
        var detailImageTemplate = $('#detail-image-partial').html();
		
		$.each(data.data, function(_, item) {
			switch (item.type) {
				case 'synopsis':
					context = item.data;
					break;
				case 'details':
					weddingDetails = item.data;
					break;
				case 'timer':
					timeUnits = item.data;
					break;
				default:
					console.log("blah");
			}
		});
		util.recursiveWalk(weddingDetails, function(target) {
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

        jQuery('#asd').append(synopsisTemplate(context));

        jQuery('#asd').append(timerTemplate(timeUnits));

        jQuery('#asd').append(detailsTemplate(weddingDetails));

        jQuery('#asd').append(rsvpTemplate());

        jQuery('#asd').append(registryTemplate());

		$('body').trigger('templates:appended');
    });

    $(document).on('click', '[data-editable]', function(e) {
        var id = $(this).data('id');

        var target = null;

        var isFound = false;
        util.recursiveWalk(weddingDetails, function(target) {
            if (typeof target !== 'undefined' && target['id'] != id) {
                return true;
            }
            $('#overlay').addClass('show');
            $('#overlay').data('target', target['id']);
            $('#overlay [data-overlay-text]').val(target['text']);
            isFound = true;
            return false;
        });

        if (isFound) {
            e.stopPropagation()
        }
    });
    $('[data-overlay-submit]').on('click', function() {
        var id = $("#overlay").data('target');
        var text = $('[data-overlay-text]').val();
        util.recursiveWalk(weddingDetails, function(target) {
            if (typeof target !== 'undefined' && target['id'] != id) {
                return true;
            }
            target['text'] = text;
            jQuery('#details').replaceWith(detailsTemplate(weddingDetails));
            return false;
        });

		jQuery.post('/api/save', {
			type : 'details',
			data : weddingDetails 
		});
    });
});
