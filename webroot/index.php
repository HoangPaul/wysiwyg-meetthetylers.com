<?php require_once('util/functions.php'); ?>
<?php $options = ['fileExtentions' => ['jpg', 'png', 'gif']]; ?>
<?php $randomImages = new RandomImagePath('images/flowers', $options); ?>
<?php $photoImages = new RandomImagePath('images/photos', $options); ?>
<!DOCTYPE html>
<html lang="en">
    <head>
        <?php require_once('header.php') ?>
    </head>

    <body data-spy="scroll" data-target="#navbar">
        <nav id="navbar" class="navbar navbar-default affix-top center-navbar" data-spy="affix" data-offset-top="50">
            <button type="button" class="navbar-toggle navbar-hamburger" data-toggle="offcanvas" data-target="#asd123" data-canvas="body" aria-expanded="false">
                <span class="sr-only">Toggle navigation</span>
                <i class="fa fa-bars fa-2x"></i>
            </button>
            <div id="asd123" class="container navmenu-fixed-right-xs offcanvas-xs">
                <h4 class="offcanvas-heading">Sao & Pat's Wedding</h4>
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
                <div class="heading">
                    <h1>Sao & Pat's Wedding</h1>
                    <p>1st September 2016</p>
                </div>
                <div class="heading-bottom">
                    <p>
                        <span class="fa-stack fa-lg">
                            <i class="fa fa fa-circle-thin fa-stack-2x"></i>
                            <i class="fa fa-chevron-down fa-stack-1x"></i>
                        </span>
                    </p>
                </div>
            </div>
        </div>

    <div class="container">
      <div id="contact" class="row section">
        <div class="col-sm-6 wow fadeInLeft" data-wow-offset="300">
          <div id="bride" class="card-block card-tilt-right">
            <img class="img-responsive" src="<?= $randomImages->getNextRandomImagePath(); ?>">
            <h1 class="card-heading"><span>The Bride</span></h1>
          </div>
          <div data-scroll-target="#bride" class="card-text">
            <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>
          </div>
        </div>
        <div class="col-sm-6 wow fadeInRight" data-wow-offset="300">
          <div id="groom" class="card-block card-tilt-left">
            <img class="img-responsive" src="<?= $randomImages->getNextRandomImagePath(); ?>">
            <h1 class="card-heading">The Groom</h1>
          </div>
          <div data-scroll-target="#groom" class="card-text">
            <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>
          </div>
        </div>
      </div>
    </div>

    <div id="timer" class="section counter-section bg-brand-light-3x">
      <div class="container">
        <?php $icons = ['calendar', 'clock-o', 'sliders', 'heart-o'] ?>
        <?php $longUnits = ['DAYS', 'HOURS', 'MINUTES', 'SECONDS']; ?>
        <?php $shortUnits = ['DAYS', 'HRS', 'MINS', 'SECS']; ?>
        <?php for($i = 0; $i < 4; $i++): ?>
          <div class="col-sm-3 counter-wrapper">
            <div class="counter-icon">
              <i class="fa fa-<?= $icons[$i]; ?> fa-fw"></i>
            </div>
            <div id="<?= strtolower($longUnits[$i]); ?>" class="counter-num">
              <span>14</span>
            </div>
            <div class="counter-unit">
              <span><?= $shortUnits[$i]; ?></span>
            </div>
          </div>
      <?php endfor; ?>
      </div>
    </div>

      <div id="details" class="section details-section">
        <div class="container">
          <h1><span>Wedding Details</span></h1>
          <h2 class="text-center"><span>Monday, 1st September, 2015</span></h2>
          <div class="row" style="margin-bottom: 60px; display: flex; align-items: center;">
              <div class="col-sm-5 wow fadeInLeft" data-wow-offset="280">
                <div class="wedding-details-block clearfix">
                  <h3 class="title">Reception</h3>
                  <div class="col-sm-12">
                    <p><i class="fa fa-fw fa-calendar fa-2x"></i> Monday, 1st September, 2015</p>
                    <p><i class="fa fa-fw fa-black-tie fa-2x"></i> Attire Cocktail</p>
                    <p><i class="fa fa-fw fa-clock-o fa-2x"></i> 3:00pm - 6:00pm</p>
                    <p data-scroll-target=".reception-images"><i class="fa fa-fw fa-map-marker fa-2x"></i> Olive Garden?<br>123 Fake Street, Shepparton, Australia</p>
                  </div>
                </div>
              </div>
              <div class="col-sm-7 details-images-wrapper">
                <?php $tilts = ['transform: rotate(15deg);', 'transform: rotate(-10deg);', 'transform: rotate(-5deg);', 'transform: rotate(10deg);',
                                'transform: rotate(-15deg);', 'transform: rotate(10deg);', 'transform: rotate(-5deg);', 'transform: rotate(10deg);'] ?>
                <?php $sizes = ['col-sm-10 col-lg-6', 'col-sm-8 col-lg-6', 'col-sm-6', 'col-sm-6'] ?>
                <?php $classIds = 'reception-images'; ?>
                <div class="wow fadeInRight" data-wow-offset="300">
                    <?php for ($i = 0; $i < 4; $i++): ?>
                      <div class="<?= $classIds; ?> <?= $sizes[$i]; ?> card-block" style="margin-bottom: 0; <?= $tilts[$i]; ?>;">
                        <img class="img-responsive center-block" src="<?= $randomImages->getNextRandomImagePath(); ?>"/>
                      </div>
                    <?php endfor; ?>
                </div>
              </div>
          </div>
          <hr class="short-hr">
          <h2 class="text-center"><span>Tuesday, 2nd September, 2015</span></h2>
          <div class="row" style="display: flex; align-items: center;">
            <div class="col-sm-7 details-images-wrapper">
              <?php $imageSizes = ['col-sm-12 col-lg-8', 'col-sm-8 col-md-6', 'col-sm-12 col-md-6', 'col-sm-12 col-md-11 col-lg-8', 'col-sm-12 col-md-12 col-lg-10', 'col-sm-6', 'col-sm-12']; ?>
              <?php $imageClasses = ['ceremony-images', 'ceremony-images', 'ceremony-images', 'after-images', 'after-images', 'after-images'];?>
              <div class="wow fadeInLeft" data-wow-offset="300">
                  <?php for ($i = 0; $i < 5; $i++): ?>
                    <div class="card-block <?= $imageSizes[$i]; ?> <?= $imageClasses[$i]; ?>" style="<?= $tilts[$i]; ?>">
                      <img class="img-responsive center-block" src="<?= $randomImages->getNextRandomImagePath(); ?>"/>
                    </div>
                  <?php endfor; ?>
              </div>
            </div>
            <div class="col-sm-5 wow fadeInRight" data-wow-offset="280">
              <div data-scroll-target="white" class="wedding-details-block clearfix" style="margin-bottom: 45px">
                <h3 class="title">Ceremony</h3>
                <div class="col-sm-12">
                  <p><i class="fa fa-fw fa-calendar"></i> Monday, 2nd September, 2015</p>
                  <p><i class="fa fa-fw fa-black-tie"></i> Attire Cocktail</p>
                  <p><i class="fa fa-fw fa-clock-o"></i> 3:00pm - 6:00pm</p>
                  <p data-scroll-target=".ceremony-images"><i class="fa fa-fw fa-map-marker"></i>St. James the Lesser Cathedral<br>123 Fake Street, Shepparton, Australia</p>
                </div>
              </div>
              <div class="wedding-details-block clearfix">
                <h3 class="title">Rockin' BBQ Afterparty</h3>
                <div class="col-sm-12">
                  <p><i class="fa fa-fw fa-calendar"></i> Monday, 2nd September, 2015</p>
                  <p><i class="fa fa-fw fa-black-tie"></i> Attire Cocktail</p>
                  <p><i class="fa fa-fw fa-clock-o"></i> 3:00pm - 6:00pm</p>
                  <p data-scroll-target=".after-images"><i class="fa fa-fw fa-map-marker"></i>St. James the Lesser Cathedral<br>123 Fake Street, Shepparton, Australia</p>
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>

    <div id="rsvp" class="section rsvp-section bg-img-brand-light-3x">
      <div class="container wow fadeInUp" data-wow-offset="500">
        <h1 style="color: white; margin-bottom: 30px">Will you attend?</h1>
        <div class="col-xs-offset-2 col-xs-8 card-block" style="background: white; padding: 30px 15px 15px; border-radius: 4px">
          <h3 style="text-align: center">R.S.V.P</h3>
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
                    <img id="reception-form" class="img-responsive img-filter-transition" src="images/flowers/green.jpg">
                    <h4 class="text-center">Reception</h4>
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="rsvp-location-block">
                    <img id="wedding-form" class="img-responsive img-filter-transition" src="images/flowers/pink3.jpg">
                    <h4 class="text-center">Wedding</h4>
                  </div>
                </div>
                <div class="col-sm-6 btn-group" data-toggle="buttons">
                  <label class="col-sm-6 btn btn-default active">
                    <input data-img="reception-form" data-img-type="yes" type="radio" name="reception" id="option1" autocomplete="off">Yes</input>
                  </label>
                  <label class="col-sm-6 btn btn-default">
                    <input data-img="reception-form" data-img-type="no" type="radio" name="reception" id="option3" autocomplete="off">No</input>
                  </label>
                </div>
                <div class="col-sm-6 btn-group" data-toggle="buttons">
                  <label class="col-sm-6 btn btn-default active">
                    <input data-img="wedding-form" data-img-type="yes" type="radio" name="wedding" id="option1" autocomplete="off">Yes</input>
                  </label>
                  <label class="col-sm-6 btn btn-default">
                    <input data-img="wedding-form" data-img-type="no" type="radio" name="wedding" id="option3" autocomplete="off">No</input>
                  </label>
                </div>
              </div>
            </div>
            <div class="row form-group">
              <div class="col-sm-12">
                <label>Message</label>
                <textarea class="form-control" name=message placeholder="Please let us know of any allergies or catering issues."></textarea>
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
        <div class="map-overlay col-sm-offset-1 col-lg-offset-1 col-sm-4 col-md-3 col-lg-2">
          <div class="card-block" style="margin-bottom: 30px;">
              <h5 style="text-align: center">Monday, 1st September, 2015</h5>
              <ul class="list-unstyled map-overlay-marker-list">
                <li class="active" data-toggle="clickable-show-unique" data-target="[data-id='map-content-reception']" data-group="map-legend">
                  <a href="#">
                    <i class="fa fa-gift fa-fw fa-lg"></i>
                    Reception
                  </a>
                </li>
              </ul>
              <h5 style="text-align: center">Tuesday, 2nd September, 2015</h5>
              <ul class="list-unstyled map-overlay-marker-list">
                <li data-toggle="clickable-show-unique" data-target="[data-id='map-content-marry']" data-group="map-legend">
                  <a href="#">
                    <i class="fa fa-star fa-fw fa-lg"></i>
                    St. James Cathedral
                  </a>
                </li>
                <li data-toggle="clickable-show-unique" data-target="[data-id='map-content-bbq']" data-group="map-legend">
                  <a href="#">
                    <i class="fa fa-fire fa-fw fa-lg"></i>
                    Rockin' BBQ
                  </a>
                </li>
              </ul>
          </div>
        </div>
        <div class="map-overlay map-overlay-marker-content active card-block col-sm-offset-1 col-lg-offset-9 col-sm-4 col-md-3 col-lg-2"  data-id="map-content-reception" data-group="map-legend">
            <h5 class="title">Reception<small data-toggle="clickable-hide-all" data-group="map-legend"><a href="#"><i class="fa fa-times fa-fw fa-lg"></i></a></small></h5>
            <img class="img-responsive center-block" src="<?= $randomImages->getNextRandomImagePath(); ?>">
            <div class="info-block">
                <p><i class="fa fa-map-marker fa-fw"></i> 123 Fake Street, Shepparton, Australia</p>
                <p><i class="fa fa-car fa-fw"></i> ~5 minutes travel time to all venues</p>
                <p class="footer-link"><a href="#">View on Google Maps</a></p>
            </div>
        </div>
        <div class="map-overlay map-overlay-marker-content card-block col-sm-offset-1 col-lg-offset-9 col-sm-4 col-md-3 col-lg-2" data-id="map-content-marry" data-group="map-legend">
            <h5 class="title">St. James Cathedral<small data-toggle="clickable-hide-all" data-group="map-legend"><a href="#"><i class="fa fa-times fa-fw fa-lg"></i></a></small></h5>
            <img class="img-responsive center-block" src="<?= $randomImages->getNextRandomImagePath(); ?>">
            <div class="info-block">
                <p><i class="fa fa-map-marker fa-fw"></i> 123 Fake Street, Shepparton, Australia</p>
                <p><i class="fa fa-car fa-fw"></i> ~5 minutes travel time to all venues</p>
                <p class="footer-link"><a href="#">View on Google Maps</a></p>
            </div>
        </div>
        <div class="map-overlay map-overlay-marker-content card-block col-sm-offset-1 col-lg-offset-9 col-sm-4 col-md-3 col-lg-2" data-toggle="map-content" data-id="map-content-bbq" data-group="map-legend">
            <h5 class="title">Rockin' BBQ<small data-toggle="clickable-hide-all" data-group="map-legend"><a href="#"><i class="fa fa-times fa-fw fa-lg"></i></a></small></h5>
            <img class="img-responsive center-block" src="<?= $randomImages->getNextRandomImagePath(); ?>">
            <div class="info-block">
                <p><i class="fa fa-map-marker fa-fw"></i> 123 Fake Street, Shepparton, Australia</p>
                <p><i class="fa fa-car fa-fw"></i> ~5 minutes travel time to all venues</p>
                <p class="footer-link"><a href="#">View on Google Maps</a></p>
            </div>
        </div>
        <div class="map-overlay map-overlay-marker-content card-block col-sm-offset-1 col-lg-offset-9 col-sm-4 col-md-3 col-lg-2" data-toggle="map-content" data-id="map-content-accomodation-olive-garden" data-group="map-legend">
            <h5 class="title">Hotels<small data-toggle="clickable-hide-all" data-group="map-legend"><a href="#"><i class="fa fa-times fa-fw fa-lg"></i></a></small></h5>
            <div class="info-block">
                <p><i class="fa fa-bed fa-fw"></i> 1 - 4 beds per room</p>
                <p><i class="fa fa-usd fa-fw"></i> $120+ per night</p>
                <p><i class="fa fa-cutlery fa-fw"></i> Complementary breakfast</p>
                <p><i class="fa fa-map-marker fa-fw"></i> 123 Fake Street, Shepparton, Australia</p>
                <p><i class="fa fa-car fa-fw"></i> ~5 minutes travel time to all venues</p>
                <p class="footer-link"><a href="#">Visit their website</a></p>
            </div>
        </div>
    </div>

    <?php require('modal.php'); ?>

    <footer>
      <p>Designed and developed wtih <i class="fa fa-heart"></i> by the brother of the bride, <a href="#">Paul Hoang</a></p>
    </footer>

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
    <?php require_once('footer.php') ?>

</body>
</html>
