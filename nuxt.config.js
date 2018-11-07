require('dotenv').config();

const path = require('path')
const fs = require('fs')

const plugins = [
    '~/plugins/events',
]

const modules = process.env.ENABLED_MODULES.split(',')

modules.forEach((moduleName) => {
    try{
        if(fs.existsSync(`./modules/${ moduleName }/client/plugins/DesignSystem.js`)){
            plugins.push(`~/../modules/${ moduleName }/client/plugins/DesignSystem`)
        }
    }catch(e){}
})

module.exports = {

    env: process.env,

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
            modules.forEach((moduleName) => {
                try {
                    config.resolve.alias[`~${ moduleName }`] = path.join(this.options.srcDir, `../modules/${ moduleName }/client`)
                }catch(e){}
            })


        }
    }

}
