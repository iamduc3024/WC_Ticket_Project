const mysql = require('mysql');

const db = mysql.createConnection({
    host: 'localhost',
    username: 'root',
    password: '',
    database: 'wc_ticket'
})

db.connect((err) => {
    if (err) {
        console.log(err);
    } else {
        console.log('Connected');
    }
})

//export default db;