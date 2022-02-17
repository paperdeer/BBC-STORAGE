const router = require('express')();
const search = require('./search/index')

router.use("/user",search)

module.exports = router