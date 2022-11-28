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
    .insertMany(req.body.data)
    .then(() => {
      res.status(200).json({ success: true, message: "shoes has added" });
    })
    .catch((error) => res.status(400).json({ success: false, message: error }));
};

module.exports = {
    getShoes,
    addShoes
};
