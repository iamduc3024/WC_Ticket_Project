const db = require('../configdb/db');

class matchModel {
    //Query all match
    getMatch = (result) => {
        const getAllMatchInfo = "SELECT DATE_FORMAT(`date`, '%d/%m/%Y') AS 'date', DATE_FORMAT(`time`, '%H:%i:%s') AS 'time', group_name, match_id, stadium, team_A, team_B FROM `match`";
        db.query(getAllMatchInfo, (err, results) => {
            if (err) {
                console.log(err);
                result(err, null);
            } else {
                result(null, results);
            }
        });
    }

    //Query single match
    getMatchById = (id, result) => {
        db.query("SELECT * FROM `match` WHERE match_id = ?", [id], (err, results) => {
            if (err) {
                console.log(err);
                result(err, null);
            } else {
                result(null, results);
            }
        });
    }

    getMatchFilter = (team_name_A, team_name_B, stadium_name, date_from, date_to, result) => {
        const getMatchFilterQuery = "SELECT * FROM `match` WHERE IF (team_A LIKE ? OR team_B LIKE ?, IF (stadium LIKE ?, IF (`date` BETWEEN ? AND ?, true, false), false), false)";
        db.query(getMatchFilterQuery, [team_name_A, team_name_B, stadium_name, date_from, date_to], (err, results) => {
            if (err) {
                console.log(err);
                result(err, null);
            } else {
                result(null, results);
            }
        })
    }

    //Update match
    updateMatchById = (id, data, result) => {
        db.query("UPDATE `match` SET date = ?, time = ?, group_name = ?, team_A = ?, team_B = ?, stadium = ? WHERE match_id = ?",
            [data.date, data.time, data.group_name, data.team_A, data.team_B, data.stadium, id], (err, results) => {
                if (err) {
                    console.log(err);
                    result(err, null);
                } else {
                    result(null, results);
                }
            });
    }
}

module.exports = new matchModel();