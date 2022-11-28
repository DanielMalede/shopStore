const teamModel = require("../model/team-model");

const getTeam = async (req, res) => {
  await teamModel.find({}).then((result, error) => {
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

const addTeam = async (req, res) => {
  await teamModel
    .insertMany(req.body.team)
    .then(() => {
      res
        .status(200)
        .json({ success: true, message: "team has added" });
    })
    .catch((error) => res.status(400).json({ success: false, message: error }));
};

module.exports = {
    getTeam,
    addTeam,
};
