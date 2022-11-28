const sportEquipment = require("../model/sportsEquipment-model");

const getSportEquipment = async (req, res) => {
  await sportEquipment.find({}).then((result, error) => {
    if (error) {
      return res.status(400).json({ success: false, message: error });
    }
    if (result.length == 0) {
      return res.json({ success: false, message: "no data" });
    }
    if (result) {
      return res.status(200).json({ success: true, message: result });
    }
  });
};

const addSportEquipment = async (req, res) => {
  await sportEquipment
    .insertMany(req.body.equipment)
    .then(() => {
      res
        .status(200)
        .json({ success: true, message: "Sport Equipment has added" });
    })
    .catch((error) => res.status(400).json({ success: false, message: error }));
};

const getSportEquipmentById =async (req,res)=>{
  await sportEquipment.findById(req.params.id)
  .then((result)=>{
    if (result) {
     return res.status(200).json({success:true,message:result})
    }
    return res.status(300).json({success:false,message:"Sport Equipment not found"})
  })
  .catch((err)=>{
    res.status(400).json({success:false,message:err})
  })
}

const updateSportEquipment =async (req,res)=>{
  await sportEquipment.findByIdAndUpdate(req.params.id,req.body.sportEquipment)
  .then((result)=>{
    return res.status(200).json({success:true,message:result})
  })
  .catch((err)=>{
    res.status(400).json({success:false,message:err})
  })
}
module.exports = {
  getSportEquipment,
  addSportEquipment,
  getSportEquipmentById,
  updateSportEquipment
};
