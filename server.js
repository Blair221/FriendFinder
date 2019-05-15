const express = require('express');
const path = require('path');

let app = express();

const port = process.env.port;

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.get('/', function (req, res){
    res.sendFile(path.join(__dirname, 'app/public/home.html'))
});
app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "app/public/survey.html"));
});

app.listen(port, function (){
    console.log('successfully connected on localhost:'+port);
});