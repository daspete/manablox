const express = require('express')
const router = express.Router()

// const ModuleLoader = require('~approot/helpers/ModuleLoader.js')
import ModuleLoader from '~approot/helpers/ModuleLoader'
const moduleLoader = new ModuleLoader()
let modules = moduleLoader.modules
let moduleNames = Object.keys(modules)




router.get('/', (req, res, next) => {
    let adminModules = []

    moduleNames.forEach((moduleName) => {
        let currentModule = modules[moduleName]

        if(typeof currentModule.admin !== 'undefined'){
            adminModules.push({
                name: currentModule.name,
                title: currentModule.admin.title ? currentModule.admin.title : currentModule.name,
                icon: currentModule.admin.icon ? currentModule.admin.icon : 'page'
            })
        }

        res.json({
            modules: adminModules
        })
    })


})

// module.exports = router
export default router
