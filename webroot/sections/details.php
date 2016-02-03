<script id="feature-partial" type="text/x-handlebars-template">
    <p><i class="fa fa-fw fa-{{icon}} fa-2x"></i> {{text}}</p>
</script>

<script id="detail-card-partial" type="text/x-handlebars-template">
    <div class="wedding-details-block clearfix">
      <h3 class="title">{{title}}</h3>
      <div class="col-sm-12">
            {{#each features}}
                {{> feature this }}
            {{/each}}
      </div>
    </div>
</script>

<script id="detail-image-partial" type="text/x-handlebars-template">
    <div class="card-block" style="margin-bottom: 0;">
      <img class="img-responsive center-block" src="{{image}}"/>
    </div>
</script>

<script id="details-partial" type="text/x-handlebars-template">
    <div id="details" class="section details-section">
      <div class="container">
        <h1><span>Wedding Details</span></h1>
        <h2 class="text-center"><span>Monday, 1st September, 2015</span></h2>
        <div class="row details-day-section">
            <div class="col-xs-12 col-sm-5 wow fadeInLeft" data-wow-offset="80">
                {{> detail-card details.wedding }}
            </div>
            <div class="col-xs-12 col-sm-7 details-images-wrapper">
              <div class="wow fadeInRight" data-wow-offset="100">
                  {{#each details.wedding.images }}
                      {{> detail-image this }}
                  {{/each}}
              </div>
            </div>
        </div>
        <hr class="short-hr">
        <h2 class="text-center"><span>Tuesday, 2nd September, 2015</span></h2>
        <div class="row details-day-section">
            <div class="col-sm-5 wow fadeInLeft" data-wow-offset="80">
                <div class="wedding-details-block clearfix" style="margin-bottom: 45px">
                    {{> detail-card details.reception }}
                </div>
                <div class="wedding-details-block clearfix">
                    {{> detail-card details.reception.viet }}
                </div>
            </div>
            <div class="col-sm-7 details-images-wrapper">
                <div class="wow fadeInRight" data-wow-offset="300">
                    {{#each details.reception.images }}
                        {{> detail-image this }}
                    {{/each}}
                    {{#each details.reception.viet.images }}
                        {{> detail-image this }}
                    {{/each}}
                </div>
              </div>
          </div>
      </div>
    </div>
</script>

details {
    'wedding' : {
        'title' : 'Wedding',
        'features' : [
            {
                icon : 'calendar',
                text : 'Monday, 1st September, 2015'
            },
            {
                icon : 'black-tie',
                text : 'Attire Cocktail'
            },
            {
                icon : 'clock-o',
                text : '3:00pm - 6:00pm'
            },
            {
                icon : 'map-marker',
                text : 'Olive Garden\n123 Fake Street, Shepparton, Australia'
            },
        ],
        'images' : [
            {
                image : 'https://placehold.it/400x400'
            },
            {
                image : 'https://placehold.it/400x400'
            },
            {
                image : 'https://placehold.it/400x400'
            },
            {
                image : 'https://placehold.it/400x400'
            },
        ]
    },
    'reception' {
        'title' : 'Reception',
        'features' : [
            {
                icon : 'calendar',
                text : 'Monday, 1st September, 2015'
            },
            {
                icon : 'black-tie',
                text : 'Monday, 1st September, 2015'
            },
            {
                icon : 'clock-o',
                text : 'Monday, 1st September, 2015'
            },
            {
                icon : 'map-marker',
                text : 'Monday, 1st September, 2015'
            },
        ],
        'images' : [
            {
                image : 'https://placehold.it/400x400'
            },
            {
                image : 'https://placehold.it/400x400'
            },
            {
                image : 'https://placehold.it/400x400'
            },
            {
                image : 'https://placehold.it/400x400'
            },
        ]
    }
    'reception-viet' : {
        'title' : 'Vietnamese Reception (Family only)',
        'features' : [
            {
                icon : 'calendar',
                text : 'Monday, 1st September, 2015'
            },
            {
                icon : 'black-tie',
                text : 'Monday, 1st September, 2015'
            },
            {
                icon : 'clock-o',
                text : 'Monday, 1st September, 2015'
            },
            {
                icon : 'map-marker',
                text : 'Monday, 1st September, 2015'
            },
        ],
        'images' : [
            {
                image : 'https://placehold.it/400x400'
            },
            {
                image : 'https://placehold.it/400x400'
            },
            {
                image : 'https://placehold.it/400x400'
            },
            {
                image : 'https://placehold.it/400x400'
            },
        ]
    }
}
