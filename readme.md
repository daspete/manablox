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

currently the vue-styleguidist part is disfunctional


## installation

To install this system, just clone this repo and install it with npm or yarn, i would recommend yarn, cause of more speed...

install yarn with:  ``` npm install -g yarn ```

install this system with the command: ``` yarn ```


## available yarn tasks

- **client:dev** - Starts a development instance of the client part (nuxt)
- **client:build** - Builds a production instance of the client part
- **client:serve** - Creates a server instance of the client part

- **server:dev** - Starts a development instance of the whole system
- **server:build** - Builds a production instance of the whole system
- **server:serve** - Creates a server instance of the whole system

- **styleguide:dev** - Creates a development instance of the styleguide
- **styleguide:build** - Builds a production package of the styleguide, which is available at http[s]://yourhost/styleguide


## Creating modules

Each module is located in a subfolder of ``` /modules ```


### Module structure

you find a demo module in the folder ``` /modules/demomodule ```

Each module has an endpoint for the

- **api** (express api router)
- **client** (nuxt pages and routes)
- **client admin** (nuxt pages and routes for the admin module)
- **designsystem** (elements, patterns, templates and tokens for the vue-styleguidist package)
- **sockets** (socket.io controller)
- **mongodb** (DatabaseModels for mongodb)

## Enable and disable modules

To enable modules, you need an entry in the .env file

```
ENABLED_MODULES=users,auth,admin,demomodule
```

