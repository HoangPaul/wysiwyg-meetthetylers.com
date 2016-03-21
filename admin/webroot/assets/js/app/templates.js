define(["jquery", "./util/util", "./templater", "./timer", "dropzone", "./templateModel"],
    function($, util, Templater, Timer, Dropzone, TemplateModel) {
        var templater = new Templater($);
        var templateModel = new TemplateModel($);

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

        $('body').on('templates:loaded', function(_, data) {
            templateModel.load(data);
            templater.generate(templateModel);

            $('body').trigger('templates:appended');
        });

        $('body').on('templates:appended', function() {
            Timer.load();
        });

        var _getDataFromModel = function(editableData, currModel) {
            var dataToShowInOverlay = {};
            util.each($, editableData, function(_, dataType) {
                dataToShowInOverlay[dataType] = currModel[dataType] || null;
            });

            return dataToShowInOverlay;
        }

        $(document).on('blur', '[contentEditable="true"]', function(e) {
            var html = $(this).html();
            var parentId = $(this).closest('[data-id]').data('id');

            var model = templateModel.getModelById(parentId);

            model.text = html;
        });

        $(document).on('click', '[data-editable]', function(e) {
            var id = $(this).data('id');
            var parentType = $(this).parents('[data-parent]').data('type');

            var parentModel = templateModel.getModelByType(parentType);
            var currModel = templateModel.getModelById(id);

            if (!parentModel) {
                return;
            }

            // Pass the necessary data to the overlay
            $('#overlay').data('target', id);
            $('#overlay').data('parentModel', parentModel);

            // Show the editable data in the overlay
            var editableData = $(this).data("editable").split(',');
            var dataToShowInOverlay = _getDataFromModel(editableData, currModel);
            _removeAllOverlayElements();
            _populateOverlay(dataToShowInOverlay);
            _showOverlay();

            $(this).addClass('overlay-target');

            e.stopPropagation();
        });

        $('[data-overlay-delete]').on('click', function() {
            var id = $("#overlay").data('target');

            if (typeof id === 'undefined') {
                return;
            }

            var isSucessful = templateModel.deleteEntry(id);

            templateModel.save();

            _removeOverlay();
        });

        $('[data-overlay-submit]').on('click', function() {
            var id = $("#overlay").data('target');
            var parentModel = $('#overlay').data('parentModel');

            if (typeof id === 'undefined') {
                var modelName = parentModel.split(':')[0];
                var modelPath = parentModel.split(':')[1].split('.');

                id = templateModel.addNewModelEntry(id, modelName, modelPath);
            }

            var currModel = templateModel.getModelById(id);
            var overlayData = _getOverlayData();

            currModel = $.extend(currModel, overlayData);

            templateModel.save($);

            _removeOverlay();
        });

        $(document).on('click', '[data-add]', function(e) {
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

            $('#overlay').data('parentModel', $(this).data('model'));
            _removeAllOverlayElements();
            _populateOverlay(newData);
            _showOverlay();

            e.preventDefault();
            return false;
        });
    });
