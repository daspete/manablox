const express = require('express')
const router = express.Router()

import ModuleLoader from '~approot/helpers/ModuleLoader'
const moduleLoader = new ModuleLoader()
let modules = moduleLoader.modules
let moduleNames = Object.keys(modules)

let adminModules = []

moduleNames.forEach((moduleName) => {
    let currentModule = modules[moduleName]

    if(currentModule.admin){
        adminModules.push({
            name: currentModule.name,
            title: currentModule.admin.title ? currentModule.admin.title : currentModule.name,
            icon: currentModule.admin.icon ? currentModule.admin.icon : 'page'
        })
    }
})

router.get('/', (req, res, next) => {
    res.json({
        modules: adminModules
    })
})

export default router
