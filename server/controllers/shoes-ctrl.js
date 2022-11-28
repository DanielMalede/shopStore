const shoesModel = require("../model/shoes-model");

const getShoes = async (req, res) => {
  await shoesModel.find({}).then((result, error) => {
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

const addShoes = async (req, res) => {
  await shoesModel
    .insertMany(req.body.shoes)
    .then(() => {
      res.status(200).json({ success: true, message: "shoes has added" });
    })
    .catch((error) => res.status(400).json({ success: false, message: error }));
};

const getShoesById = async (req, res) => {
  await shoesModel
    .findById(req.body.id || req.params.id)
    .then((result) => {
      if (result) {
        return res.status(200).json({ success: true, message: result });
      }
      return res
        .status(400)
        .json9({ success: false, message: "shoes not found" });
    })
    .catch((err) => {
      res.status(400).json({ success: false, message: err });
    });
};

const updateShoes = async (req, res) => {
  await shoesModel
    .findByIdAndUpdate(req.params.id, req.body.shoes)
    .then((result) => {
      res.status(200).json({ success: true, message: result });
    })
    .catch((err) => {
      res.status(400).json({ success: false, message: err });
    });
};

const deleteShoes = async (req, res) => {
  await shoesModel.findByIdAndDelete(
    req.params.id
      .findByIdAndDelete(req.body.id || req.params.id)
      .then(() => res.status(300).json({ success: true }))
      .catch((err) => res.status(400).json({ success: false, err }))
  );
};

module.exports = {
  getShoes,
  addShoes,
  getShoesById,
  updateShoes,
  deleteShoes
};
