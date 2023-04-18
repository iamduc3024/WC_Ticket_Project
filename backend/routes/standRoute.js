const express = require('express');
const router = express.Router();

const showAllStandInfo = require('../controllers/standController');



router.get('/stand', showAllStandInfo);

module.exports = router;