var friends = require("../data/friends");

module.exports = function(app) {

	app.get("/api/friends", function(req, res) {
	  res.json(friends);
	});

	app.post("/api/friends", function(req, res) {
		
		var newFriend = {
			name: req.body.name,
			photo: req.body.photo,
			scores: []
		};
		var comparison = 0;

		var newScores = [];
		for (var i = 0 ; i < req.body.scores.length ; i++) {
			newScores.push(parseInt(req.body.scores[i]));
		}

		newFriend.scores = newScores;
		var compareScores = [];

		for (var i = 0 ; i < friends.length ; i++) {
			for (var x = 0 ; x < newFriend.scores.length ; x++) {
				comparison += Math.abs(newFriend.scores[x] - friends[i].scores[x]);
			}
		}

		friends.push(req.body);
		res.json(true);
	});

}