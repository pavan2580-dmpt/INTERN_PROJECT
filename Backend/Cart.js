const mongoose = require('mongoose')

const Cart = new mongoose.Schema(
    {
        image:String,
        company:String,
        Model:String,
        Price:Number
    }
)

module.exports = new mongoose.model("CartItem",Cart)