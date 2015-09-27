<?php require_once('util/functions.php'); ?>
<?php $randomImages = new RandomImagePath('images/registry'); ?>
<?php $photoImages = new RandomImagePath('images/photos'); ?>
<!DOCTYPE html>
<html lang="en">
  <head>
    <?php require_once('header.php') ?>
  </head>

  <body data-spy="scroll" data-target="#navbar">
    <nav id="navbar" class="navbar navbar-default affix-top center-navbar" data-spy="affix" data-offset-top="50">
      <div class="container">
        <ul class="nav navbar-nav">
        <li><a href="#contact">Contact</a></li>
        <li><a href="#details">Details</a></li>
        <li><a href="#accommodation">Accommodation</a></li>
        <li><a href="#registry">Registry</a></li>
        <li><a href="#photos">Photos</a></li>
      </ul>
      </div>
    </nav>
    <!-- Main jumbotron for a primary marketing message or call to action -->
    <div class="jumbotron">
      <div class="container">
        <h1>Sao & Pat's Wedding</h1>
        <p>1st September 2016</p>
        <p>
          <span class="fa-stack fa-lg">
            <i class="fa fa fa-circle-thin fa-stack-2x"></i>
            <i class="fa fa-chevron-down fa-stack-1x"></i>
          </span>
        </p>
      </div>
    </div>

    <div class="container">
      <div id="contact" class="row section">
        <div data-scroll-target="bride" class="col-sm-6">
          <div id="bride" class="card-block card-tilt-right slide-in from-left">
            <img class="img-responsive" src="images/bg2.jpg">
            <h1 class="card-heading"><span>The Bride</span></h1>
          </div>
          <div class="card-text">
            <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>
          </div>
        </div>
        <div data-scroll-target="groom" class="col-sm-6">
          <div id="groom" class="card-block card-tilt-left slide-in from-right">
            <img class="img-responsive" src="images/bg2.jpg">
            <h1 class="card-heading">The Groom</h1>
          </div>
          <div class="card-text">
            <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>
          </div>
        </div>
      </div>
    </div>

    <div id="timer" class="section counter-section bg-brand-light-3x">
      <div class="container">
        <?php $icons = ['calendar', 'clock-o', 'sliders', 'heart-o'] ?>
        <?php $units = ['DAYS', 'HOURS', 'MINUTES', 'SECONDS']; ?>
        <?php for($i = 0; $i < 4; $i++): ?>
          <div class="col-sm-3 counter-wrapper">
            <div class="counter-icon">
              <i class="fa fa-<?= $icons[$i]; ?> fa-4x fa-fw"></i>
            </div>
            <div class="counter-num">
              <span>14</span>
            </div>
            <div class="counter-unit">
              <span><?= $units[$i]; ?></span>
            </div>
          </div>
      <?php endfor; ?>
      </div>
    </div>

      <div id="details" class="section details-section">
        <div class="container">
          <h1><span>Wedding Details</span></h1>
          <div class="row" style="margin-bottom: 60px">
            <h2 class="text-center"><span>Monday, 1st September, 2015</span></h2>
              <div class="col-sm-5 wedding-details-block card-block">
                <h3 class="heading-block">Reception<small>12 days away</small></h3>
                <div class="col-sm-12">
                  <p><i class="fa fa-fw fa-calendar"></i> Monday, 1st September, 2015</p>
                  <p><i class="fa fa-fw fa-black-tie"></i> Attire Cocktail</p>
                  <p><i class="fa fa-fw fa-clock-o"></i> 3:00pm - 6:00pm</p>
                  <p><i class="fa fa-fw fa-map-marker"></i> Olive Garden?<br>123 Fake Street, Shepparton, Australia</p>
                </div>
              </div>
              <div data-scroll-target="pink" class="col-sm-offset-1 col-sm-6">
                <div id="pink" class="card-block card-tilt-left slide-in from-right">
                  <img class="img-responsive center-block" src="images/flowers/pink.jpg"/>
                </div>
              </div>
          </div>
          <hr class="short-hr">
          <div class="row">
            <h2 class="text-center"><span>Tuesday, 2nd September, 2015</span></h2>
            <div class="col-sm-6">
              <div id="white" class="card-block card-tilt-right slide-in from-left">
                <img class="img-responsive center-block" src="images/flowers/white.jpg"/>
              </div>
                <div id="red" class="card-block card-tilt-left slide-in from-left">
                  <img class="img-responsive center-block" src="images/flowers/red.jpg"/>
                </div>
            </div>
            <div data-scroll-target="white" class="col-sm-offset-1 col-sm-5 wedding-details-block card-block" style="margin-bottom: 45px">
              <h3 class="heading-block">Ceremony<small>13 days away</small></h3>
              <div class="col-sm-12">
                <p><i class="fa fa-fw fa-calendar"></i> Monday, 2nd September, 2015</p>
                <p><i class="fa fa-fw fa-black-tie"></i> Attire Cocktail</p>
                <p><i class="fa fa-fw fa-clock-o"></i> 3:00pm - 6:00pm</p>
                <p><i class="fa fa-fw fa-map-marker"></i>St. James the Lesser Cathedral<br>123 Fake Street, Shepparton, Australia</p>
              </div>
            </div>
            <div data-scroll-target="red" class="col-sm-offset-1 col-sm-5 wedding-details-block card-block">
              <h3 class="heading-block">Rockin' BBQ Afterparty<small>13 days away</small></h3>
              <div class="col-sm-12">
                <p><i class="fa fa-fw fa-calendar"></i> Monday, 2nd September, 2015</p>
                <p><i class="fa fa-fw fa-black-tie"></i> Attire Cocktail</p>
                <p><i class="fa fa-fw fa-clock-o"></i> 3:00pm - 6:00pm</p>
                <p><i class="fa fa-fw fa-map-marker"></i>St. James the Lesser Cathedral<br>123 Fake Street, Shepparton, Australia</p>
              </div>
            </div>
          </div>
      </div>
    </div>

    <div id="rsvp" class="section rsvp-section bg-img-brand-light-3x">
      <div class="container">
        <h1 style="color: white; margin-bottom: 30px">Will you attend?</h1>
        <div class="col-xs-offset-2 col-xs-8 card-block" style="background: white; padding: 30px 15px 15px; border-radius: 4px">
          <form>
            <div class="row form-group">
              <div class="col-sm-6">
                <label>First name<small>(required)</small></label>
                <input type="text" class="form-control" name="lastname">
              </div>
              <div class="col-sm-6">
                <label>Last name<small>(required)</small></label>
                <input type="text" class="form-control" name="lastname">
              </div>
            </div>
            <div class="row form-group">
              <div class="clearfix">
                <div class="col-sm-12">
                  <label>Will you be joining us?<small>(required)</small></label>
                </div>
                <div class="col-sm-6">
                  <div class="rsvp-location-block">
                    <img class="img-responsive" src="images/flowers/green.jpg">
                    <h4 class="text-center">Reception</h4>
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="rsvp-location-block">
                    <img class="img-responsive" src="images/flowers/pink3.jpg">
                    <h4 class="text-center">Wedding</h4>
                  </div>
                </div>
                <div class="col-sm-6 btn-group" data-toggle="buttons">
                  <label class="col-sm-6 btn btn-default active">
                    <input type="radio" name="options" id="option1" autocomplete="off">Yes</input>
                  </label>
                  <label class="col-sm-6 btn btn-default">
                    <input type="radio" name="options" id="option3" autocomplete="off">No</input>
                  </label>
                </div>
                <div class="col-sm-6 btn-group" data-toggle="buttons">
                  <label class="col-sm-6 btn btn-default active">
                    <input type="radio" name="options" id="option1" autocomplete="off">Yes</input>
                  </label>
                  <label class="col-sm-6 btn btn-default">
                    <input type="radio" name="options" id="option3" autocomplete="off">No</input>
                  </label>
                </div>
              </div>
            </div>
            <div class="row form-group">
              <div class="col-sm-12">
                <label>Message</label>
                <textarea class="form-control" name=message placeholder="Please let us know of any alergies or catering issues."></textarea>
              </div>
            </div>
            <div class="form-group">
              <button class="btn btn-primary btn-block btn-submit" type="submit" style="font-size: 24px; padding: 10px 0">Send away!</button>
            </div>
          </form>
        </div>
      </div>
    </div>

    <div class="map-wrapper">
        <div id="map"></div>
    </div>

  <div id="accommodation" class="card-block-full-width">
    <div class="container-fluid">
      <div id="accommodation-callout" data-toggle="false" class="text-center collapse in">
        <h2>Need accommodation? Pick a place to stay.</h2>
      </div>
        <div class="row" style="display: flex">
          <a class="accommodation-item" href="#accommodation-callout">
            <h3 class="accommodation-item-heading">Kingston Hotel</h3>
          </a>
          <a class="accommodation-item" href="#accommodation-callout">
            <h3 class="accommodation-item-heading">Marigold Hotel</h3>
          </a>
          <a class="accommodation-item" href="#accommodation-callout">
            <h3 class="accommodation-item-heading">Tim's Garage</h3>
          </a>
        </div>
        <div class="container">
          <div id="accommodation-details" class="row" style="padding: 15px 0; display: none;">
            <div class="col-sm-4">
              <img class="img-responsive" src="http://placehold.it/1000x1000">
            </div>
            <div class="col-sm-8">
              <h3>The Kingston Hotel</h3>
              <p><i class="fa fa-bed fa-fw"></i> 1 - 4 beds per room</p>
              <p><i class="fa fa-usd fa-fw"></i> $120+ per night <br>$20 off using the coupon <span class="accommodation-coupon">SAOPATWEDDING</span></p>
              <p><i class="fa fa-cutlery fa-fw"></i> Complementary breakfast</p>
              <a href="#">Book a room now</a>
            </div>
          </div>
        </div>
    </div>
  </div>

  <div class="container">
    <div id="photos" class="row section">
      <h1>Photos</h1>
      <div class="clearfix photo-wrapper">
        <?php for($i = 0; $i < 12; $i++): ?>
          <div class="card-block">
            <div class="img-responsive lazy" style="background: url('<?php echo $photoImages->getNextRandomImagePath(); ?>'); margin-bottom: 15px; width: 100%; padding-bottom: 100%;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 50% 50%;"></div>
            <p><a href="#"><span class="photo-author">@user123</span></a><span class="photo-stats"><i class="fa fa-heart"></i> 12 <i class="fa fa-comment fa-flip-horizontal"></i> 3</span></p>
            <p>Enim lectus varius inceptos blandit primis morbi libero</p>
          </div>
        <?php endfor; ?>
      </div>
    </div>
  </div>



    <?php require('modal.php'); ?>

    <hr>

    <footer>
      <p></p>
    </footer>

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
    <?php require_once('footer.php') ?>

</body>
</html>
