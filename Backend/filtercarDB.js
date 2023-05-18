const mongoose = require('mongoose');


const GetCars = new mongoose.Schema(
    {
        image:String,
        company:String,
        Model:String,
        Price:Number
    }
)

module.exports= new mongoose.model("getcarsdata",GetCars)