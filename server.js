var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

//application
var app = express();
var PORT = 3000;

app.use(express.static(path.join(__dirname, './app/public')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());

//application routes
require(path.join(__dirname, './app/routes/apiRoutes'))(app);
require(path.join(__dirname, './app/routes/htmlRoutes'))(app);

//PORT
app.listen(PORT, function() {
  console.log('Friend Finder app is listening on PORT: ' + PORT);
});
