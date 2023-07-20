const mongodb = require('mongoose');

//connecting the db
const connectionString = process.env.DATABASE_URL;
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


