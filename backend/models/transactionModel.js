const db = require('../configdb/db');

module.exports = insertTransactionWhenCustomerPay((customer_id, stand_id, quantity_of_tickets, amount, result) => {
    const insertTransactionWhenCustomerPayQuery = "INSERT INTO transation (customer_id, stand_id, quantity_of_tickets, amount, date_time) VALUES (`${customer_id}`, `${stand_id}`, `${quantity_of_tickets}`, `${amount}`, NOW())";
    
})