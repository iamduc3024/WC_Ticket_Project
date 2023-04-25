const customerRouter = require('./customerRoute');
const matchRouter = require('./matchRoute');
const standRouter = require('./standRoute');
const transactionRouter = require('./transactionRoute');

function route(app) {
  app.use('/customer', customerRouter);
  app.use('/stand', standRouter);
  app.use('/match', matchRouter);
  app.use('/transaction', transactionRouter);
  //app.use('/transaction', transactionRouter);
}

module.exports = route;


