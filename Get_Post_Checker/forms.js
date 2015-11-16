/*CS290
Author: Tatsiana Clifton
Description: The single page web application that receives incoming POST and GET requests. 
It displays type of request (POST or GET) was received and a list with all parameter names 
and values which were sent in the URL query string for both a GET and POST request.
If it is a POST request, all the property names and values that were received in the request body
are displayed as a list. It is able to accept either a well formatted URL encoded query string or JSON data.*/

var express = require('express');

var app = express();
var handlebars = require('express-handlebars').create({defaultLayout:'main'});
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');
app.set('port', 3001);

//route for GET request
app.get('/',function(req,res){
  var urlKeyValue = [];
  for (var i in req.query){
    urlKeyValue.push({'name':i,'value':req.query[i]})
  }
  var output = {};
  output.urlData = urlKeyValue;
  output.reqType = "GET";
  res.render('home', output);
});

//route for POST request
app.post('/', function(req,res){
  var urlKeyValue = [];
  var bodyKeyValue = [];
//if POST request was sent in URL
  for (var i in req.query){
    urlKeyValue.push({'name':i,'value':req.query[i]})
  }
//if POST request was sent in body
  for (var i in req.body){
    bodyKeyValue.push({'name':i,'value':req.body[i]})
  }  
  var output = {};
  output.urlData = urlKeyValue;
  output.bodyData = bodyKeyValue;
  output.reqType = "POST";
  res.render('home', output);
});

app.use(function(req,res){
  res.status(404);
  res.render('404');
});

app.use(function(err, req, res, next){
  console.error(err.stack);
  res.type('plain/text');
  res.status(500);
  res.render('500');
});

app.listen(app.get('port'), function(){
  console.log('Express started on http://52.88.108.154:' + app.get('port') + '; press Ctrl-C to terminate.');
});
