require('dotenv').config();

const path = require('path');
const vueLoader = require('vue-loader');

const modules = process.env.ENABLED_MODULES.split(',');
const aliases = {}

modules.forEach((moduleName) => {
    aliases[`~${ moduleName }`] = path.resolve(__dirname + '/modules/' + moduleName + '/client')
})


module.exports = {
    styleguideDir: 'client/static/styleguide',

    title: 'Bankai DesignSystem',

    components: 'modules/*/client/designsystem/**/[A-Z]*.vue',

    version: '1.0.0',

    usageMode: 'expand',

    exampleMode: 'expand',

    serverHost: '0.0.0.0',
    serverPort: 3333,

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
			]
        },
        plugins: [ new vueLoader.VueLoaderPlugin() ]
    },


}
