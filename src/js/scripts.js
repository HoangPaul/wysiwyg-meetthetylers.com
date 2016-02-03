
var synopsisCardTextTemplate = $('#synopsis-card-text').html();
var timeUnitTemplate = $('#time-unit').html();
Handlebars.registerPartial('synopsis-card-text', synopsisCardTextTemplate);
Handlebars.registerPartial('time-unit', timeUnitTemplate);

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
