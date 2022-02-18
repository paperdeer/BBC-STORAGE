const router = require('express')();
const summonercontroller = require('../../controller/summoner/searchByName')
const matchController = require('../../controller/summoner/getMatches')
router.get("/search", summonercontroller.summonerInfo)
router.get("/match", matchController.getMatchInfo)

module.exports = router