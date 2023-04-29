// const customerModels = require('../config')
const db = require('../configdb/db')

class customerModel {
  // Count phone number
  countPhone = (phoneNumber, callback) => {
  const countPhoneQuery = "SELECT COUNT(customer.phone) FROM customer WHERE customer.phone = ?";
  db.query(countPhoneQuery, [phoneNumber], (err, results) => {
    //console.log("Phone1:  " , phoneNumber);
    if (err) {
      console.log(err);
      callback(err, null);
    } else {
      //console.log(results[0]['COUNT(customer.phone)']);
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
  updateCustomerById = (data, id, result) => {
    db.query("UPDATE customer SET name = ?, phone = ?, password = ? WHERE customer_id =?",
      [data.name, data.phone, data.password, id], (err, results) => {
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