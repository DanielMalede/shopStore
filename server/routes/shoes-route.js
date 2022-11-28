const router = require("express").Router();
const {
  getShoes,
  addShoes,
  getShoesById,
  updateShoes,
  deleteShoes
} = require("../controllers/shoes-ctrl");

router.get("/", getShoes);
router.get("/addShoes/:id", getShoesById);
router.post("/addShoes", addShoes);
router.put('/updateShoes/:id',updateShoes)
router.delete('/deleteShoes',deleteShoes)

module.exports = router;
