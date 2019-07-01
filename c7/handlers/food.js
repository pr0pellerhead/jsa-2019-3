var fs = require('fs');

var GetAllFood = (req, res) => {
    fs.readFile('./food_list.json', 'utf8', (err, data) => {
        if(err){
            res.send('Could not read file');
            return;
        }
        jData = JSON.parse(data);
        res.send(jData);
    });
};

module.exports = {
    GetAllFood
};