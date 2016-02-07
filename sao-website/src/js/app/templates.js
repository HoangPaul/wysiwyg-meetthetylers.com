define(["jquery", "handlebars", "./util/util"], function($, Handlebars, util) {
    var context = {
        bride : {
            image : 'https://placehold.it/1000x1000',
            title : 'The Bride',
            synopsis : 'This is the bride synopsis'
        },
        groom : {
            image : 'https://placehold.it/1500x1500',
            title : 'The Groom',
            synopsis : 'This is the groom synopsis'
        }
    };

    var timeUnits = {
        'time-units' : [
            {
                'icon' : 'calendar',
                'short-unit' : 'DAYS',
            },
            {
                'icon' : 'clock-o',
                'short-unit' : 'HRS',
            },
            {
                'icon' : 'sliders',
                'short-unit' : 'MINS',
            },
            {
                'icon' : 'heart-o',
                'short-unit' : 'SECS',
            }
        ]
    }

    var weddingDetails  = {
        'wedding' : {
            'title' : {
                'text' : 'Wedding'
            },
            'features' : [
                {
                    id : 'asdasd',
                    icon : 'calendar',
                    text : 'Monday, 1st September, 2015'
                },
                {
                    icon : 'black-tie',
                    text : 'Attire Cocktail'
                },
                {
                    icon : 'clock-o',
                    text : '3:00pm - 6:00pm'
                },
                {
                    icon : 'map-marker',
                    text : 'Olive Garden\n123 Fake Street, Shepparton, Australia'
                },
            ],
            'images' : [
                {
                    image : 'https://placehold.it/400x400',
                    class : 'col-xs-6 col-sm-10 col-lg-6',
                    rot : '15'
                },
                {
                    image : 'https://placehold.it/400x400',
                    class : 'col-xs-6 col-sm-8 col-lg-6',
                    rot : '-10'
                },
                {
                    image : 'https://placehold.it/400x400',
                    class : 'col-xs-6 col-sm-6',
                    rot : '-5'
                },
                {
                    image : 'https://placehold.it/400x400',
                    class : 'col-xs-6 col-sm-6',
                    rot : '10'
                },
            ]
        },
        'reception' : {
            'title' : {
                'text' : 'Reception'
            },
            'features' : [
                {
                    icon : 'calendar',
                    text : 'Monday, 1st September, 2015'
                },
                {
                    icon : 'black-tie',
                    text : 'Monday, 1st September, 2015'
                },
                {
                    icon : 'clock-o',
                    text : 'Monday, 1st September, 2015'
                },
                {
                    icon : 'map-marker',
                    text : 'Monday, 1st September, 2015'
                },
            ],
            'images' : [
                {
                    image : 'https://placehold.it/400x400',
                    class : 'col-xs-6 col-sm-12 col-lg-8',
                    rot : '15'
                },
                {
                    image : 'https://placehold.it/400x400',
                    class : 'col-xs-6 col-sm-8 col-md-6',
                    rot : '-10'
                },
                {
                    image : 'https://placehold.it/400x400',
                    class : 'col-xs-10 col-xs-offset-1 col-sm-offset-0 col-sm-12 col-md-6',
                    rot : '-5'
                }
            ]
        },
        'reception-viet' : {
            'title' : {
                'text' : 'Vietnamese Reception (Family only)'
            },
            'features' : [
                {
                    icon : 'calendar',
                    text : 'Monday, 1st September, 2015'
                },
                {
                    icon : 'black-tie',
                    text : 'Monday, 1st September, 2015'
                },
                {
                    icon : 'clock-o',
                    text : 'Monday, 1st September, 2015'
                },
                {
                    icon : 'map-marker',
                    text : 'Monday, 1st September, 2015'
                },
            ],
            'images' : [
                {
                    image : 'https://placehold.it/400x400',
                    class : 'col-xs-6 col-sm-12 col-md-11 col-lg-8',
                    rot : '10'
                },
                {
                    image : 'https://placehold.it/400x400',
                    class : 'col-xs-6 col-sm-12 col-md-12 col-lg-10',
                    rot : '-15'
                }
            ]
        }
    };

    util.recursiveWalk(weddingDetails, function(target) {
        target['id'] = Math.random();
        return true;
    });

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

    $('body').on('templates:loaded', function() {
        var synopsisCardTextTemplate = $('#synopsis-card-text').html();
        var timeUnitTemplate = $('#time-unit').html();
        var featureTemplate = $('#feature-partial').html();
        var detailCardTemplate = $('#detail-card-partial').html();
        var detailImageTemplate = $('#detail-image-partial').html();

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
    });
});
