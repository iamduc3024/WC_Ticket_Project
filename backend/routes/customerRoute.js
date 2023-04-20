//import express from "express";
const express = require("express");

const router = express.Router();

const customerController = require('../controllers/customerController');



// Get customer
router.get("/show", customerController.showCustomer);

// Get customer by id
router.get("/showbyid", customerController.showCustomerById);

// // Create New Customer
// router.post("/create", createCustomer);

// // Update Customer
// router.put("/update/:id", updateCustomer);

// // Delete Customer
// router.delete("/delete/:id", deleteCustomer);

module.exports = router;