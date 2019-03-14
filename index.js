var app = require("express")();
var users = require("./users");
var mongojs = require('./db');
var db = mongojs.connect;

var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));



var port = process.env.PORT || 7777;

app.get('/', function (req, res) {
  db.users.count(function(err, result) {
      if (result <= 0) {
          db.users.insert(users.findAll(), function(err, docs) {
              // insert new data.
          });
      }
      res.send('<h1>Hello Node.js</h1>');
  });
});

app.get('/user', function (req, res) {
    db.users.find(function(err, docs) {
        res.json(docs);
    });
});

app.get('/user/:id', function (req, res) {
    var id = parseInt(req.params.id);
    db.users.findOne({id: id}, function(err, docs) {
        res.json(docs);
    });
});

app.post('/newuser', function (req, res) {
    var json = req.body;
    db.users.insert(json, function(err, docs) {
      res.send('Add new ' + docs.name + ' Completed!');
    });
});


app.listen(port, function() {
  console.log('Starting node.js on port '+ port);
})
