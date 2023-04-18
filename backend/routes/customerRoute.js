//import express from "express";
const express = require("express");

const {
    createCustomer,
} = require("../controllers/customerController.js");

const router = express.Router();

//router.post("/customers", createCustomer);
router.get("/", createCustomer);

module.exports = router;