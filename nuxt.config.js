
require('dotenv').config();

module.exports = {

    env: process.env,

    srcDir: './client',

    head: {
        meta: [
            { charset: 'utf-8' }, { name: 'viewport', content: 'width=device-width, initial-scale=1, user-scalable=no' }
        ],
    },

    modules: [
        '@nuxtjs/axios'
    ],

    plugins: [
        '~/plugins/events'
    ],

    build: {
        extractCSS: true
    }

}
