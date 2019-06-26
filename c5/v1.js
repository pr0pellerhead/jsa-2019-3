var http = require('http');

var server = http.createServer((req, res) => {
    res.write(`Method: ${req.method}, URL: ${req.url}`);
    res.end();
});

server.listen(8080, (err) => {
    if(err){
        console.error(err);
        return;
    }
    console.log('Server started successfully');
});