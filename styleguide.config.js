require('dotenv').config();

const path = require('path');
const vueLoader = require('vue-loader');

const aliases = {}
if(process.env.ADMIN_ENABLED){
    aliases['~admin'] = path.resolve(__dirname + '/admin')
}

const ModuleLoader = require('./helpers/StyleguideModuleLoader')
const moduleLoader = new ModuleLoader()
const modules = moduleLoader.modules
const moduleNames = Object.keys(modules)

moduleNames.forEach((moduleName) => {
    let currentModule = modules[moduleName]

    if(currentModule.designsystem){
        aliases[`~${ currentModule.name }`] = path.resolve(__dirname + '/modules/' + currentModule.folder + '/designsystem')
    }

})


module.exports = {
    styleguideDir: 'client/static/styleguide',

    title: 'manablox DesignSystem',

    components: [
        'modules/*/client/designsystem/**/[A-Z]*.vue',
        'admin/designsystem/**/[A-Z]*.vue'
    ],

    version: '1.0.0',

    usageMode: 'expand',

    exampleMode: 'expand',

    serverHost: '0.0.0.0',
    serverPort: 3333,

    require: [
        path.join(__dirname, 'client/assets/scss/app.scss')
    ],

    webpackConfig: {
        resolve: {
            alias: aliases
        },
        module: {
            rules: [
				{
					test: /\.vue$/,
					loader: 'vue-loader',
				},
				{
					test: /\.js?$/,
					exclude: /node_modules/,
					loader: 'babel-loader',
				},
				{
					test: /\.css$/,
					use: ['vue-style-loader', 'css-loader'],
                },
                {
					test: /\.scss$/,
					use: ['vue-style-loader', 'css-loader', 'sass-loader'],
                },
                {
                    test: /\.svg$/,
                    loader: 'html-loader',
                },
			]
        },
        plugins: [ new vueLoader.VueLoaderPlugin() ]
    },


}
