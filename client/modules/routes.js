const path = require('path')

module.exports = function () {
    this.nuxt.options.build.createRoutes = () => {}

    this.addTemplate({
        fileName: 'router.js',
        src: path.resolve(`${this.options.srcDir}`, 'modules/router.js')
    })

}
