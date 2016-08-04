define(["jquery", "./timer"], function($, Timer) {
    var jQuery = $;

	$(document).on('ready', function() {
		Timer.load();
	});

    new WOW().init();

    $(document).on('submit', 'form', function(e) {
        var oldText = $('[data-form-button]').html();
        var $button = $('[data-form-button]');
        $.ajax({
            type: 'POST',
            url: $(this).attr('action'),
            data: $(this).serialize(),
            crossDomain: true,
            error: function(e) {
                setTimeout(function() {
                    alert('Ack, we encountered a fatal error. Please get in contact with Sao or Pat to place your RSVP');
                    $button.html(oldText);
                }, 1000);
            },
            success: function(e) {
                setTimeout(function() {
                    $button.html('Thank you!');
                    $button.prop('disabled', true);
                    $button.removeClass('btn-primary');
                    $button.addClass('btn-success');
                }, 1000);
            },
            timeout: 10000
        });
        $button.html('<i class="fa fa-refresh fa-spin"></i>');
        return false;
    });

	$(document).on('click', '[data-read-more]', function(e) {
		$(this).prev().toggleClass('active');
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
});
