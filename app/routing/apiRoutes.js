var path = require("path");

var friends = require("../data/friends");

module.exports = function(app){
    app.get("/api/friends",function(req,res){
        res.json(friends);
    });

    app.post("/api/friends",function(req,res){
        var SurUser = req.body;
        var Udiff = [];

        user_diff(friends,SurUser);
        var l_diff = Udiff[0];

        for(var i=0; i < Udiff.length; i++)
        {
            if(Udiff[i] < l_diff)
            {
                l_diff = Udiff[i];
            }
        }
        var Umatch = Udiff.indexOf(l_diff);
        res.send(friends[Umatch]);
        friends.push(SurUser);

        function user_diff(friends,SurUser){
            for(var i = 0; i < friends.length; i++)
            {
                var t_diff = 0;
                for(var x = 0; x < friends[i].scores.length; x++)
                {
                    t_diff += Math.abs(parseInt(friends[i].scores[x]) - parseInt(SurUser.scores[x]));
                }
                Udiff.push(t_diff);
            }
        }
    });
};