const createError = require('http-errors'),
  express = require('express'),
  path = require('path'),
  cookieParser = require('cookie-parser'),
  mongoose = require('mongoose'),
  logger = require('morgan'),
  bodyParser = require('body-parser');

// Connection to the database
dbConnect = mongoose.connect(
  'mongodb://localhost:27017/sms-assurances-db',
  { useNewUrlParser: true, useUnifiedTopology: true}
).then(() => console.log('Successfully connected to the database !'))
.catch(err => console.log('Error to connect to the database.', err));

dbConnect;

// Routes
const indexRouter = require('./routes/index'),
  aboutRouter = require('./routes/about'),
  contactRouter = require('./routes/contact'),
  productsRouter = require('./routes/services'),
  blogRouter = require('./routes/blog'),
  habitationRouter = require('./routes/habitation'),
  healthRouter = require('./routes/health'),
  travelRouter = require('./routes/travel'),
  carRouter = require('./routes/car'),
  lifeRouter = require('./routes/life'),
  proRouter = require('./routes/pro'),
  usersTableRouter = require('./routes/usersTables'),
  loginRouter = require('./routes/login'),
  faqRouter = require('./routes/faq'),
  assistanceAutoRouter = require('./routes/assistance'),
  app = express();



// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Middleware
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '/public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Using routes
app.use('/', indexRouter);
app.use('/about', aboutRouter);
app.use('/contact', contactRouter);
app.use('/services', productsRouter);
app.use('/blog', blogRouter);
app.use('/habitation', habitationRouter);
app.use('/health', healthRouter);
app.use('/travel', travelRouter);
app.use('/car', carRouter);
app.use('/life', lifeRouter);
app.use('/pro', proRouter);
app.use('/dashboard', usersTableRouter);
app.use('/login-to-dashboard', loginRouter);
app.use('/terms', faqRouter);
app.use('/assistance-auto', assistanceAutoRouter);


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
  res.render('404', { title: 'Page Non Trouvée' });
});

app.use('/contact', function (req, res) {
  if (req.body.name && req.body.email && req.body.phone_number && req.body.message) {
    dbConnect.then(function(db) {
        db.collection('contact').insertOne(req.body);
    });    
  }
  res.redirect('/contact')
});

module.exports = app;