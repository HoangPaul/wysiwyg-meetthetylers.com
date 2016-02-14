define(["jquery", "handlebars", "./util/util", "./templater", "./timer", "dropzone"],
function($, Handlebars, util, Templater, Timer, Dropzone) {
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
		// Partial templates
		Templater.generate($, Handlebars, util, data, mappings);
		$('body').trigger('templates:appended');
    });

	$('body').on('templates:appended', function() {
		Timer.load();
	});

    $(document).on('click', '[data-editable]', function(e) {
		var $elem = $(this);
        var id = $elem.data('id');
		var parentModel = $elem.parents('[data-parent]').data('type');
		var editableData = $elem.data("editable").split(',');

        var isFound = false;
        util.recursiveWalk($, mappings[parentModel], function(target) {
            if (typeof target !== 'undefined' && target['id'] != id) {
                return true;
            }
            $('#overlay').addClass('active');
            $('#overlay').data('target', target['id']);
			$('#overlay').data('model', mappings[parentModel]);

			$('#overlay [data-type]').hide();
			$('#overlay [data-overlay-value]').prop('disabled', true);

			util.each($, editableData, function(_, type) {
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

        util.recursiveWalk($, model, function(target) {
            if (typeof target !== 'undefined' && target['id'] != id) {
                return true;
            }
			var template = model.template;

			util.each($, $('#overlay [data-type]:visible'), function(_, element) {
				var $input = $(element).find('[data-overlay-value]');
				var dataLabel = $(element).data('type');
				var dataValue = $input.val();
				target[dataLabel] = dataValue;
			});

			var overlayTargetId = $('.overlay-target').data('id');
            jQuery('[data-type="' + model.data.type + '"]').replaceWith(template(model.data));
			jQuery('[data-id="' + overlayTargetId + '"]').addClass('overlay-target');
			$('body').trigger('templates:appended');
            return false;
        });

		jQuery.post('/api/save', {data : model.data});
    });
});
