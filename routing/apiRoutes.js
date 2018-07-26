


var friends = require( '../app/data/friends' );





//GET ROute 

module.exports = function (app) {
    //GET route w/ url /api/friends 
    app.get('/api/friends', function (req, res) {
         res.json(friends);

         
    });


    //POST routes /api/friends 
    app.post('/api/friends', function (req, res) {
        var eaFriend = [];
        var totalDiff;
        var bestMatch= {
            name: "",
            photo: "",
            totalDiff: ""
        };

        //SET VAR TO GRAB REQ BODY
        //Grabs body of request
        var someRec = req.body;
        var userScores = someRec.scores;

        for (var i = 0; i < friends.length; i++) {
            totalDiff = 0;
            //Set up var for each friend 
            eaFriend = friends[i];

            for (var j = 0; j < eaFriend.scores.length; j++) {
                //Loop through each friends score for comparion 
                console.log('<==' + {eaFriend} + '=>>>');
               var eafriScore = eaFriend.scores[i]
                totalDiff = Math.abs( parseInt(eafriScore) - parseInt(userScores[j]) ) 
                
              
           }
            //Less than eql to best match to see total different 
           if ( totalDiff <= bestMatch.totalDiff ) {
               console.log( totalDiff  + 'this is total difference');
               bestMatch.name = eaFriend.name;


           }

           //TODO send back results for best match 
        //    bestMatch.push(someRec);
            console.log(bestMatch + 'whatttttttt');
        }




    });

    


  

};






//handles incoming survey resultes
//handles compaitbility logic (i assume dealing with survey results)