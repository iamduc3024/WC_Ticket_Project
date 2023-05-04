const db = require('../configdb/db');

class matchModel {
    //Query all match
    getMatch = (result) => {
        const getAllMatchInfo = "SELECT DATE_FORMAT(`date`, '%d/%m/%Y') AS 'date', DATE_FORMAT(`time`, '%H:%i:%s') AS 'time', group_name, `match`.match_id, stadium, team_A, team_B, s.capacity FROM `match` JOIN `stand` s ON s.match_id = `match`.match_id WHERE s.stand_name = 'Category_A'";
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

    getMatchFilter = (team_name_A, team_name_B, stadium_name, date_from, date_to, price_from, price_to, result) => {
        //const getMatchFilterQuery = "SELECT * FROM `match` WHERE IF (team_A LIKE ? OR team_B LIKE ?, IF (stadium LIKE ?, IF (`date` BETWEEN ? AND ?, true, false), false), false)";
        //SELECT DISTINCT(`match`.match_id), DATE_FORMAT(`match`.date, '%d/%m/%Y') AS 'date', DATE_FORMAT(`match`.time, '%H:%i:%s') AS 'time', `match`.group_name, `match`.stadium, `match`.team_A, `match`.team_B FROM `match` JOIN stand ON stand.match_id = `match`.match_id WHERE IF (`match`.team_A LIKE '%%' OR `match`.team_B LIKE '%%', IF (`match`.stadium LIKE '%%', IF (`match`.date BETWEEN '2022-10-30' AND '2022-11-30', IF(stand.price BETWEEN 100 AND 200, true, false), false), false), false);
        const getMatchFilterQuery = "SELECT DISTINCT(`match`.match_id), DATE_FORMAT(`date`, '%d/%m/%Y') AS 'date', DATE_FORMAT(`time`, '%H:%i:%s') AS 'time', group_name, stadium, team_A, team_B FROM `match` JOIN stand ON stand.match_id = `match`.match_id WHERE IF (team_A LIKE ? OR team_B LIKE ?, IF (stadium LIKE ?, IF (`date` BETWEEN ? AND ?, IF(stand.price BETWEEN ? AND ?, true, false), false), false), false)";
        db.query(getMatchFilterQuery, [team_name_A, team_name_B, stadium_name, date_from, date_to, price_from, price_to], (err, results) => {
            if (err) {
                console.log(err);
                result(err, null);
            } else {
                result(null, results);
            }
        })
    }

    // Delete match
    deleteMatchById = (id, result) => {
        const deleteMatchByIdQuery = "DELETE FROM `match` WHERE match_id = ?";
        db.query(deleteMatchByIdQuery, [id], (err, results) => {
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