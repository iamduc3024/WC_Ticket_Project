// const customerModels = require('../config')
const db = require('../configdb/db')

class customerModel {
  // Get customer profile and all transactions    
  getCustomerProfile = (id, result) => {
    const customerProfileQuery = "SELECT s.stand_id, c.name,c.phone, DATE_FORMAT(m.date, '%d/%m/%Y') AS mDate, DATE_FORMAT(m.time, '%H:%i:%s') AS mTime, m.group_name, m.team_A, m.team_B, m.stadium, s.stand_name, SUM(t.quantity_of_tickets) AS quantity_of_tickets, SUM(t.amount) AS amount, DATE_FORMAT(t.date_time, '%d/%m/%y %H:%i:%s') AS transaction_time from customer c INNER JOIN `transaction` t on c.customer_id = t.customer_id INNER JOIN stand s ON t.stand_id = s.stand_id INNER JOIN `match` m ON s.match_id = m.match_id WHERE c.customer_id = ? GROUP BY s.stand_id";
    db.query(customerProfileQuery, [id], (err, results) => {
      if (err) {
        console.log(err);
        result(err, null);
      } else {
        result(null, results);
      }
    });
  }

  // Count phone number
  countPhone = (phoneNumber, callback) => {
    const countPhoneQuery = "SELECT COUNT(customer.phone) FROM customer WHERE customer.phone = ?";
    db.query(countPhoneQuery, [phoneNumber], (err, results) => {
      if (err) {
        console.log(err);
        callback(err, null);
      } else {
        callback(null, results[0]['COUNT(customer.phone)']);
      }
    });
  };

  // Query all customer
  getCustomer = (result) => {
    const getAllCustomerInfo = "SELECT * FROM customer";
    db.query(getAllCustomerInfo, (err, results) => {
      if (err) {
        console.log(err);
        result(err, null);
      } else {
        result(null, results);
      }
    });
  }

  //Query single customers by phone and password
  getCustomerByPhoneAndPassword = (data, result) => {
    db.query("SELECT * FROM customer WHERE phone = ? AND password = ?",
      [data.phone, data.password],
      (err, results) => {
        if (err) {
          console.log(err);
          result(err, null);
        } else {
          result(null, results);
        }
      });
  }

  //Insert customer
  insertCustomer = (data, result) => {
    db.query("INSERT INTO customer SET ?", [data], (err, results) => {
      if (err) {
        console.log(err);
        result(err, null);
      } else {
        result(null, results);
      }
    });
  }

  //Update customer
  updateCustomerById = (password, id, result) => {
    db.query("UPDATE customer SET password = ? WHERE customer_id =?",
      [password, id], (err, results) => {
        if (err) {
          console.log(err);
          result(err, null);
        } else {
          result(null, results);
        }
      });
  }

  //Delete customer
  deleteCustomerById = (id, result) => {
    db.query("DELETE FROM customer WHERE customer_id = ?", [id], (err, results) => {
      if (err) {
        console.log(err);
        result(err, null);
      } else {
        result(null, results);
      }
    });
  }
}


module.exports = new customerModel();