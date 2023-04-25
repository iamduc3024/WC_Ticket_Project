const transactionController = require('../controllers/transactionController');
const express = require('express');
const router = express.Router();

router.get('/showAllTransaction', transactionController.showAllTransaction);
router.get('/showAllTransactionByCustomerId', transactionController.showAllTransactionByCustomerId);
router.post('/createNewTransaction', transactionController.createNewTransaction);

module.exports = router;