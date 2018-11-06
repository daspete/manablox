require('dotenv').config();

const passport = require('passport');
const localStrategy = require('passport-local').Strategy;
const JWTstrategy = require('passport-jwt').Strategy;
const ExtractJWT = require('passport-jwt').ExtractJwt;

const UserModel = require('@modules/users/db/UserModel')


// user signup
passport.use('signup', new localStrategy({
    usernameField: 'email',
    passwordField: 'password'
}, async (email, password, done) => {
    try{
        const user = await UserModel.create({ email, password })
        return done(null, user)
    }catch(err){
        return done(err.errmsg)
    }
}))


// user login
passport.use('login', new localStrategy({
    usernameField: 'email',
    passwordField: 'password'
}, async (email, password, done) => {
    try{
        const user = await UserModel.findOne({ email })
        if(!user) return done(null, false, { message: 'User not found' })

        const validate = await user.isValidPassword(password)
        if(!validate) return done(null, false, { message: 'Invalid password' })

        return done(null, user, { message: 'Login success' })
    }catch(err){ return done(err) }
}))


// JWT token check
passport.use(new JWTstrategy({
    secretOrKey: process.env.JWT_SECRET || 'top_secret',
    jwtFromRequest: ExtractJWT.fromUrlQueryParameter('secret_token')
}, async (token, done) => {
    try{
        return done(null, token.user);
    }catch(error){
        return done(error);
    }
}));

module.exports = passport
