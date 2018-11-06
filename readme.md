# manablox

Manablox is a boilerplate for rapid prototyping, based on 

- express.js
- nuxt.js
- socket.io
- passport (jwt)
- mongoose
- vue-styleguidist

## dev state

this package is currently under development, so the structure is changing constantly...

## installation

To install this system, just clone this repo and install it with npm or yarn, i would recommend yarn, cause of more speed...

install yarn with:  ``` npm install -g yarn ```

install this system with the command: ``` yarn ```

## available yarn tasks

- ``` yarn run dev ``` starts a hot reload development server
- ``` yarn run serve ``` starts a production server
- ``` yarn run styleguide ``` starts a hot reload styleguide development server
- ``` yarn run styleguide:build ``` creates a production package of the styleguide and saves it in the ``` client/static/styleguide ``` folder



## add api routes

To add another api route, just create a new file in the folder ``` api/routes ```, the name of this file is also the name of the route group

** Example route: **

``` js
const express = require('express')
const router = express.Router()

router.get('/', (req, res, next) => {
    res.json('Welcome to a new route')
})

module.exports = router
```



## add database models

To add another model, you can use a basic mongoose schema and model. Create a new file in the folder ``` database/models ```

** Example model: ** 

``` js
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const MyModelSchema = new Schema({
    title: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('mymodel', MyModelSchema)
```



## add new socket

To add a new socket, create a new file in the folder ``` sockets/controllers ```

** Example socket: **

``` js
let connections = []

export default class {

    constructor(io){
        this.io = io;
    }

    OnConnect(socket){
        console.log('new client connected to my socket')
    }

    OnDisconnect(socket){
        console.log('client disconnected from my socket')
    }

}
```


## the design system

All vue components located in the folder and subfolders of ``` client/designsystem ``` are globally available in your app

You can create style tokens in the folder ``` client/designsystem/tokens ```


