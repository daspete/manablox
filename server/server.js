// load environment variables
require('dotenv').config()

// check if we are in dev mode or in production mode
const isProduction = process.env.NODE_ENV === 'production'

// import server modules
const Sockets = require('@server/sockets').default
const morgan = require('morgan')
const mongoose = require('mongoose')
const express = require('express')
const expressSession = require('express-session')
const passport = require('passport')
const app = express()
const server = require('http').createServer(app)
const io = require('socket.io')(server)
const cors = require('cors')
const helmet = require('helmet')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')


// define ip and port for the server
const host = process.env.HOST || '0.0.0.0'
const port = process.env.PORT || 3000

// setup mongodb
mongoose.connect(process.env.DATABASE_URL || 'mongodb://127.0.0.1:27017', {
    useNewUrlParser: true,
    user: process.env.DATABASE_USER || 'admin',
    pass: process.env.DATABASE_PASS ||''
})
mongoose.connection.on('error', (error) => { console.log(error) })
mongoose.Promise = global.Promise

// use security shield
app.use(helmet())

// use an http logger
app.use(morgan('dev'))

// setup cors
app.use(cors({
    origin: '*',
    optionsSuccessStatus: 200
}))

// passport middleware
app.use(passport.initialize())
app.use(passport.session())

// setup session handling
app.use(expressSession({
    name: process.env.SESSION_NAME || 'manablox-session',
    secret: process.env.SESSION_SECRET || 'nothing-special',
    resave: process.env.SESSION_RESAVE || true,
    saveUninitialized: process.env.SESSION_SAVEUNINITIALIZED || true,
}))

// api middleware
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cookieParser());

require('@server/auth')
app.use('/api', require('@server/api'))

// nuxt.js middleware
const { Nuxt, Builder } = require('nuxt')
let nuxtConfig = require('@app/nuxt.config.js')
    nuxtConfig.dev = !isProduction
const nuxt = new Nuxt(nuxtConfig)
if(nuxtConfig.dev){
    const builder = new Builder(nuxt)
    builder.build()
}
app.use(nuxt.render)

// start server
server.listen(port, host)
console.log(`express server is running at ${ host }:${ port } `)

// start socket server
const sockets = new Sockets(io)
