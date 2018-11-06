const express = require('express')
const router = express.Router()

router.get('/', (req, res, next) => {
    res.json('get admin datas')
})

module.exports = router
