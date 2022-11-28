const router = require('express').Router()
const {
    getClothes,addClothes
}= require('../controllers/clothes-ctrl')

router.get('/',getClothes)
router.post('/addClothes',addClothes)

module.exports = router