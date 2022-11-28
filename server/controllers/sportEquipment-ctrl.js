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
    .insertMany(req.body.data)
    .then(() => {
      res
        .status(200)
        .json({ success: true, message: "Sport Equipment has added" });
    })
    .catch((error) => res.status(400).json({ success: false, message: error }));
};

module.exports = {
  getSportEquipment,
  addSportEquipment,
};
