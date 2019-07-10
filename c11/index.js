var express = require('express');
var students = require('./handlers/students');
var hbs = require('express-hbs');

var app = express();
app.engine('hbs', hbs.express4());
app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');

app.get('/', students.GetStudents);

app.listen(8080, (err) => {
    if(err){
        return console.error('Could not start server');
    }
    return console.log('Server successfully started');
});