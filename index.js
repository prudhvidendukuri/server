//dependencies
const express = require('express');

require('dotenv').config();

//server details
let port = process.env.PORT || 3000;
let hostname = "0.0.0.0";

//listening to the port
const app = express();
app.use(express.json());
app.listen(port,hostname,()=>{
    console.log("listening to port");
})
//writing the connection in different script
//connecting and disconnect to the db after an request is sent

//listen to routers and methods
const routers = require('./Router/router');
app.use('/api',routers);



