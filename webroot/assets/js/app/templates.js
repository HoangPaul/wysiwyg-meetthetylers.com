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

	var _removeAllOverlayElements = function() {
		$('#overlay [data-type]').hide();
		$('#overlay [data-overlay-value]').prop('disabled', true);
	};

	var _populateOverlay = function(dataToShowInOverlay) {
		util.each($, dataToShowInOverlay, function(field, value) {
			var $overlayElement = $('#overlay [data-type="' + field + '"]');
			var $overlayInput = $overlayElement.find('[data-overlay-value]');

			$overlayElement.show();
			$overlayInput.prop('disabled', false);
			$overlayInput.val(value);
		});
	};

	var _showOverlay = function() {
        $('#overlay').addClass('active');
		$('.overlay-darken').addClass('active');
	};

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
            $('#overlay').data('target', target['id']);
			$('#overlay').data('model', mappings[parentModel]);

			var dataToShowInOverlay = {};
			util.each($, editableData, function(_, dataType) {
				dataToShowInOverlay[dataType] = target[dataType];
			});

			_removeAllOverlayElements();
			_populateOverlay(dataToShowInOverlay);
			_showOverlay();

			$elem.addClass('overlay-target');

            isFound = true;
            return false;
        });

        if (isFound) {
            e.stopPropagation()
        }
    });

	var _removeOverlay = function() {
		$('#overlay').removeClass('active');
		$('.overlay-darken').removeClass('active');
		$('.overlay-target').removeClass('overlay-target');
		$('#overlay').removeData('target');
		$('#overlay').removeData('model');
		overlayDropzone.removeAllFiles();
	}
	
	$('[data-overlay-cancel]').on('click', function() {
		_removeOverlay();
	});

	var _getOverlayData = function() {
		var data = {};
		util.each($, $('#overlay [data-type]:visible'), function(_, element) {
			var $input = $(element).find('[data-overlay-value]');
			var dataLabel = $(element).data('type');
			var dataValue = $input.val();
			
			data[dataLabel] = dataValue;
		});

		return data;
	};

	$('[data-overlay-delete]').on('click', function() {
        var id = $("#overlay").data('target');
		var model = $('#overlay').data('model');

		if (typeof id === 'undefined' || typeof model === 'undefined') {
			return;
		}

		util.recursiveWalk($, model, function(modelEntry) {
			var hasDeleted = false;
			util.each($, modelEntry, function(index, modelToDelete) {
				if (typeof modelToDelete['id'] !== undefined && modelToDelete['id'] == id) {
					console.log('deleting...');
					console.log(modelEntry);

					delete modelEntry[index];
					hasDeleted = true;

					console.log('done');
				}
			});

			if (hasDeleted) {
				return false;
			}

			if (typeof modelEntry['id'] !== undefined && modelEntry['id'] !== id) {
				return true;
			}

			return false;
		});

		var template = model.template;
       	jQuery('[data-type="' + model.data.type + '"]').replaceWith(template(model.data));
		jQuery.post('/api/save', {data : model.data});
		_removeOverlay();
	});

    $('[data-overlay-submit]').on('click', function() {
        var id = $("#overlay").data('target');
		var model = $('#overlay').data('model');

		if (typeof id === 'undefined') {
			// New entry
			id = Math.random();

			var modelName = model.split(':')[0];
			var modelPath = model.split(':')[1].split('.');
			model = mappings[modelName];

			var modelPointer = model;
			var hasSetData = false;
			util.each($, modelPath, function(_, path) {
				if (typeof modelPointer[path] !== 'undefined') {
					modelPointer = modelPointer[path];
					return true;
				}

				modelPointer[path] = [{id : id}];
				hasSetData = true;

				return false;
			});

			if (!hasSetData) {
				modelPointer.push({id : id});
			}
		}


        util.recursiveWalk($, model, function(target) {
            if (typeof target !== 'undefined' && target['id'] != id) {
                return true;
            }
			var template = model.template;

			var overlayData = _getOverlayData();
			target = $.extend(target, overlayData);

			var overlayTargetId = $('.overlay-target').data('id');
            jQuery('[data-type="' + model.data.type + '"]').replaceWith(template(model.data));
			jQuery('[data-id="' + overlayTargetId + '"]').addClass('overlay-target');
			$('body').trigger('templates:appended');
            return false;
        });

		jQuery.post('/api/save', {data : model.data});
		_removeOverlay();
    });

	$(document).on('click', '[data-add]', function() {
		var $templateElem = $('#' + $(this).data('add'));
		var fields = $('<div/>')
			.append($($templateElem.html()))
			.find('[data-editable]')
			.data('editable')
			.split(',');

		var newData = {};
		util.each($, fields, function(_, field) {
			newData[field] = '';
		});

		$('#overlay').data('model', $(this).data('model'));
		_removeAllOverlayElements();
		_populateOverlay(newData);
		_showOverlay();

		console.log(newData);
	});
});
