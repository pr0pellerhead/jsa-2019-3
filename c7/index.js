var express = require('express');
var bodyParser = require('body-parser');
var hbs = require('express-hbs');

var students = require('./handlers/students');
var calculator = require('./handlers/calculator');
var food = require('./handlers/food');
var templates = require('./handlers/templates');

var api = express();
api.use(bodyParser.json());
api.use(express.static('www'));
api.engine('hbs', hbs.express4({
    partialsDir: __dirname + '/views/partials'
}));
api.set('view engine', 'hbs');
api.set('views', __dirname + '/views');

api.get('/students', students.GetAllStudents);
api.get('/students/:id', students.GetStudentByID);
api.get('/students/:id/grades/:sub', students.GetStudentSubjectGrades);

api.get('/calc/:op/:a/:b', calculator.Calculator);

api.get('/food', food.GetAllFood);
api.get('/food/:id', food.GetSingleFood);
api.post('/food', food.CreateNewFood);
api.put('/food/:id', food.UpdateFood);
api.patch('/food/:id', food.PartialUpdateFood);
api.delete('/food/:id', food.DeleteFood);

api.get('/first', templates.First);
api.get('/second', templates.Food);


api.listen(8080, (err) => {
    if(err){
        console.error(err);
        return;
    }
    console.log('Server started successfully');
});
