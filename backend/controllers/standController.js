const getAllStandInfo = require('../models/standModel');

module.exports = showAllStandInfo = (req, res) => {
    getAllStandInfo((err, results) => {
        if (err) {
            res.send(err);
        } else {
            res.json(results);
        }
    })
};