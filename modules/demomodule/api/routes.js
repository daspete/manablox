const express = require('express')
const router = express.Router()
const passport = require('passport')

const AuthMiddleware = passport.authenticate('jwt', { session: false })

router.get('/', async (req, res, next) => {
    res.json({
        demo: 'Welcome to your demo module'
    })
})

module.exports = router
