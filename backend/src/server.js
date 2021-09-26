'use strict';
require('dotenv').config()
const express = require('express');
const conn = require('./database');


// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
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
      res.send(results); //sending back a response from database (res=response)
    }
  )
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
