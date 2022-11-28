const router = require('express').Router()
const {
    getSportEquipment,addSportEquipment
} =require('../controllers/sportEquipment-ctrl')

router.get('/',getSportEquipment)
router.post('/addSportEquipment',addSportEquipment)

module.exports = router