'use strict';
require('dotenv').config();
const cors = require('cors');
const express = require('express');
const conn = require('./database');

//express packages for login files
app.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: true
}));
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());

// Constants
const PORT = process.env.PORT || 8080;
// const HOST = '0.0.0.0'; **getting rid of for testing (9/27)

// App
const app = express();
app.use(cors());
app.get('/', (req, res) => { //specifying the api
  res.send('Hello World');  // sending back a response (the '/' means if no url is specified by frontend say, "hello world")
}); 



//Registration Form Data to then get from the form, and then insert into the database

app.post('/registration', function(req, res) {
  const username = req.body.username;
  const password = req.body.password;
  const email = req.body.email;

conn.query(`INSERT INTO userinfo (username = ? , email = ? , password = ? `), 
[username , email, password] ,  
function(error, results) {

console.log(username);
if (error) {
  throw error
}
    res.send('user registered');

  }
});

//LOGIN- used JWT tokens, but stored in the utils on frontend- need to get help to see which ones should
//get modified to then include mysql 

//THIS IS WHAT I HAVE COME UP WITH FOR MYSQL AND EXPRESS BASED ON TUTORIAL OUTLINES... (9/29):

//post request to have when the client hits submit button the form data is sent to the server
// that data is checked in the MySQL userinfo table to see if the details are correct/match

app.post('/Login', function(request, response) {
	let username = request.body.username;
	let password = request.body.password;
	if (username && password) {
		connection.query('SELECT * FROM userinfo WHERE username = ? AND password = ?', [username, password], function(error, results, fields) {
			if (results.length > 0) {
				request.session.loggedin = true;
				request.session.username = username;
				response.redirect('/Home');
			} else {
				response.send('Incorrect Username and/or Password!');
			}			
			response.end();
		});
	} else {
		response.send('Please enter Username and Password!');
		response.end();
	}
});

app.get('/Home', function(request, response) {
	if (request.session.loggedin) {
		response.send('Welcome back, ' + request.session.username + '!');
	} else {
		response.send('Please login to view this page!');
	}
	response.end();
});



app.listen(PORT, ()=>{
  console.log(`Running on Port: ${PORT}`)
});


// testing with using "users" for frontend/backend connection working and notes to remember syntax/what everything is doing!
// app.get('/users', (req, res) => { //specifying the api
//   conn.query( //ask the database
//     "SELECT * FROM userinfo", //database mysql command
//     (error, results, fields) => //what we get back from database
//     {
//       if(error){ 
//         throw error
//       }
//       res.json(results); //sending back a response from database (res=response; sending db information back as json notation)
//     }
//   )
// });

