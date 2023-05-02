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
        let team_name_A = '%' + req.params.team_name_A + '%';
        let team_name_B = '%' + req.params.team_name_B + '%';
        let stadium_name = '%' + req.params.stadium_name + '%';
        let date_from = req.params.date_from;
        let date_to = req.params.date_to;
        console.log(date_from);
        matchModel.getMatchFilter(team_name_A, team_name_B, stadium_name, date_from, date_to, (err, result) => {
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
}

module.exports = new matchController();