const express = require('express');
const router = express.Router();

const ModuleLoader = require('~approot/helpers/ModuleLoader.js')
const moduleLoader = new ModuleLoader()
let modules = moduleLoader.modules
let moduleNames = Object.keys(modules)

moduleNames.forEach((moduleName) => {
    let currentModule = modules[moduleName]

    if(currentModule.api && currentModule.api.endpoint){
        try {
            router.use('/' + currentModule.api.endpoint, require(`@modules/${ currentModule.folder }/api/routes.js`))
        }catch(e){}
    }

})


module.exports = router;
