<script id="synopsis-card-text" type="text/x-handlebars-template">
    <div class="card-block card-tilt-right">
      <img class="img-responsive" src="{{image}}">
      <h1 class="card-heading"><span>{{title}}</span></h1>
    </div>
    <div class="card-text">
      <p>{{synopsis}}</p>
    </div>
</script>

<script id="synopsis" type="text/x-handlebars-template">
    <div class="container">
      <div class="row section">
        <div class="col-sm-6 wow fadeInLeft" data-wow-offset="100">
          {{> synopsis-card-text bride }}
        </div>
        <div class="col-sm-6 wow fadeInRight" data-wow-offset="100">
          {{> synopsis-card-text groom }}
        </div>
      </div>
    </div>
</script>
