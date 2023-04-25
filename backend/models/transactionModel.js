const db = require('../configdb/db');

class transactionModel {
    getAllTransaction = (result) => {
        const getAllTransactionQuery = "SELECT * FROM transaction";
        db.query(getAllTransactionQuery, (err, results) => {
            if (err) {
                console.log(err);
                result(err, null);
            } else {
                result(null, results);
            }
        })
    }

    getAllTransactionByCustomerId = (customer_id, result) => {
        const getAllTransactionByCustomerIdQuery = "SELECT `transaction`.transaction_id, `transaction`.customer_id, `transaction`.stand_id, `transaction`.quantity_of_tickets, `transaction`.amount, `transaction`.date_time FROM `transaction` JOIN customer ON customer.customer_id = `transaction`.customer_id WHERE customer.customer_id = ?";
        db.query(getAllTransactionByCustomerIdQuery, [customer_id], (err, results) => {
            if (err) {
                console.log(err);
                result(err, null);
            } else {
                result(null, results);
            }
        })
    }

    insertTransaction = (data, result) => {
        const insertTransactionQuery = "INSERT INTO `transaction` SET ?";
        db.query(insertTransactionQuery, [data], (err, results) => {
            if (err) {
                console.log(err);
                result(err, null);
            } else {
                result(null, results);
            }
        })
    }
}

module.exports = new transactionModel();