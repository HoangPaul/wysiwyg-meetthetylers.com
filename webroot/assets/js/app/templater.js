if (typeof define !== 'function') { var define = require('amdefine')(module) }

define(['handlebars', './util/util'], function(Handlebars, Util) {
    var templateContainerId = 'template-container';
    var templaters = {};
    var hasAttachedTemplates = false;

    var _attachTemplates = function($, Handlebars) {
        var synopsisCardTextTemplate = $('#synopsis-card-text').html();
        var timeUnitTemplate = $('#time-unit').html();
        var featureTemplate = $('#feature-partial').html();
        var detailCardTemplate = $('#detail-card-partial').html();
        var detailImageTemplate = $('#detail-image-partial').html();
        var registryItemTemplate = $('#registry-item-partial').html();

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

        templaters['synopsis'] = synopsisTemplate;
        templaters['timer'] = timerTemplate;
        templaters['details'] = detailsTemplate;
        templaters['rsvp'] = rsvpTemplate;
        templaters['registry'] = registryTemplate;
        hasAttachedTemplates = true;
    }

    return {
        load: function($, templates) {
            // Inlining the template ID instead of passing an object since
            // cheerio doesn't support it yet
            $('<div id="' + templateContainerId + '" />')
                .appendTo('body')
                .append(templates);
        },
        unload: function($) {
            return $('#' + templateContainerId).remove();
        },
        generate: function($, TemplateModel) {
            if (!hasAttachedTemplates) {
                _attachTemplates($, Handlebars);
            }
            $('#asd').empty();

            var _sections = [
                'details',
                'timer',
                'registry',
                'rsvp',
                'synopsis',
            ];

            Util.each($, _sections, function(_, _section) {
                var model = TemplateModel.getModelByType(_section);
                if (typeof model !== 'undefined') {
                    $('#asd').append(templaters[_section](model.data));
                } else {
                    $('#asd').append(templaters[_section]());
                }
            });
        }
    };
});
