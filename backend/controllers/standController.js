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
}

module.exports = new standController();