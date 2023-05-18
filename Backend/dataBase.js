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
        },
        fisrtname:String,
        Lastname:String,
        DOB :String,
        username:String,
        country:String,
        state:String,
        City:String,
         Area:String,
         pineCode:String,
         About:String   

    }
)

module.exports = new mongoose.model("client",Clients)