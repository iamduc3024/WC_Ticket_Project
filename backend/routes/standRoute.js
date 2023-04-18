const express = require('express');

const showAllStandInfo = require('../controllers/standController');

const router = express.Router();

router.get('/stand', showAllStandInfo);

module.exports = router;