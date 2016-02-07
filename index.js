var express = require('express');
var app = express();

var bodyParser = require('body-parser');

var api = require('./api');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 
app.use(express.static('webroot'));

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.use('/api', api);

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
