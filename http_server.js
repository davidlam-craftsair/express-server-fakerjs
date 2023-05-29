const express = require('express');
const app = express();
const low = require('lowdb');
const fs = require('lowdb/adapters/FileSync');
const adapter = new fs('db.json');
const db = low(adapter);


// init the data store
db.defaults({ users: [] }).write();

// data parser
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
  
// use static files 
app.use(express.static('./public')); // index.html

// root
app.get('/home', function(req, res) {
  res.send("HOME");
})


// return all users
app.get('/data', function(req, res) {
  res.send(db.get('users').value());
})

// // add a user, use POST method
app.post('/add', function(req, res) {
  console.log("server side receive the request on post add");
  const user = {
    'name': req.body.name,
    'dob': req.body.dob,
    'email': req.body.email,
    'username': req.body.username,
    'password': req.body.password,
    'phone': req.body.phone,
    'streetaddress': req.body.streetaddress,
    'citystatezip': req.body.citystatezip,
    'latitude': req.body.latitude,
    'longitude': req.body.longitude,
    'avatar': req.body.avatar
  }
  // as request is received from the client to server, this middleware function
  // reconstruct the user object from request body and write to database in the backend
  // after that it send the response
  db.get('users').push(user).write();
  // now print out the users database in the console
  console.log(db.get('users').value());
  res.send(db.get('users').value());

})

function getAllUsersHTML() {
  return "<div><p> Hello, All Users Page is to implemented</p></div>";
  ;
}
app.get('/allUsers.html', function(req, res) {
  res.send(getAllUsersHTML());
})

app.listen(3001, function() {
  console.log('listening on port 3001');
})


