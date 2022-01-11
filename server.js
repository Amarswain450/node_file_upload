require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const fileUpload = require("express-fileupload");
const app = express();
const PORT = process.env.PORT || 5000;

//database config
const connect = require('./db/database');
connect();

//config body-parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//config fileUpload
app.use(fileUpload());

//config static files
app.use(express.static("uploads"));

//confing routing
const router = require('./routes/routes');
app.use('/api/v1/students', router);


const server = app.listen(PORT, () => {
    console.log(`server running on port number ${PORT}`);
});