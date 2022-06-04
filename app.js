var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
// Mi ruta
var alumnosRouter = require('./routes/alumnoRuta');
//
var app = express();
var bodyParser = require('body-parser');

/////////////////////NUEVO////////////////////
const port = process.env.PORT || 8080;
//////////////////////////////////////////////

//Abrir conexion con DB///////////////////////////////////////////////////////////////////////////////////
//var mongoDB = 'mongodb://127.0.0.1:27017/dbAlumnos';
//mongoose.connect(mongoDB,{useNewUrlParser:true,useUnifiedTopology:true});
//mongoose.Promise = global.Promise;
//var dbP = mongoose.connection;
//dbP.on('error', console.error.bind(console,'MongoDB connection error:'));
/////////////////////////////////////////////////////////////////////////////////////////////////////////




/////Abrir conexion con DB///////////////////////////////////////////////////////////////////////////////
const mongoose = require('mongoose');
const {
  MONGO_USERNAME,
  MONGO_PASSWORD,
  MONGO_HOSTNAME,
  MONGO_PORT,
  MONGO_DB
} = process.env;

const options = {
  useNewUrlParser: true,
  //reconnectTries: Number.MAX_VALUE,
  //reconnectInterval: 500,
  connectTimeoutMS: 10000,
};
const url = `mongodb://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_HOSTNAME}:${MONGO_PORT}/${MONGO_DB}?authSource=admin`;

const url2 = `mongodb://userdemo:Tecsup@127.0.0.1:27017/dbAlumnos?authSource=admin`;
mongoose.connect(url2, options).then( 
  function() {
  console.log('MongoDB is connected');
  })
  .catch( function(err) {
  console.log(err);
  }
);
mongoose.Promise = global.Promise;
var dbP = mongoose.connection;
///////////////////////////////////////////////////////////////////////////////////////////////////////








// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', indexRouter);
app.use('/users', usersRouter);
// usar mi ruta
app.use('/alumnos', alumnosRouter);
//




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


///////////////////////NUEVO/////////////////////
app.listen(port, function () {
  console.log(`App para dbAlumnos listening on ${port}!`);
});
////////////////////////////////////////////////


module.exports = app;
