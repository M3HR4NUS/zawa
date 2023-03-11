const express = require('express');
const session = require('express-session');
const flash = require('connect-flash');

const connect = require('./Data/connect');

require('dotenv').config({path:'./config/config.env'});

const app=express();


//!database connct
connect();


//* BodyPaser
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//* View engine setup
app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(session({
  secret:'geeksforgeeks',
  saveUninitialized: true,
  resave: true
}));

app.use(flash())
//!static folder
app.use(express.static('public'))

//!router
app.use("/",require('./routers/user'))

app.listen(process.env.PORT,()=>{
  console.log("start");
})