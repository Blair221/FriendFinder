const express = require('express');

let app = express();

const port = process.env.port || 3000;

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.get('/', function (req, res){
    res.sendFile(path.join(__dirname, 'home.html'))
});
app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "survey.html"));
});

app.listen(port, function (){
    console.log('successfully connected on localhost:'+port);
})