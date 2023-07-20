//dependencies
const express = require('express');

require('dotenv').config();

//server details
let port = 3000;
let hostname = "0.0.0.0";

//listening to the port
const app = express();
app.use(express.json());
//writing the connection in different script
//connecting and disconnect to the db after an request is sent
//but while deploying it says that we need to connect to mongo first before listening to the request so

const {connect,disconnect } = require('./DataBase/dataBase');
connect();
app.listen(process.env.PORT || port,()=>{
    console.log("listening to port");
})


//listen to routers and methods
const routers = require('./Router/router');
app.use('/api',routers);



