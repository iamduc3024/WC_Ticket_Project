// Import express
const express = require('express');

const cors = require('cors');

const app = express();
const mysql = require('mysql');
// Import routes
const route = require("./routes/indexRoute"); 



app.use(express.json());


app.use(cors());

route(app);

app.listen(8080, () => {
    console.log("Server is running on port 8080");
});
