var http = require('http');

var server = http.createServer(function (req, res) {
    console.log(req);
    // res.write('Hello World!');
    //  http://127.0.0.1:4567/add/2/3
    //  /add/2/3
    //  5
    //  http://127.0.0.1:4567/add/6/1
    //  /add/6/1
    //  7
    var URL = req.url.split('/');
    var output = 0;
    switch(URL[1]){
        case 'add':
            if(URL.length > 2){
                for(let i = 2; i < URL.length; i++){
                    output += parseInt(URL[i]);
                }
            }
            break;
    }

    res.write(output + '');
    res.end();
});

server.listen(4567, (err) => {
    if(err){
        console.error(err);
        return;
    }
    console.log('Server started successfully!');
});

