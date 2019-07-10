var fs = require('fs');

const foodFile = './food_list.json';

var GetAll = () => {
    return new Promise((success, fail) => {
        fs.readFile(foodFile, 'utf8', (err, data) => {
            if(err){
                return fail(err);
            }
            return success(JSON.parse(data));
        });
    });
};

var GetSingle = (id) => {
    return new Promise((success, fail) => {
        fs.readFile(foodFile, 'utf8', (err, data) => {
            if(err){
                return fail(err);
            }
            var jData = JSON.parse(data);
            var out = jData.filter((o) => {
                return o.id == id;
            });
            if(out.length == 0){
                return fail('Not found');
            }
            return success(out[0]);
        });
    });
}

module.exports = {
    GetAll,
    GetSingle
}