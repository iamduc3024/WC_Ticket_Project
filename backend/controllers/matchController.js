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

    showMatchFilter = (req, res) => {
        let team_name_A = '%' + req.query.team_name_A + '%';
        let team_name_B = '%' + req.query.team_name_B + '%';
        let stadium_name = '%' + req.query.stadium_name + '%';
        let date_from = req.query.date_from;
        if(date_from === "") {
            date_from = '2022-11-19';
        }
        let date_to = req.query.date_to;
        if(date_to === "") {
            date_to = '2022-12-25';
        }
        let price_from = req.query.price_from;
        if(price_from === "") {
            price_from = '0';
        }
        let price_to = req.query.price_to;
        if(price_to === "") {
            price_to = '100000';
        }
        matchModel.getMatchFilter(team_name_A, team_name_B, stadium_name, date_from, date_to, price_from, price_to, (err, result) => {
            if (err) {
                res.send(err);
            } else {
                res.json(result);
            }
        })
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

    deleteMatch = (req, res) => {
        const id = req.params.id;
        matchModel.deleteMatchById(id, (err, result) => {
            if (err) {
                res.send(err);
            } else {
                res.json(result);
            }
        })
    }
}

module.exports = new matchController();