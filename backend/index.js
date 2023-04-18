
// Import express
const express = require('express');
//import bodyParser from 'body-parser';

const app = express();
// Import routes
const Route = require("./routes/customerRoute.js"); 



app.use(express.json());

app.use(Route);

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
