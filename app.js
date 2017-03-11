var express = require('express');
var controller = require('./controller');
var app = express();

controller.handle(app);

app.listen(3000, function () {
    console.log('Listening app on 3000');
});