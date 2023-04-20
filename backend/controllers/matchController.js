const matchModel = require('../models/matchModel')

class matchController {
    //Show all matches
    showMatch = (req, res) => {
        matchModel.getMatch((err, result) => {
            if (err) {
                res.send(err);
            } else {
                res.json(result);
            }
        });
    }

    //Show match by ID
    showMatchById = (req, res) => {
        matchModel.getMatchById(req.params.id, (err, result) => {
            if (err) {
                res.send(err);
            } else {
                res.json(result);
            }
        });
    }

    //Update match
    updateMatch = (req, res) => {
        const id = req.params.id;
        const data = req.body;
        matchModel.updateMatchById(id, data, (err, result) => {
            if (err) {
                res.send(err);
            } else {
                res.json(result);
            }
        });
    }
}

module.exports = new matchController();