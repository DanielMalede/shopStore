const router = require('express').Router()
const{
    getShoes,addShoes
} = require('../controllers/shose-ctrl')

router.get('/',getShoes)
router.post('/addShoes',addShoes)

module.exports = router