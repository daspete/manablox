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

- **client:dev** - Starts a development instance of the client part (nuxt)
- **client:build** - Builds a production instance of the client part
- **client:serve** - Creates a server instance of the client part

- **server:dev** - Starts a development instance of the server part (express, socket.io, mongodb)
- **server:build** - Builds a production instance of the server part
- **server:serve** - Creates a server instance of the server part

- **system:dev** - Starts a development instance of the whole system (nuxt, styleguide, express, socket.io, mongodb)
- **system:build** - Builds a production instance of the whole system
- **system:serve** - Creates a server instance of the whole system

- **styleguide:dev** - Creates a development instance of the styleguide
- **styleguide:build** - Builds a production package of the styleguide, which is available at http[s]://yourhost/styleguide


## Creating modules

Each module is located in a subfolder of ``` /modules ```


### Module structure

you find a demo module in the folder ``` /modules/demomodule ```

Each module has an endpoint for the

- **api** (express api router)
- **client** (nuxt pages and routes)
- **client admin** (nuxt pages and routes for the admin)
- **designsystem** (elements, patterns, templates and tokens for the vue-styleguidist package)
- **sockets** (socket.io controller)
- **mongodb** (DatabaseModels for mongodb)

Be sure, you have a ``` module.config.js ```file in every module folder

## Enable and disable the admin

If you need the admin, you can enable it in the .env file

```
ADMIN_ENABLED=true
```

