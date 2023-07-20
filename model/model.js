const mongoose = require('mongoose');
const dbSchema = mongoose.Schema({
    name:{
        type: String
    },
    password:{
        type: String
    },
    others:{
        type:String
    }
})
module.exports = mongoose.model("credentials",dbSchema);