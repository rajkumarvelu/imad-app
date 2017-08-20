var express = require('express');
var morgan = require('morgan');
var path = require('path');
var Pool = require('pg').Pool;

var config = {
 user:'velurajkumar',
 database :'velurajkumar',
  host: 'db.imad.hasura-app.io',
  port: '5432',
  password: process.env.DB_PASSWORD};

var app = express();
app.use(morgan('combined'));




app.get('/counter',function (req,res) {
   counter= counter + 1;
   res.send(counter.toString() );
});

var Pool = new Pool(config);

app.get('/test-db', function(req,res){


pool.query('SElECT * FROM test ',function (err,result)
{
    if(err)
    {
        res.status(500).send(err.tostring());
    }
    else
    {
res.send(JSON.stringify(result));
}
});
});



var counter=0;
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});
app.get('/article1', function(req,res){
    res.sendFile(path.join(__dirname, 'ui', 'article1.html'));
    
});


app.get('/article2', function(req,res){
    res.send('article2 requested here and serveed here');
});
app.get('/article3', function(req,res){
    res.send('article3 requested here and serveed here');
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});
app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
