const customerModel = require('../models/customerModel')

class customerController {
    showCountCustomerPhone = (req, res) => {
        customerModel.countPhone(req.query.phoneNumber, (err, result) => {
            console.log("Phone: " , req.query.phoneNumber);
            if (err) {
                console.log(err);
                res.status(500).json({error: "Internal server error"})
            } else {
                if (result > 0) {
                    res.json({message: "Duplicate"});
                } else {
                    res.json({message: "Success"});
                }
            }
        })
    }

    // Show all customers
    showCustomer = (req, res) => {
        customerModel.getCustomer((err, result) => {
            if (err) {
                res.send(err);
            } else {
                res.json(result);
            }
        });
    }

    //Show customer by ID
    showCustomerById = (req, res) => {
        customerModel.getCustomerById(req.params.id, (err, result) => {
            if (err) {
                res.send(err);
            } else {
                res.json(result);
            }
        });
    }

    //Create customer
    createCustomer = (req, res) => {
        const data = req.body;
        customerModel.insertCustomer(data, (err, results) => {
            if (err) {
                res.send(err);
            } else {
                res.json(results);
            }
        });
    }

    //Update customer
    updateCustomer = (req, res) => {
        const data = req.body;
        const id = req.params.id;
        customerModel.updateCustomerById(data, id, (err, results) => {
            if (err) {
                res.send(err);
            } else {
                res.json(results);
            }
        });
    }

    //Delete customer
    deleteCustomer = (req, res) => {
        const id = req.params.id;
        customerModel.deleteCustomerById(id, (err, results) => {
            if (err) {
                res.send(err);
            } else {
                res.json(results);
            }
        });
    }

}


module.exports = new customerController();