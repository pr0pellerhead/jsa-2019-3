var First = (req, res) => {
    var data = {
        ime: 'Pero', 
        prezime: 'Perovski',
        studenti: [
            {ime: 'Pero', prezime: 'Perovski'},
            {ime: 'Janko', prezime: 'Jankovski'},
            {ime: 'Stanko', prezime: 'Stankovski'}
        ]
    };
    res.render('first', data);
}

module.exports = {
    First
}