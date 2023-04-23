const standModel = require('../models/standModel');

class standController {
    showAllStandInfo = (req, res) => {
        standModel.getAllStandInfo((err, result) => {
            if (err) {
                res.send(err);
            } else {
                res.json(result);
            }
        })
    }

    showAllStandInfoByName = (req, res) => {
        standModel.getAllStandInfoByName(req.params.standName, (err, result) => {
            if (err) {
                res.send(err);
            } else {
                res.json(result);
            }
        })
    }

    showAllStandInfoByPrice = (req, res) => {
        standModel.getAllStandInfoByPrice(req.params.priceMin, req.params.priceMax, (err, result) => {
            if (err) {
                res.send(err);
            } else {
                res.json(result);
            }
        })
    }

    updateStandInfoWhenCustomerOrder = (req, res) => {
        standModel.updateStandWhenCustomerOrder(req.body, req.params.standName, req.params.standId, (err, result) => {
            if (err) {
                res.send(err);
            } else {
                res.json(result);
            }
        })
    }
}

module.exports = new standController();