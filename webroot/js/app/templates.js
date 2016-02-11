define(["jquery", "handlebars", "./util/util", "dropzone"], function($, Handlebars, util, Dropzone) {
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

	var overlayDropzone = new Dropzone('#qwe', {
		url: '/api/asd',
		thumbnailHeight: 120,
		thumbnailWidth: null,
		success: function(file, response) {
			var path = response.path.replace('webroot/', '');
			$('[data-type="image"] [data-overlay-value]').val(path);
			console.log(response);
		}
	});

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
		var $elem = $(this);
        var id = $elem.data('id');
		var parentModel = $elem.parents('[data-parent]').data('type');
		var editableData = $elem.data("editable").split(',');

        var isFound = false;
        util.recursiveWalk(mappings[parentModel], function(target) {
            if (typeof target !== 'undefined' && target['id'] != id) {
                return true;
            }
            $('#overlay').addClass('active');
            $('#overlay').data('target', target['id']);
			$('#overlay').data('model', mappings[parentModel]);

			$('#overlay [data-type]').hide();
			$('#overlay [data-overlay-value]').prop('disabled', true);

			$.each(editableData, function(_, type) {
				var $overlayElement = $('#overlay [data-type="' + type + '"]');
				var $overlayInput = $overlayElement.find('[data-overlay-value]');

				$overlayElement.show();
				$overlayInput.prop('disabled', false);
				$overlayInput.val(target[type]);
			});

            $('#overlay [data-overlay-text]').val(target['text']);

			$elem.addClass('overlay-target');
			$('.overlay-darken').addClass('active');

            isFound = true;
            return false;
        });

        if (isFound) {
            e.stopPropagation()
        }
    });
	
	$('[data-overlay-cancel]').on('click', function() {
		$('#overlay').removeClass('active');
		$('.overlay-darken').removeClass('active');
		$('.overlay-target').removeClass('overlay-target');
		overlayDropzone.removeAllFiles();
	});

    $('[data-overlay-submit]').on('click', function() {
        var id = $("#overlay").data('target');
		var model = $('#overlay').data('model');

        util.recursiveWalk(model, function(target) {
            if (typeof target !== 'undefined' && target['id'] != id) {
                return true;
            }
			var template = model.template;

			$.each($('#overlay [data-type]:visible'), function(_, element) {
				var $input = $(element).find('[data-overlay-value]');
				var dataLabel = $(element).data('type');
				var dataValue = $input.val();
				target[dataLabel] = dataValue;
			});

			var overlayTargetId = $('.overlay-target').data('id');
            jQuery('[data-type="' + model.data.type + '"]').replaceWith(template(model.data));
			jQuery('[data-id="' + overlayTargetId + '"]').addClass('overlay-target');
            return false;
        });

		jQuery.post('/api/save', {data : model.data});
    });
});
