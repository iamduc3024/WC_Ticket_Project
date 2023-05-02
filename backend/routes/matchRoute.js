const express = require("express");

const router = express.Router();

const matchController = require('../controllers/matchController');

//router.get('/', matchController.)

router.get("/show", matchController.showMatch);
router.get("/showbyid", matchController.showMatchById);
router.get("/showFilter", matchController.showMatchFilter);
router.put("/update", matchController.updateMatch);

module.exports = router;