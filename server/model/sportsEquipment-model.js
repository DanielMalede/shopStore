const mongoose = require('mongoose')

const SportEquipment = new mongoose.Schema({
    id:{type:Number,required:true},
    sportType:{type:String,required:true},
    productName:{type:String,required:true},
    company:{type:String,required:true},
    price:{type:String,required:true},
    quantity:{type:Number,required:true},
    idTeam:{type:String},
    imgLink:{type:String,required:true}
})

module.exports = mongoose.model('SportEquipment',SportEquipment)