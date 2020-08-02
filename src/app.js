const express = require('express'); 
const helmet = require("helmet");
const cors = require('cors'); 

const app = express();

app.use('*', cors());
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(router);

module.exports = app;
