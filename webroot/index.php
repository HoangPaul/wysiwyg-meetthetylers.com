<?php require_once('util/functions.php'); ?>
<?php $randomImages = new RandomImagePath('images/registry'); ?>
<?php $photoImages = new RandomImagePath('images/photos'); ?>
<html lang="en">
  <head>
    <?php require_once('header.php') ?>
  </head>

  <body>
    <nav class="navbar navbar-inverse affix-top" data-spy="affix" data-offset-top="50">
      <div class="container">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="#">Home</a>
        </div>
        <ul class="nav navbar-nav navbar-right">
        <li><a href="#registry">Contact</a></li>
        <li><a href="#details">Details</a></li>
        <li><a href="#details">Accommodation</a></li>
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
      <div id="details" class="row landing-block">
        <div class="row">
          <div class="col-sm-12">
            <div class="img-text-card">
              <img class="img-responsive" src="images/bg2.jpg">
              <h1>How we met</h1>
              <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>
            </div>
          </div>
        </div>
      </div>

      <div class="row landing-block img-text-card">
        <h1>Wedding Details</h1>
        <div class="row">
          <div class="col-sm-6 wedding-details-block">
            <h3 class="heading-block">Reception<small>12 days away</small></h3>
            <div class="col-sm-12">
              <p><i class="fa fa-fw fa-calendar"></i> Monday, 1st September, 2015</p>
              <p><i class="fa fa-fw fa-black-tie"></i> Attire Cocktail</p>
              <p><i class="fa fa-fw fa-clock-o"></i> 3:00pm - 6:00pm</p>
              <p><i class="fa fa-fw fa-map-marker"></i> Olive Garden?<br>123 Fake Street, Shepparton, Australia</p>
            </div>
          </div>
          <div class="col-sm-6 wedding-details-block">
            <h3 class="heading-block">Ceremony<small>13 days away</small></h3>
            <div class="col-sm-12">
              <p><i class="fa fa-fw fa-calendar"></i> Monday, 2nd September, 2015</p>
              <p><i class="fa fa-fw fa-black-tie"></i> Attire Cocktail</p>
              <p><i class="fa fa-fw fa-clock-o"></i> 3:00pm - 6:00pm</p>
              <p><i class="fa fa-fw fa-map-marker"></i>St. James the Lesser Cathedral<br>123 Fake Street, Shepparton, Australia</p>
            </div>
          </div>
        </div>
        <div class="rsvp-button-wrapper clearfix">
          <button type="button" class="btn btn-success center-block" data-toggle="modal" data-target="#rsvp-modal">
            RSVP
          </button>
          <span class="rsvp-reminder-text text-center">Don't forget to RSVP! Deadline is in <span class="rsvp-reminider-text-time">6 days</span>.</span>
        </div>
        <!--
        <div class="map-wrapper">
          <div id="map"></div>
        </div>
      -->
      </div>

      <div class="row landing-block img-text-card">
        <h1>Accommodation</h1>
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
            <div id="map"></div>
          </div>
        </div>
      </div>

      <div class="row landing-block img-text-card">
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

      <div class="row landing-block">
        <h1>Photos</h1>
        <div class="clearfix photo-wrapper">
          <?php for($i = 0; $i < 12; $i++): ?>
            <div class="img-text-card">
              <img class="img-responsive" src="<?php echo $photoImages->getNextRandomImagePath(); ?>" style="margin-bottom: 15px;">
              <p>Enim lectus varius inceptos blandit primis morbi libero vel ultrices a a ac tempor</p>
            </div>
          <?php endfor; ?>
        </div>
      </div>
    </div>

    <div class="rsvp-modal modal fade" id="rsvp-modal" tab-index="-1" role="dialog">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h1>RSVP</h1>
          </div>
          <div class="modal-body">
            <form>
              <div class="row form-row">
                <div class="col-sm-6">
                  <label>First name<small>(required)</small></label>
                  <input type="text" class="form-control" name="lastname">
                </div>
                <div class="col-sm-6">
                  <label>Last name<small>(required)</small></label>
                  <input type="text" class="form-control" name="lastname">
                </div>
              </div>
              <div class="row form-row">
                <div class="clearfix">
                  <div class="col-sm-12">
                    <label>Will you be joining us?<small>(required)</small></label>
                  </div>
                  <div class="col-sm-6">
                    <h4>Reception</h4>
                  </div>
                  <div class="col-sm-6">
                    <h4>Wedding</h4>
                  </div>
                  <div class="col-sm-6">
                    <div class="btn-group" data-toggle="buttons">
                      <label class="btn btn-default active">
                        <input type="radio" name="options" id="option1" autocomplete="off">Yes
                      </label>
                      <label class="btn btn-default">
                        <input type="radio" name="options" id="option3" autocomplete="off">No
                      </label>
                    </div>
                  </div>
                  <div class="col-sm-6">
                    <div class="btn-group" data-toggle="buttons">
                      <label class="btn btn-default active">
                        <input type="radio" name="options" id="option1" autocomplete="off">Yes
                      </label>
                      <label class="btn btn-default">
                        <input type="radio" name="options" id="option3" autocomplete="off">No
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row form-row">
                <div class="col-sm-6">
                  <label>Number of guests<small>(required)</small></label>
                  <select class="form-control" name="numGuests">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                  </select>
                </div>
                <div class="col-sm-6">
                  <label>Number of guests<small>(required)</small></label>
                  <select class="form-control" name="numGuests">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                  </select>
                </div>
              </div>
              <div class="row form-row">
                <div class="col-sm-12">
                  <label>Message</label>
                  <textarea class="form-control" name=message></textarea>
                </div>
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
            <button type="button" class="btn btn-success">RSVP</button>
          </div>
        </div>
      </div>
    </div>

      <hr>

      <footer>
        <p></p>
      </footer>

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js"></script>
    <?php require_once('footer.php') ?>

</body>
</html>
