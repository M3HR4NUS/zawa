const express = require('express');

const connect = require('./Data/connect');

const app=express();


//!database connct
connect();


//* BodyPaser
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//* View engine setup
app.set('view engine', 'ejs');

//!static folder
app.use(express.static('public'))

//!router
app.use("/user",require('./routers/user'))

app.listen(3000,()=>{
  console.log("run progect");
})