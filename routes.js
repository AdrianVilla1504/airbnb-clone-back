const router = require('./server/healthcheck/index');
const space = require('./server/spaces/index');
const user = require('./server/users/index');
const reservation = require('./server/Reservation/index');
const authLocal = require('./auth/local');
const payment = require('./server/payment');
const upload = require('./server/upload');

function routes(app) {
  app.use('/api/healthcheck', router);
  app.use('/api/spaces', space);
  app.use('/api/users', user);
  app.use('/api/reservation', reservation);

  app.use('/auth/local', authLocal);
  app.use('/api/payment', payment);

  app.use('/api/upload', upload);
}

module.exports = routes;
