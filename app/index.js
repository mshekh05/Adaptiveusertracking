const argv = require('yargs').argv,
cors = require('cors'),
express = require('express'),
bodyParser = require('body-parser'),
path = require('path');
// var pg =require('pg');
var http = require('http');
var newpage = "C:\\Users\\Mohd\\Documents\\GIT\\adaptive\\API\\main.html"
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://mshekh:pwd@ds151433.mlab.com:51433/heroku_t0kvxbnw";

var handlebars = require('express-handlebars')
.create({ defaultLayout: 'main' });
let app = express();

var session = require('client-sessions');
app.use(session({
  cookieName: 'session',
  secret: 'random_string_goes_here',
  duration: 30 * 60 * 1000,
  activeDuration: 5 * 60 * 1000,
}));

app.use(cors());
app.use(bodyParser.json());

app.set('port', process.env.PORT || argv.port || 8080);

app.use('/', express.static(__dirname));

app.get('/', (request, response) => {
// response.send('hola');
// response.sendFile(path.join(__dirname + '/index.html'));
});

app.post('/login', (request, response) => {
console.log('query parameters:');
user = request.body.username;
pwd = request.body.password;
current = {current:"current"}
update =  {current:"current",name:user}
// console.log(JSON.stringify(request.query));
console.log(user);
MongoClient.connect(url, function (err, db) {
  // console.log("hello2");
  if (err) throw err;
  var query = { username: user, password: pwd };
  var query2 = { username: user };
  console.log(query)
  db.collection("users").findOne(query, function (err, result) {
    if (err) response.json({ "response": "Failed" });
    // console.log(result)
    if (result == null) {
      // response.status=201;
      db.close();
      response.json({ "response": "Failed" });
      console.log('Logged in Failed');
    }
    else {
      request.session.user = user;
      var today = new Date();
      var dd = today.getMonth() + '/' + today.getDate() + '/' + today.getFullYear();
      var time = ("0" + today.getHours()).slice(-2) + ":" + ("0" + today.getMinutes()).slice(-2) + ":" + ("0" + today.getSeconds()).slice(-2);
      console.log(dd, time)
      db.collection("user_login_log").update(query2, { $push: { log: { date: dd, time: time } } }, function (err, added) {
        if (err || !added) {
          console.log("Track not added.");
        }
        else {
          console.log("added");
        }
      });
      db.collection("current").updateOne(current,update, function (err, result) {
        if (err) response.json({ "response": "Failed" });
        console.log("1 document inserted");
      });

      db.close();
      response.json({ "response": "Success" });
      
    }
  });
});
});





app.post('/signup', (request, response) => {
// console.log('query parameters:');
fname = request.body.fname;
lname = request.body.lname;
email = request.body.email;
user = request.body.username;
pwd = request.body.password;
// console.log(JSON.stringify(request.query));

// console.log("hello1");
MongoClient.connect(url, function (err, db) {
  // console.log("hello2");
  if (err) throw err;
  var query = { username: user, fname: fname, lname: lname, email: email, password: pwd };
  var query_log = { username: user, log: [] }
  var query_activity = { username: user, activity: [] }
  var validate = {
    $or: [
      { username: user }, { email: email }]
  };

  console.log("query")
  db.collection("users").findOne(query, function (err, result) {
    if (err) response.json({ "response": "Failed" });
    if (result != null) {
      console.log("document exists");

      if (result.username == user) { response.json({ "response": " User exists" }); }
      else { response.json({ "response": " Email exists" }); }
      db.close


      console.log(result.email)
    }
    else {
      db.collection("users").insertOne(query, function (err, result) {
        if (err) response.json({ "response": "Failed" });
        console.log("1 document inserted");
      });
      db.collection("user_login_log").insertOne(query_log, function (err, result) {
        if (err) response.json({ "response": "Failed" });
        console.log("1 document inserted");
      });
      db.collection("user_login_activity").insertOne(query_activity, function (err, result) {
        if (err) response.json({ "response": "Failed" });
        console.log("1 document inserted");
      });
      db.close
      response.json({ "response": "Success" });

    }


  });

});
});








app.get('/log', (request, response) => {
var user = request.session.user;
console.log("USER:" +request.session.user)
  // console.log("username " + user)
  MongoClient.connect(url, function (err, db) {
    // console.log("hello2");
    if (err) throw err;
    var query = { username: user };
    db.collection("user_login_log").findOne(query, function (err, result) {
      if (err) response.json({ "response": "Failed" });
      if (result == null) {
        db.close();
        response.json({ "response": "Failed" });
      }
      else {
        response.json({username:user,log:result.log});
        db.close();
      }
    });
  });


// }
// else {response.json({ "response": "Failed" });}
});


app.post('/action', (request, response) => {

var user = request.session.user;
console.log(user)
action = request.body
console.log(action)
MongoClient.connect(url, function (err, db) {
  // console.log("hello2");
 
  var query2 = { username: user };

 
      db.collection("user_login_activity").update(query2, { $push: { activity: action } }, function (err, added) {
        if (err || !added) {
          console.log("Track not added.");
        }
        else {
          console.log("added");
        }
      });
     

      db.close();
      response.json({ "response": "Success" });
      
    

});
});


app.get('/logout', (request, response) => {
  request.session.reset();
  response.json();
  });



// app.listen(app.get('port'), () => {
// console.log(`server listening on port : ${app.get('port')}`);
// });

server.listen(process.env.PORT || 3000, function(){
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});