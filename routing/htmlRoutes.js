//GET route to /survey that displays survey page 
//defaulet | catch-all route that leads to home.html ( homepage )

//Dependencies

var path = require('path')



module.exports = function (app) {

    //HTML route leading to home page
    app.get('/', function (req, res) {
        res.sendFile(path.join(__dirname, '../public/home.html'));
    });

    //HTML route that leads to survey page
    app.get('/survey', function (req, res) {
        res.sendFile(path.join(__dirname, '../public/survey.html'));
    });


};