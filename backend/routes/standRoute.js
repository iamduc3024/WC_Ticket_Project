const express = require('express');
const router = express.Router();
const standController = require('../controllers/standController');

router.get('/showAllStand', standController.showAllStandInfo);
router.get('/showStandByMatchId', standController.showStandByMatchId);
router.get('/showAllStandByName', standController.showAllStandInfoByName);
router.get('/showAllStandByPrice', standController.showAllStandInfoByPrice);
router.put('/updateStandWhenCustomerOrder', standController.updateStandInfoWhenCustomerOrder);

module.exports = router;