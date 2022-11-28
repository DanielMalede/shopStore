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
    .insertMany(req.body.clothe)
    .then(() => {
      res.status(200).json({ success: true, message: "clothes has added" });
    })
    .catch((error) => res.status(400).json({ success: false, message: error }));
};

const getClothesById = async (req, res) => {
  await clothesModel
    .findById(req.params.id)
    .then((clothe) => {
      if (clothe) {
        return res.status(200).json({ success: true, message: clothe });
      }
      return res
        .status(400)
        .json({ success: false, message: "no clothe found" });
    })
    .catch((err) => {
      res.status(400).json({ success: false, message: err });
    });
};

const updateClothe = async (req, res) => {
  await clothesModel
    .findByIdAndUpdate(req.params.id, req.body.id)
    .then((result) => {
      res.status(200).json({ success: true, message: result });
    })
    .catch((err) => {
      res.status(400).json({ success: true, message: err });
    });
};

const deleteClothe = async (req, res) => {
  await clothesModel
    .findByIdAndDelete(req.body.id || req.params.id)
    .then((result) => res.status(300).json({ success: true }))
    .catch((err) => res.status(400).json({ success: false, err }));
};
module.exports = {
  getClothes,
  addClothes,
  getClothesById,
  updateClothe,
  deleteClothe
};
