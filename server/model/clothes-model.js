const mongoose = require('mongoose')

const Clothes = new mongoose.Schema({
    id:{type:Number,required:true},
    garmentType:{type:String,required:true},
    gender:{type:String,required:true},
    company:{type:String,required:true},
    model:{type:String,required:true},
    price:{type:Number,required:true},
    quantity:{type:Number,required:true},
    isShort:{type:Boolean,required:true},
    isDryFit:{type:Boolean,required:true},
    img:{type:String,required:true}
})

module.exports = mongoose.model('Clothes',Clothes)