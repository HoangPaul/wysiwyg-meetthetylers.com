<script id="time-unit" type="text/x-handlebars-template">
    <div class="col-sm-3 counter-wrapper">
      <div class="counter-icon">
        <i class="fa fa-{{icon}} fa-fw"></i>
      </div>
      <div id="{{short-unit}}" class="counter-num">
        <span>14</span>
      </div>
      <div class="counter-unit">
        <span>{{short-unit}}</span>
      </div>
    </div>
</script>

<script id="timer-partial" type="text/x-handlebars-template">
    <div id="timer" class="section counter-section bg-brand-light-3x">
      <div class="container">
            {{#each time-units}}
                {{> time-unit this }}
            {{/each}}
      </div>
    </div>
</script>
