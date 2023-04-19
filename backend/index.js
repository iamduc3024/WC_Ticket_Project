// Import express
const express = require('express');

const app = express();
const mysql = require('mysql');
// Import routes
const route = require("./routes/indexRoute"); 



app.use(express.json());

route(app);

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
