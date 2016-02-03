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
        <?php require_once('sections/jumbotron.php'); ?>
        <div id="asd"></div>

        <?php require_once('sections/synopsis.php'); ?>

        <?php require_once('sections/timer.php'); ?>

        <?php require_once('sections/details.php'); ?>

        <?php require_once('sections/rsvp.php'); ?>

        <?php require_once('sections/registry.php'); ?>

    <footer>
      <p>Designed and developed by the <a href="#">brother</a> of the bride</p>
    </footer>

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
    <?php require_once('footer.php') ?>

</body>
</html>
