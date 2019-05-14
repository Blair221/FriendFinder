const express = require('express');

let app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());