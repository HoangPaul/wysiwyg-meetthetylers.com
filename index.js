var express = require('express');
var exphbs = require('express-handlebars');
var bodyParser = require('body-parser');

var api = require('./api');

var app = express();
app.engine('handlebars', exphbs({defaultLayout: 'index'}));
app.set('view engine', 'handlebars');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 

app.use('/assets', express.static('webroot/assets'));
app.use('/images', express.static('webroot/images'));
app.use('/review', express.static('review'));

app.get('/', function (req, res) {
  res.render('index', {layout: false, isAdmin : true});
});

app.use('/api', api);

app.listen(80, function () {
  console.log('Example app listening on port 80!');
});
