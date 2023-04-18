// const customerModels = require('../config')
const db = require('../configdb/db')

//const express = require('express')

class customerModel {
  // createCus = (data, result) => {
  //   db.query("INSERT INTO customer SET ?", [data], (err, results) => {
  //     if (err) {
  //       console.log(err);
  //         result(err, null);
  //       } else {
  //         result(null, results);
  //       }
  //   });
  // }

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
}


module.exports = new customerModel();