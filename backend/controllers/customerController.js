const {
    createCus,
} = require ("../models/customerModel.js");

const createCustomer = (req, res) => {
    const data = req.body;
    createCus(data, (err, results) => {
        if (err) {
            res.send(err);
        } else {
            res.json(results);
        }
    },)
};

module.exports = createCustomer;