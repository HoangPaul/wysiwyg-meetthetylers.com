
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
