var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var addUsersRouter = require('./routes/add');
var dashRouter = require('./routes/dash');
var removeUserRouter = require('./routes/remove');
var updateDosageRouter = require('./routes/update_dosage');
var postUpdateDosageRouter = require('./routes/post_update_dosage');
var postAddRouter = require('./routes/post_add');
var postRemoveRouter = require('./routes/post_remove');
var getCalendarDataRouter = require('./routes/get_calendar_data');
var removeMedRouter = require('./routes/remove_med');
var addMedRouter = require('./routes/add_med');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
//app.use(express.static(path.join(__dirname, 'views')));

app.use('/', indexRouter);
app.use('/add_user', addUsersRouter);
app.use('/dash', dashRouter);
app.use('/remove_user', removeUserRouter);
app.use('/update_dosage', updateDosageRouter);
app.use('/post_update_dosage', postUpdateDosageRouter);
app.use('/post_add', postAddRouter);
app.use('/post_remove', postRemoveRouter);
app.use('/get_calendar_data', getCalendarDataRouter);
app.use('/remove_med', removeMedRouter);
app.use('/add_med', addMedRouter);

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

app.listen(3000, '0.0.0.0', () => {
  console.log('Listening to port : 3000');
});

module.exports = app;
