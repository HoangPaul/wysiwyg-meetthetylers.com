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
        <div class="row">
          <div class="col-sm-6">
            <div class="card-block card-tilt-right">
              <img class="img-responsive" src="images/bg2.jpg">
              <h1 class="card-heading line-heading-brand-full"><span>The Bride</span></h1>
            </div>
            <div class="card-text">
              <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>
            </div>
          </div>
          <div class="col-sm-6">
            <div class="card-block card-tilt-left">
              <img class="img-responsive" src="images/bg2.jpg">
              <h1 class="card-heading">The Groom</h1>
            </div>
            <div class="card-text">
              <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>
            </div>
          </div>
        </div>
      </div>
    </div>

      <div id="details" class="section card-block-full-width">
        <div class="container">
          <h1 class="line-heading-brand"><span>Wedding Details</span></h1>
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
    </div>

    <div class="map-wrapper">
        <div id="map"></div>
    </div>

  <div id="accommodation" class="card-block-full-width">
    <div class="container-fluid">
      <div class="text-center" style="padding-bottom: 10px;">
        <h2>Need accommodation? Pick a place to stay.</h2>
      </div>
        <div class="row" style="display: flex">
          <div style="background: magenta; min-height: 50px; flex: 1; position: relative;">
            <div style="position: absolute; top: -20px;">
              Hello world!
            </div>
          </div>
          <div style="background: blue; min-height: 50px; flex: 1;">
          </div>
          <div style="background: red; min-height: 50px; flex: 1;">
          </div>
        </div>
    </div>
  </div>


    <?php require('modal.php'); ?>

    <hr>

    <footer>
      <p></p>
    </footer>

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.js"></script>
    <?php require_once('footer.php') ?>

</body>
</html>
