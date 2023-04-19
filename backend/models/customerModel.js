// const customerModels = require('../config')
const db = require('../configdb/db')

class customerModel {

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

  //Query single customers
  getCustomerById = (id, result) => {
    db.query("SELECT * FROM customer WHERE customer_id = ?", [id], (err, results) => {
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