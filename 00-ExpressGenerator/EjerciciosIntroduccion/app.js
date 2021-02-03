var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var ej01Router = require('./routes/ej01Router');
var ej02Router = require('./routes/ej02Router');
var ej03Router = require('./routes/ej03Router');
var ej04Router = require('./routes/ej04Router');
var ej05Router = require('./routes/ej05Router');
var ej06Router = require('./routes/ej06Router');
var ej07Router = require('./routes/ej07Router');
var ej08Router = require('./routes/ej08Router');
var ejEXTRA01Router = require('./routes/ejEXTRA01Router');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

app.use('/ej01', ej01Router);
app.use('/ej02', ej02Router);
app.use('/ej03', ej03Router);
app.use('/ej04', ej04Router);
app.use('/ej05', ej05Router);
app.use('/ej06', ej06Router);
app.use('/ej07', ej07Router);
app.use('/ej08', ej08Router);
app.use('/ejEXTRA01', ejEXTRA01Router);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
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
