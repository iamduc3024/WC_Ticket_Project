// const db = require('./configdb/db');

// db.query('SELECT * FROM `match`', (err, result) => {
//     if (err) {
//         throw err;
//     } else {
//         console.log(result);
//     }
// })

// Import express
const express = require('express');
//import bodyParser from 'body-parser';

// Import routes
const Router = require("./routes/customerRoute.js"); 

const app = express();

app.use(express.json());

app.use(Router);

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
