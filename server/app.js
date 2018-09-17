var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cors = require('cors');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var flk = require('./api/controlers/flick.js');
var Flickr = require('flickr-sdk');
var flickr = new Flickr("e370f8006528ecaccf381abb5834429e");
var index = require('./routes/index');
var users = require('./routes/users');

var app = express();

// view engine setup

app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use('/public', express.static(path.join(__dirname, '../client/app/public')));
app.use('/assets', express.static(path.join(__dirname, '../client/app/assets')));
app.use('/views', express.static(path.join(__dirname, '../client/app/public/views')));
app.use('/imgs', express.static(path.join(__dirname, '../client/app/public/imgs')));
app.use('/node_modules', express.static(path.join(__dirname, './node_modules')));
app.use(cors());


var newArray = [];
var photos = [];
var newPhotos = [];

//imgUrl: "https://farm" + flick.farm +
  //    ".staticflickr.com/" + flick.server +
   //    "/" + flick.id + "_" + flick.secret + "_m.jpg"


 



app.get('/photos', cors(), function(req, res){
  var photos = flk.searchPhotos(req.query.searchTxt);
  console.log(req.query);
  var hi = [];
  photos.then(function(result){
    hi = result;
    console.log(result);
    res.json(hi.photos);
  });
});

app.get('*', function(req, res){
  res.sendFile(path.join(__dirname, '../client/app/index.html'));
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
