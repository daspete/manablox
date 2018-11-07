import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const modules = process.env.ENABLED_MODULES.split(',')
const routes = []

modules.forEach((moduleName) => {
    try {
        let moduleRoutes = require('../modules/' + moduleName + '/client/routes.js').default;

        moduleRoutes.forEach((moduleRoute) => {
            routes.push(moduleRoute);
        })

    }catch(e){}
})

export function createRouter(){
    return new Router({
        mode: 'history',
        routes: routes
    })
}
