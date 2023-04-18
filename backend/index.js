const db = require('./configdb/db');

db.query('SELECT * FROM customer', (err, result) => {
    if (err) {
        throw err;
    } else {
        console.log(result);
    }
})