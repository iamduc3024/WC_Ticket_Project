const customerModel = require('../models/customerModel')

class customerController {
    // createCustomer = (req, res) => {
    //     const data = req.body;
    //     createCus(data, (err, results) => {
    //         if (err) {
    //             res.send(err);
    //         } else {
    //             res.json(results);
    //         }
    //     },)
    // }

    //Show all customer
    showProducts = (req, res) => {
        customerModel.getCustomer((err, result) => {
            if (err) {
                res.send(err);
            } else {
                res.json(result);
            }
        });
    }

}


module.exports = new customerController();