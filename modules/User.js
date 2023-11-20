const mongoose = require('mongoose')
const UaserData = mongoose.Schema({
    username:{
        type:String,
        require:true,
        
    },
    email:{
        type:String,
        require:true,
    },
    password:{
        type:String,
        require:true,

    },
})

const User = mongoose.model('User',UaserData)
module.exports = User;