const mongodb = require('mongoose');

//connecting the db
const connectionString = "mongodb+srv://username:ramaraju@cluster0.cxeofth.mongodb.net/USERS";
mongodb.connect(connectionString);
const db = mongodb.connection;

//operation to db
//on
const connect = ()=>{
    db.on('error',(e)=>{
        console.log(e);
    });
    console.log("conencted to db");

}
const disconnect =()=>{

    db.close();
    console.log("db is disconnected");
}

module.exports = {connect , disconnect}


