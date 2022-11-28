const router = require("express").Router();
const {
  getClothes,
  addClothes,
  getClothesById,
  updateClothe,
  deleteClothe,
} = require("../controllers/clothes-ctrl");

router.get("/", getClothes);
router.get('/getClotheById',getClothesById);
router.post("/addClothes", addClothes);
router.put('/updateClothe',updateClothe)
router.delete('/deleteClothe',deleteClothe)

module.exports = router;
