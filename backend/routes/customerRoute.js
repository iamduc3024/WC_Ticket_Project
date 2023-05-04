//import express from "express";
const express = require("express");

const router = express.Router();

const customerController = require('../controllers/customerController');

router.get("/showCountPhone", customerController.showCountCustomerPhone);

// Get customer
router.get("/show", customerController.showCustomer);

// Get customer by id
router.post("/showByPhoneAndPassword", customerController.showCustomerByPhoneAndPassword);

// // Create New Customer
router.post("/create", customerController.createCustomer);

// Show customer Profile
router.get("/customerProfile", customerController.showCustomerProfile);
// // Update Customer
router.post("/update", customerController.updateCustomer);

// // Delete Customer
router.delete("/deleteCustomer/:id", customerController.deleteCustomer);

module.exports = router;