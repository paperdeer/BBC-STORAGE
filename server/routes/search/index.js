const router = require('express')();
const controller = require('../../controller/search/searchByName')

router.get("/search", controller.summonerInfo)

module.exports = router