var http = require('http');

var getAllStudents = (req, res) => { 
    console.log('get all students'); 
};

var getStudent = (req, res) => { 
    console.log('retrieving student with name: ', req.params.name); 
    res.write('retrieving student with name: ' + req.params.name);
};

var storeStudent = (req, res) => { 
    console.log('store student'); 
};

var deleteStudent = (req, res) => { 
    console.log('delete student'); 
};

var updateStudent = (req, res) => { 
    console.log('updating student with id: ', req.params.id); 
    res.write('updating student with id: ' + req.params.id);
};

var patchStudent = (req, res) => { 
    console.log('patch student'); 
};


var routes = {
    get: [
        { route: '/students', func: getAllStudents },
        { route: '/students/:name', func: getStudent }
    ],
    post: [
        { route: '/students', func: storeStudent }
    ],
    put: [
        { route: '/students/:id', func: updateStudent }
    ],
    patch: [
        { route: '/students/:id', func: patchStudent }
    ],
    delete: [
        { route: '/students/:id', func: deleteStudent }
    ]
};




// req.method = "get";
// req.url = "/students/23";

// if (routes[req.method][0].route == req.url) {
//     routes[req.method][0].func();
// }


// '/students/:id'
// '\/students\/:id'
// '\/students\/:id'
// '\/students\/([a-zA-Z0-9\-_]*)'

// var id = "23";



var server = http.createServer((req, res) => {
    // if (routes[req.method][0].route == req.url) {
    //     routes[req.method][0].func();
    // }
    var regmatch = true;
    var index = undefined;
    var varname = null;
    var varvalue = null;

    for(let i = 0; i < routes[req.method.toLowerCase()].length; i++){
        var route = routes[req.method.toLowerCase()][i].route;
        if(route === req.url){
            index = i;
            regmatch = false;
            break;
        }
    }

    if(regmatch){
        for(let i = 0; i < routes[req.method.toLowerCase()].length; i++){
            var route = routes[req.method.toLowerCase()][i].route; // /students/:id
            route = route.split('/').join('\\/');
            var regroute = route.replace(/(:[a-zA-Z_]*)/, '([a-zA-Z0-9\\-_]+)'); // /students/([a-zA-Z0-9\-_]*)
            var re = new RegExp('^' + regroute + '$');
            if(re.test(req.url)){ // req.url == /students/([a-zA-Z0-9\-_]*)
                console.log(regroute,  ' == ', req.url);
                varname = routes[req.method.toLowerCase()][i].route.match(/\/:([a-zA-Z_]+)/)[1];
                varvalue = req.url.match(regroute)[1];
                console.log(varname + ' = ' + varvalue);
                index = i;
                break;
            }
        }
    }

    if(index !== undefined){
        req.params = {};
        req.params[varname] = varvalue;
        routes[req.method.toLowerCase()][index].func(req, res);
    }

    res.end();
});

server.listen(8080, (err) => {
    if(err){
        console.error(err);
        return;
    }
    console.log('Server started successfully');
});



// '/students/:id' -> '/students/graduated'
// :id -> [a-zA-Z0-9]















// '/students/graduated'
