//import express from "express";
const express = require("express");

const router = express.Router();

const customerController = require('../controllers/customerController');



//router.post("/customers", createCustomer);
router.get("/customer", customerController.showProducts);

module.exports = router;