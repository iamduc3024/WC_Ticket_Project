// const customerModels = require('../config')
const db = require('../configdb/db')

//const express = require('express')

// Create a new customer
const createCus = (data, result) => {
    db.query("INSERT INTO customer SET ?", [data], (err, results) => {
        if (err) {
          console.log(err);
          result(err, null);
        } else {
          result(null, results);
        }
    });
};

module.exports = createCus;