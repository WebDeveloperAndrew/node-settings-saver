const bodyParser = require('body-parser');
var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000;

//Sets origin headers for CORS
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

//Formats JSON requests
app.use(bodyParser.json());

//Imports save route
var routes = require('./api/routes/saveRoute');
routes(app);

app.listen(port);

if (process.env.LOGGING) {
    console.log('Mailer RESTful API server started on: ' + port);
}
