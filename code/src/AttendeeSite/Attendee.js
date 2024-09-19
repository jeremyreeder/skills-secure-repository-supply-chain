function attendeeName() {
  document.getElementById("Name").innerHTML = window.location.search;
  
  const express = require('express')
  const router = express.Router()
  
  router.get('/greeting', (req, res) => {
      const { name }  = req.query;
      res.send('<h1> Hello :'+ name +"</h1>")
  })
  
  router.get('/greet-template', (req,res) => {
      name = req.query.name
      res.render('index', { user_name: name});
  })
  
  module.exports = router
}

var mysql = require('db-mysql');
var http = require('http');
var out;
var valTom;
var req = http.request(options, function(res)
{
	res.on('data', function(chunk)
	{
		valTom = chunk;
	}
	);
}
);
new mysql.Database(
{
	hostname: 'localhost',
	user: 'user',
	password: 'password',
	database: 'test'
}
).connect(function(error)
{
	var the_Query =
	"INSERT INTO Customers (CustomerName, ContactName) VALUES ('Tom'," +
	valTom + ")";
	this.query(the_Query).execute(function(error, result)
	{
		if (error)
		{
			console.log("Error: " + error);
		}
		else
		{
			console.log('GENERATED id: ' + result.id);
		}
	}
	);
	out = resIn;
}
);
