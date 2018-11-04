const path = require('path');
const vueLoader = require('vue-loader');

module.exports = {
    styleguideDir: 'client/static/styleguide',

    title: 'Bankai DesignSystem',

    components: 'client/designsystem/**/[A-Z]*.vue',

    version: '1.0.0',

    usageMode: 'expand',

    exampleMode: 'expand',

    serverHost: '0.0.0.0',
    serverPort: 3333,

    webpackConfig: {
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
