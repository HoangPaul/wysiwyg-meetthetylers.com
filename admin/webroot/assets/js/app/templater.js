if (typeof define !== 'function') { var define = require('amdefine')(module) }

define(['handlebars', './util/util'], function(Handlebars, Util) {
    var $ = {};
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
        var inputImageYesNoTemplate = $('#input-image-yes-no').html();
        var inputTextTemplate = $('#input-text').html();
        var inputTextAreaTemplate = $('#input-textarea').html();

        Handlebars.registerPartial('synopsis-card-text', synopsisCardTextTemplate);
        Handlebars.registerPartial('time-unit', timeUnitTemplate);
        Handlebars.registerPartial('detail-card', detailCardTemplate);
        Handlebars.registerPartial('feature', featureTemplate);
        Handlebars.registerPartial('detail-image', detailImageTemplate);
        Handlebars.registerPartial('registry-item', registryItemTemplate);
        Handlebars.registerPartial('input-image-yes-no', inputImageYesNoTemplate);
        Handlebars.registerPartial('input-text', inputTextTemplate);
        Handlebars.registerPartial('input-textarea', inputTextAreaTemplate);

        var jumbotronPartial = $('#jumbotron-partial').html();
        var jumbotronTemplate = Handlebars.compile(jumbotronPartial);

        var synopsisPartial = $('#synopsis').html();
        var synopsisTemplate = Handlebars.compile(synopsisPartial);

        var timerPartial = $('#timer-partial').html();
        var timerTemplate = Handlebars.compile(timerPartial);

        var detailsPartial = $('#details-partial').html();
        var detailsTemplate = Handlebars.compile(detailsPartial);

        var rsvpPartial = $('#rsvp').html();
        var rsvpTemplate = Handlebars.compile(rsvpPartial);

        var registryPartial = $('#registry-partial').html();
        var registryTemplate = Handlebars.compile(registryPartial);

        templaters['jumbotron'] = jumbotronTemplate;
        templaters['synopsis'] = synopsisTemplate;
        templaters['timer'] = timerTemplate;
        templaters['details'] = detailsTemplate;
        templaters['rsvp'] = rsvpTemplate;
        templaters['registry'] = registryTemplate;
        hasAttachedTemplates = true;
    }

    function Templater(_$) {
        $ = _$;
    }

    Templater.prototype.load = function(templates) {
        // Inlining the template ID instead of passing an object since
        // cheerio doesn't support it yet
        $('<div id="' + templateContainerId + '" />')
            .appendTo('body')
            .append(templates);
    }

    Templater.prototype.unload = function() {
        return $('#' + templateContainerId).remove();
    }

    Templater.prototype.generate = function(templateModel)  {
        if (!hasAttachedTemplates) {
            _attachTemplates($, Handlebars);
        }
        $('#asd').empty();

        var _sections = [
            'jumbotron',
            'details',
            'timer',
            'registry',
            'rsvp',
            'synopsis',
        ];

        Util.each($, _sections, function(_, _section) {
            var model = templateModel.getModelByType(_section);
            if (typeof model !== 'undefined') {
                $('#asd').append(templaters[_section](model.data));
            } else {
                $('#asd').append(templaters[_section]());
            }
        });
    }

    return Templater;
});
