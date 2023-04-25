const customerRouter = require('./customerRoute');
const matchRouter = require('./matchRoute');
const standRouter = require('./standRoute');

function route(app) {
  app.use('/customer', customerRouter);
  app.use('/stand', standRouter);
  app.use('/match', matchRouter);
  //app.use('/transaction', transactionRouter);
}

module.exports = route;


