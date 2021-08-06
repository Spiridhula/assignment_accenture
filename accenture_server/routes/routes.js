// load up our shiny new route for users
const ordersRoutes = require('./orders');
const paymentsRoutes = require('./payments');
const pricesRoutes = require('./prices');

const appRouter = (app, fs) => {
  // we've added in a default route here that handles empty routes
  // at the base API url
  app.get('/', (req, res) => {
    res.send('welcome to the development api-server');
  });

  // run our user route module here to complete the wire up
  ordersRoutes(app, fs);
  paymentsRoutes(app, fs);
  pricesRoutes(app, fs);
};

// this line is unchanged
module.exports = appRouter;