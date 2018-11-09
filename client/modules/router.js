import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// const ModuleLoader = require('~approot/helpers/ModuleLoader.js')
import ModuleLoader from '~approot/helpers/ModuleLoader'
const moduleLoader = new ModuleLoader()
let modules = moduleLoader.modules
let moduleNames = Object.keys(modules)

const routes = []

moduleNames.forEach((moduleName) => {
    let currentModule = modules[moduleName]

    if(currentModule.frontend == true){
        try {
            let moduleRoutes = require('../modules/' + currentModule.folder + '/client/frontend/routes.js').default;

            moduleRoutes.forEach((moduleRoute) => {
                routes.push(moduleRoute);
            })
        }catch(e){console.log(e)}
    }
})

if(process.env.ADMIN_ENABLED){
    let adminRoutes = require('../admin/client/routes.js').default
    adminRoutes.path = '/' + process.env.ADMIN_ENDPOINT
    routes.push(adminRoutes);
}

export function createRouter(){
    return new Router({
        mode: 'history',
        routes: routes
    })
}
