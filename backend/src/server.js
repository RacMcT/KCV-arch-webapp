'use strict';
require('dotenv').config();
const cors = require('cors');
const express = require('express');
const conn = require('./database');

// Constants
const PORT = process.env.PORT || 8080;
// const HOST = '0.0.0.0'; **getting rid of for testing (9/27)

// App
const app = express();
app.use(cors());
app.get('/', (req, res) => { //specifying the api
  res.send('Hello World');  // sending back a response (the '/' means if no url is specified by frontend say, "hello world")
}); 

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






app.listen(PORT, ()=>{
  console.log(`Running on Port: ${PORT}`)
});
