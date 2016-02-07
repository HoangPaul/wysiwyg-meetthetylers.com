<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="author" content="Paul Hoang">
    <link rel="icon" href="favicon.ico">
    <title>Prototype v2.5</title>
    <link rel="stylesheet" href="styles.css">
    <link href='https://fonts.googleapis.com/css?family=Tangerine:700' rel='stylesheet' type='text/css'>
    <link href='https://fonts.googleapis.com/css?family=PT+Sans' rel='stylesheet' type='text/css'>
    <link href='https://fonts.googleapis.com/css?family=Roboto' rel='stylesheet' type='text/css'>
    <link href='https://fonts.googleapis.com/css?family=Lobster' rel='stylesheet' type='text/css'>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css">
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

    <div id="asd"></div>

    <div id="overlay" data-target="" style="padding: 20px;">
        <textarea data-overlay-text class="form-control" rows="3"></textarea>
        <button data-overlay-submit class="btn btn-primary">Save Changes</button>
    </div>

    <footer>
        <p>Designed and developed by the <a href="#">brother</a> of the bride</p>
    </footer>

    <script data-main="js/app" src="js/require.js"></script>
</body>

</html>
