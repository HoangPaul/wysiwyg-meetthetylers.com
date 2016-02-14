define(["jquery", "./timer"], function($, Timer) {
    var jQuery = $;

	$(document).on('ready', function() {
		Timer.load();
	});

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
