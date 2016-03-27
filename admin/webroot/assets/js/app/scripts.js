define(["jquery", "./timer"], function($, Timer) {
    var jQuery = $;

	$(document).on('ready', function() {
		Timer.load();
	});

    new WOW().init();

    $(document).on('submit', 'form', function(e) {
        var oldText = $('[data-form-button]').html();
        $.ajax({
            type: 'POST',
            url: $(this).attr('action'),
            data: $(this).serialize(),
            crossDomain: true,
            error: function(e) {
                setTimeout(function() {
                    alert('Ack, we encountered a fatal error. Please get in contact with Sao or Pat to place your RSVP');
                    $('[data-form-button]').html(oldText);
                }, 1000);
            },
            success: function(e) {
                setTimeout(function() {
                    $('[data-form-button]').html('Thank you!');
                }, 1000);
            },
            timeout: 10000
        });
        $('[data-form-button]').html('<i class="fa fa-refresh fa-spin"></i>');
        return false;
    });

	$(document).on('click', '[data-read-more]', function(e) {
		$(this).prev().toggleClass('active');
		//$(this).addClass('active');
		$(this).hide();
	});

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
