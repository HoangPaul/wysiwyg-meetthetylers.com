

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


      <div id="accommodation" class="row landing-block">
        <h1 class="line-heading"><span>Accommodation</span></h1>
        <p>Enim lectus varius inceptos blandit primis morbi libero vel ultrices a a ac tempor a venenatis primis porta. Enim lectus varius inceptos blandit primis morbi libero vel ultrices a a ac tempor a venenatis primis porta</p>
        <div class="row accommodation-wrapper">
          <div class="col-sm-5 accommodation-block">
            <div class="col-sm-12 hotel-list">
              <p>The Kingstone Hotel</p>
              <p>The Kingstone Hotel</p>
              <p>The Kingstone Hotel</p>
              <p>The Kingstone Hotel</p>
            </div>
          </div>
          <div class="col-sm-7">
          </div>
        </div>
      </div>

      <div id="registry" class="row landing-block img-text-card">
        <h1>Registry</h1>
          <div class="clearfix">
            <?php for($i = 0; $i < 12; $i++): ?>
              <div class="col-sm-3 col-md-2">
                <div class="col-sm-12" style="border: 1px #ddd solid; padding: 15px; text-align: center; margin-bottom: 15px;">
                  <img class="img-responsive" src="<?php echo $randomImages->getNextRandomImagePath(); ?>" style="margin-bottom:10px;">
                  <p>Purple monkey dishwasher</p>
                </div>
              </div>
            <?php endfor; ?>
          </div>
      </div>

      <div id="photos" class="row landing-block">
        <h1 class="line-heading"><span style="background-color: #F9F7F1;">Photos</span></h1>
        <div class="clearfix photo-wrapper">
          <?php for($i = 0; $i < 12; $i++): ?>
            <div class="img-text-card">
              <img class="img-responsive" src="<?php echo $photoImages->getNextRandomImagePath(); ?>" style="margin-bottom: 15px;">
              <p>Enim lectus varius inceptos blandit primis morbi libero vel ultrices a a ac tempor</p>
            </div>
          <?php endfor; ?>
        </div>
      </div>

      <div class="rsvp-button-wrapper clearfix">
        <button type="button" class="btn btn-success center-block" data-toggle="modal" data-target="#rsvp-modal">
          RSVP
        </button>
        <span class="rsvp-reminder-text text-center">Don't forget to RSVP! Deadline is in <span class="rsvp-reminider-text-time">6 days</span>.</span>
      </div>
