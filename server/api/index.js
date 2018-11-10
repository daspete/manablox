const express = require('express');
const router = express.Router();

import ModuleLoader from '~approot/helpers/ModuleLoader'
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

if(process.env.ADMIN_ENABLED){
    router.use('/' + process.env.ADMIN_ENDPOINT, require(`~approot/admin/api/routes.js`).default)
}

export default router;
