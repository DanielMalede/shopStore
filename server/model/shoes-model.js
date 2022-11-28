const mongoose = require('mongoose')

const Shoes = new mongoose.Schema({
    id:{type:Number,required:true},
    shoesType:{type:String,required:true},
    company:{type:String,required:true},
    model:{type:String,required:true},
    price:{type:String,required:true},
    quantity:{type:Number,required:true},
    isOnSale:{type:Boolean,required:true},
    imgLink:{type:String,required:true}
})

module.exports = mongoose.model('Shoes',Shoes)