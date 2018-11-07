import AdminIndex from '~admin/pages/index.vue'

const adminRoutes = []

const modules = process.env.ENABLED_MODULES.split(',')

const context = require.context('~/../modules', true, /adminroutes\.js$/)
context.keys().forEach((key) => {
    let moduleName = key.substr(2, key.length - 1).split('/')[0]

    if(modules.contains(moduleName)){
        adminRoutes.push(context(key).default)
    }
})

export default [
    {
        path: '/admin',
        name: 'admin_index',
        component: AdminIndex,
        children: adminRoutes
    }
]
