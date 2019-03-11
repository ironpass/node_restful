var app = require("express")();
var users = require("./users");

var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

var port = process.env.PORT || 7777;

app.get('/', function (req, res) {
    res.send('<h1>Hello Node.js</h1>');
});

app.get('/user', function (req, res) {
    res.json(users.findAll());
});

app.get('/user/:id', function (req, res) {
    var start = Date.now();
    var id = req.params.id;
    res.json(users.findById(id));
    var end = Date.now();
    console.log("Time taken for",id," is ",(end-start), " milliseconds");
});

app.get('/add_dummy/:amount', function(req, res) {
  users.addDummy(req.params.amount);
  var message = req.params.amount+" dummies successfully added.";
  res.send(message);
})

app.post('/newuser', function (req, res) {
    var json = req.body;
    res.send('Add new ' + json.name + ' Completed!');
});


app.listen(port, function() {
  console.log('Starting node.js on port '+ port);
})
