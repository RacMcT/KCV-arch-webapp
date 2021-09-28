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

app.get('/users', (req, res) => { //specifying the api
  conn.query( //ask the database
    "SELECT * FROM userinfo", //database mysql command
    (error, results, fields) => //what we get back from database
    {
      if(error){ 
        throw error
      }
      res.json(results); //sending back a response from database (res=response; sending db information back as json notation)
    }
  )
});

app.listen(PORT, ()=>{
  console.log(`Running on Port: ${PORT}`)
});
