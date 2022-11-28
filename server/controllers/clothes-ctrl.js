const clothesModel = require("../model/clothes-model");

const getClothes = async (req, res) => {
  await clothesModel.find({}).then((result, error) => {
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

const addClothes = async (req, res) => {
  await clothesModel
    .insertMany(req.body.data)
    .then(() => {
      res.status(200).json({ success: true, message: "clothes has added" });
    })
    .catch((error) => res.status(400).json({ success: false, message: error }));
};

module.exports = {
    getClothes,
    addClothes
};
