const router = require('express').Router()
const {
    getTeam,addTeam
}= require('../controllers/team-ctrl')

router.get('/',getTeam)
router.post('/addTeam',addTeam)


module.exports = router