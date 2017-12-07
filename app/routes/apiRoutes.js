//dependencies
var path = require('path');

// Import friend list
var friends = require('../data/friends.js');

//API routes
module.exports = function(app) {
	

	//list of friend
	app.get('/api/friends', function(req, res) {
		res.json(friends);
	});

	//new friend entry
	app.post('/api/friends', function(req, res) {
		// Capture user input
		var userInput = req.body;
	

		//best friend match
		

		
		// Add new user
		friends.push(userInput);

		
	});
};
