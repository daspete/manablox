require('dotenv').config();

const path = require('path')
const fs = require('fs')

const plugins = [
    '~/plugins/events',
]

if(process.env.ADMIN_ENABLED){
    plugins.push('~/../admin/designsystem/DesignSystem')
}

let ModuleLoader = null

if(process.env.npm_lifecycle_script.indexOf('nuxt') !== -1){
    ModuleLoader = require('./helpers/NuxtModuleLoader.js')
}else{
    ModuleLoader = require('./helpers/ModuleLoader.js').default
}


const moduleLoader = new ModuleLoader(true)

let modules = moduleLoader.modules
let moduleNames = Object.keys(modules)

let disabledModules = moduleLoader.disabledModules
let disabledModuleNames = Object.keys(disabledModules)

moduleNames.forEach((moduleName) => {
    let currentModule = modules[moduleName]

    if(currentModule.designsystem){
        try{
            if(fs.existsSync(`./modules/${ currentModule.folder }/client/designsystem/DesignSystem.js`)){
                plugins.push(`~/../modules/${ currentModule.folder }/client/designsystem/DesignSystem`)
            }
        }catch(e){console.log(e)}
    }

})

module.exports = {

    env: {
        ADMIN_ENABLED: process.env.ADMIN_ENABLED,
        ADMIN_ENDPOINT: process.env.ADMIN_ENDPOINT
    },

    srcDir: './client',

    head: {
        meta: [
            { charset: 'utf-8' }, { name: 'viewport', content: 'width=device-width, initial-scale=1, user-scalable=no' }
        ],
    },

    css: [
        '~/assets/scss/app.scss'
    ],

    modules: [
        '~/modules/routes',
        '@nuxtjs/axios'
    ],

    plugins: plugins,

    build: {
        extractCSS: true,

        extend(config){

            // force loading svgs with html-loader
            const imageLoader = config.module.rules.find((loader) => { return loader.test.toString() == /\.(png|jpe?g|gif|svg|webp)$/.toString() })
            imageLoader.test = /\.(png|jpe?g|gif|webp)$/
            config.module.rules.push({ test: /\.svg$/, loader: 'html-loader' });

            // add module path aliases
            config.resolve.alias[`~approot`] = path.join(this.options.srcDir, `../`)

            // add admin alias when enabled
            if(process.env.ADMIN_ENABLED){
                config.resolve.alias[`~admin`] = path.join(this.options.srcDir, `../admin/`)
            }

            // add enabled module aliases
            moduleNames.forEach((moduleName) => {
                let currentModule = modules[moduleName]
                try {
                    config.resolve.alias[`~${ moduleName }`] = path.join(this.options.srcDir, `../modules/${ currentModule.folder }/client`)
                }catch(e){}
            })

            // keep track of all modules to prevent errors
            disabledModuleNames.forEach((moduleName) => {
                let currentModule = disabledModules[moduleName]
                try {
                    config.resolve.alias[`~${ moduleName }`] = path.join(this.options.srcDir, `../modules/${ currentModule.folder }/client`)
                }catch(e){}
            })

        }
    }

}
