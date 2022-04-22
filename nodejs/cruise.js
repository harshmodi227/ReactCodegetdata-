var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var app = express();
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use(cors());

var port = 5200;

// var array = [];

app.post('/cruise', function (req, res) {
    try {
        var result = req.body;

        res.send(result);
    }
    catch (err) {
        console.log(err);
    }
});



app.listen(port, function () {
    console.log(`listen in ${port}`);
});