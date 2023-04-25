const transactionModel = require('../models/transactionModel');

class transactionController {
    showAllTransaction = (req, res) => {
        transactionModel.getAllTransaction((err, result) => {
            if (err) {
                res.send(err);
            } else {
                res.json(result);
            }
        })
    }

    showAllTransactionByCustomerId = (req, res) => {
        transactionModel.getAllTransactionByCustomerId(req.params.customer_id, (err, result) => {
            if (err) {
                res.send(err);
            } else {
                res.json(result);
            }
        })
    }

    createNewTransaction = (req, res) => {
        const data = req.body;
        transactionModel.insertTransaction(data, (err, result) => {
            if (err) {
                res.send(err);
            } else {
                res.json(result);
            }
        })
    }
}

module.exports = new transactionController();