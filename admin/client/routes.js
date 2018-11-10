import ModuleLoader from '~approot/helpers/ModuleLoader'
const moduleLoader = new ModuleLoader()
let modules = moduleLoader.modules
let moduleNames = Object.keys(modules)

const adminRoutes = []

const context = require.context('~approot/modules', true, /admin\/routes\.js$/)
context.keys().forEach((key) => {
    let moduleName = key.substr(2, key.length - 1).split('/')[0]
    let currentModule = null;

    for(let i = 0; i < moduleNames.length; i++){
        let _module = modules[moduleNames[i]];

        if(_module.folder == moduleName){
            currentModule = _module;
            break;
        }
    }

    if(currentModule && currentModule.enabled == true && currentModule.admin){
        let adminRoute = context(key).default;
        adminRoute.path = currentModule.admin.endpoint;
        adminRoutes.push(adminRoute)
    }
})

export default {
    name: 'admin_index',
    component: require('~admin/client/pages/index.vue').default,
    children: adminRoutes
}

