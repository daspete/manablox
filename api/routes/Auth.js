require('dotenv').config();

const express = require('express')
const router = express.Router()
const passport = require('passport')
const jwt = require('jsonwebtoken')

router.post('/signup', passport.authenticate('signup', { session: false }), async (req, res, next) => {
    console.log(req);
    res.json({
        message: 'Signup successful',
        user: req.user
    });
});

router.post('/login', async (req, res, next) => {
    passport.authenticate('login', async (err, user, info) => {
        try{
            if(err || !user){
                const error = new Error('An Error occured')
                return next(error);
            }

            req.login(user, { session: false }, async (error) => {
                if (error) return next(error)
                const body = { _id: user._id, email: user.email };
                const token = jwt.sign({ user: body }, process.env.JWT_SECRET || 'top_secret');
                return res.json({ token });
            });
        }catch(error){
            return next(error);
        }
    })(req, res, next);
});


module.exports = router
