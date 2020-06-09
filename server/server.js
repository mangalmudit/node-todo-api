var express  = require('express');
var bodyParser = require('body-parser');
var port = 3000;
var app = express();


var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo.js');
var {User} = require('./models/user.js');

/*var otherTodo = new Todo({
  text: ' Something iss happening'
});

otherTodo.save().then((doc) => {
  console.log(JSON.stringify(doc,undefined,2));
},(e) => {
  console.log('Unable to save',e);
});

var user = new User({
  email: 'muditmangal12@gmail.com'
});

user.save().then((doc) => {
  console.log(JSON.stringify(doc,undefined,2));
},(e) => {
  console.log('Unable to save',);
});*/
app.use(bodyParser.json());
app.post('/todos',(req,res) =>{
  var todo = new Todo({
    text: req.body.text
  });
  todo.save().then((doc)=>{
    res.send(doc);
  },(e) => {
    res.status(400).send(e);
  });
});
app.listen(port,() =>{
console.log('Server is running');
});
