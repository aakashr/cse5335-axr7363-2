var cool = require('cool-ascii-faces');
var express = require('express');
var app = express();
var pg = require('pg');

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
  var result = ''
  var times = process.env.TIMES || 5
  for (i=0; i < times; i++)
    result += cool();
  response.send(result);
});

app.get('/cool', function(request, response) {
  response.send(cool());
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});

var URL = "postgres://apoeuwijlfucls:anntDwRPIYdgmGF32Yvj0WJWlI@ec2-54-163-240-97.compute-1.amazonaws.com:5432/dl8j470akpmtm";

app.get('/db', function (request, response, done) {
  var d = request.query.M_ID
  pg.connect(URL, function(err, client, done) {
  	client.query('SELECT * FROM Movies where M_ID = ' +d, function(err, result) {
      done();
      if (err)
       { console.error(err); response.send("Error " + err); }
      else
       { 
       	//response.render('pages/db', {results: result.rows} ); 
       	finalRes = JSON.stringify(result.rows);
       	return response.send(finalRes);
       }
    });
  });
})


