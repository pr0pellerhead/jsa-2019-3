var fs = require('fs');

fs.writeFile('test.txt', 'Node.js is the best!', (err) => {
    if(err){
        console.error(err);
    }
});


fs.readFile('test.txt', 'utf8', (err, data) => {
    if(err){
        console.error(err);
    }
    console.log(err);
    console.log(data);
});


// var pero = (cb) => {
//     var sum = 0;
//     for(var i = 0; i < 100; i++){
//         sum += i;
//     }
//     cb(sum);
// }

// var log = (num) => {
//     console.log(num);
// }

// pero(log);