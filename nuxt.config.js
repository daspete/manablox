const path = require('path')
const fs = require('fs')

require('dotenv').config();

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

    plugins: [
        '~/plugins/events',
        '~/plugins/DesignSystem',
        '~/plugins/PageComponents'
    ],

    build: {
        extractCSS: true,

        extend(config){

            const modulePath = path.resolve(process.cwd(), 'modules')
            const moduleFolders = fs.readdirSync(modulePath)

            moduleFolders.forEach((_module) => {
                let moduleFolderName = _module;
                let moduleName = _module.toLowerCase()

                try {
                    config.resolve.alias[`~${ moduleName }`] = path.join(this.options.srcDir, `../modules/${ moduleFolderName }/client`)
                }catch(e){
                    console.log(e)
                }
            })


        }
    }

}
