//Install express server
const port = process.env.PORT || '7000';
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

//controller

const app = express();
app.set('views', __dirname + '/dist/woodtown_angular'); // Set views (index.html) to root directory
app.use(express.static(__dirname + '/dist/woodtown_angularr'));


app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Methods', 'GET,HEAD,PUT,PATCH,POST,DELETE');
  res.header('Access-Control-Expose-Headers', 'Content-Length');
  res.header('Access-Control-Allow-Headers', '*');
  return next();
});


app.use(bodyParser.json({
  limit: '100mb'
}));

app.use(bodyParser.urlencoded({
  limit: '100mb',
  extended: true
}));



app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname + '/dist/woodtown_angular/index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(port);
console.log('app listing ', port);
