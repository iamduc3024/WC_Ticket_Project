const express = require('express');
const router = express.Router();
const standController = require('../controllers/standController');

router.get('/showAllStand', standController.showAllStandInfo);

module.exports = router;