const mongoose = require('mongoose')

const Clients = new mongoose.Schema(
    {
        email:{
            type:String,
            required:true
        },
        phone:{
            type:Number,
            required:true
        },
        gender:{
            type:String,
            required:true
        },
        password:{
            type:String,
            required:true
        }
    }
)

module.exports = new mongoose.model("client",Clients)