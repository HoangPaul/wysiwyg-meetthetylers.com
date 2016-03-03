define(["jquery", "./util/util", "./templater", "./timer", "dropzone", "./templateModel"],
    function($, util, Templater, Timer, Dropzone, TemplateModel) {
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
            TemplateModel.init($, data);
            Templater.generate($, TemplateModel);

            $('body').trigger('templates:appended');
        });

        $('body').on('templates:appended', function() {
            Timer.load();
        });

        var _getDataFromModel = function(editableData, currModel) {
            var dataToShowInOverlay = {};
            util.each($, editableData, function(_, dataType) {
                dataToShowInOverlay[dataType] = currModel[dataType];
            });

            return dataToShowInOverlay;
        }

        $(document).on('blur', '[contentEditable="true"]', function(e) {
            var html = $(this).html();
            var parentId = $(this).closest('[data-id]').data('id');

            var model = TemplateModel.getModelById(parentId);

            model.text = html;
        });

        $(document).on('click', '[data-editable]', function(e) {
            var id = $(this).data('id');
            var parentType = $(this).parents('[data-parent]').data('type');

            var parentModel = TemplateModel.getModelByType(parentType);
            var currModel = TemplateModel.getModelById(id);

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
            jQuery.post('/api/save', {
                data: model.data
            });
            _removeOverlay();
        });

        $('[data-overlay-submit]').on('click', function() {
            var id = $("#overlay").data('target');
            var parentModel = $('#overlay').data('parentModel');

            if (typeof id === 'undefined') {
                var modelName = model.split(':')[0];
                var modelPath = model.split(':')[1].split('.');

                id = TemplateModel.addNewModelEntry(id, modelName, modelPath);
            }

            var currModel = TemplateModel.getModelById(id);
            var overlayData = _getOverlayData();

            currModel = $.extend(currModel, overlayData);

            TemplateModel.save($);

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
