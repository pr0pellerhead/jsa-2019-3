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

var GetSingleFood = (req, res) => {
    fs.readFile('./food_list.json', 'utf8', (err, data) => {
        if(err){
            res.send('Could not read file');
            return;
        }
        var jData = JSON.parse(data);
        var out = jData.filter((o) => {
            return o.id == req.params.id;
        });
        if(out.length == 0){
            return res.status(404).send('Not found');
        }
        return res.send(out[0]);
    });
}

var CreateNewFood = (req, res) => {
    var check = req.body.id != undefined
        && req.body.name != undefined && req.body.name != "" && req.body.name.length > 0
        && req.body.price != undefined
        && req.body.calories != undefined;

        if(!check){
            return res.status(400).send('Bad request');
        }
        fs.readFile('./food_list.json', 'utf8', (err, data) => {
            if(err){
                res.send('Could not read file');
                return;
            }
            jData = JSON.parse(data);
            jData.push(req.body);
            fs.writeFile('./food_list.json', JSON.stringify(jData), (err) => {
                if(err){
                    return res.status(500).send('Could not save file');
                }
                return res.status(201).send(req.body);
            });
        });
}

var UpdateFood = (req, res) => {
    res.send('test');
}

var PartialUpdateFood = (req, res) => {
    res.send('test');
}

var DeleteFood = (req, res) => {
    res.send('test');
}


module.exports = {
    GetAllFood,
    GetSingleFood,
    CreateNewFood,
    UpdateFood,
    PartialUpdateFood,
    DeleteFood,
};