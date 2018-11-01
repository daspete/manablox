require('dotenv').config()
const isProduction = process.env.NODE_ENV === 'production'

import Sockets from '../sockets/sockets'

const express = require('express')
const app = express()
const server = require('http').createServer(app)
const io = require('socket.io')(server)

const cors = require('cors')
const helmet = require('helmet')
const bodyParser = require('body-parser')

const api = require('../api/api.js')

const { Nuxt, Builder } = require('nuxt')
let nuxtConfig = require('../nuxt.config.js')
    nuxtConfig.dev = !isProduction


const host = process.env.HOST || '0.0.0.0'
const port = process.env.PORT || 3000


app.use(helmet())


app.use(cors({
    origin: '*',
    optionsSuccessStatus: 200
}))



app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use('/api', api)



const nuxt = new Nuxt(nuxtConfig)
if(nuxtConfig.dev){
    const builder = new Builder(nuxt)
    builder.build()
}
app.use(nuxt.render)





server.listen(port, host)
console.log(`express server is running at ${ host }:${ port } `)


const sockets = new Sockets(io)
