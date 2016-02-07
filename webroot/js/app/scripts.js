define(["jquery", "handlebars", "./util/util"], function($, Handlebars, util) {
    var jQuery = $;

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

    var synopsisPartial = $('#synopsis').html();
    var synopsisTemplate = Handlebars.compile(synopsisPartial);
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

    jQuery('#asd').append(synopsisTemplate(context));

    var timerPartial = $('#timer-partial').html();
    var timerTemplate = Handlebars.compile(timerPartial);
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

    jQuery('#asd').append(timerTemplate(timeUnits));

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

    var detailsPartial = $('#details-partial').html();
    var detailsTemplate = Handlebars.compile(detailsPartial);

    jQuery('#asd').append(detailsTemplate(weddingDetails));

    (function($) {
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
    })(jQuery);


    (function($) {
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
    })(jQuery);
    //new WOW().init();

    // Image greyout
    (function($) {
      $("[data-img]").on("change", function() {
        var $this = $(this);
        var $target = $('#' + $this.data('img'));
        if ($this.data('img-type') == 'yes') {
          $target.removeClass('img-gray-filter');
        } else {
          $target.addClass('img-gray-filter');
        }
      });
    })(jQuery);

    // Countdown

    (function($){
      setInterval(function() {
        var secondValue = $('#SECS span').html();
        if (secondValue == 0) {
          $('#SECS span').html(59)
          var minuteValue = $('#MINS span').html()
          $('#MINS span').html(minuteValue - 1)
        } else {
          $('#SECS span').html(secondValue - 1)
        }
      }, 1000);
    })(jQuery);

    // Map legend clickable

    (function($) {
      $('[data-toggle="clickable-show-unique"]').on('click', function(event) {
        event.preventDefault();

        // De-activate all members in the group
        var group = $(this).data('group');
        $('[data-group="' + group + '"]').removeClass('active');
        $(this).addClass('active');

        // Activate the target member(s)
        var target = $(this).data('target');
        $(target).addClass('active');

        marker.setIcon('/images/markers/map-marker-fa-gift-large.png');
        marker.setAnimation(google.maps.Animation.BOUNCE);
        setTimeout(function() {
            marker.setAnimation(null);
        }, 700);
      });
    })(jQuery);

    // Map legend content

    (function($) {
      $('[data-toggle="clickable-hide-all"]').on('click', function(event) {
        event.preventDefault();

        // De-activate all members in the group
        var group = $(this).data('group');
        $('[data-group="' + group + '"]').removeClass('active');
      });
    })(jQuery);
});
