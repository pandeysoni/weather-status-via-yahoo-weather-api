var YQL = require('yql');

exports.get = function(req, res){	
	console.log(req.params.locationNumber);
	var query = new YQL('select * from weather.forecast where (location = 2295420)');
	query.exec(function(err, data) {
		console.log(data.query.results.channel)
		// var location = data.query.results.channel.location;
		// var condition = data.query.results.channel.item.condition;
		// console.log('The current weather in ' + location.city + ', ' + location.region + ' is ' + condition.temp + ' degrees.');
		// return res.json({temp:  condition.temp})
	});
}