const path = require('path')
const fs = require('fs')

module.exports = class {

    constructor(){
        this.modules = {}
        this.disabledModules = {}

        const modulesFolder = path.resolve(__dirname + '/../modules/')
        const moduleFolders = fs.readdirSync(modulesFolder)

        moduleFolders.forEach((moduleFolder) => {
            let moduleConfigFile = './modules/' + moduleFolder + '/module.config.js';
            let moduleHasConfig = fs.existsSync(moduleConfigFile)

            if(moduleHasConfig){
                let config = fs.readFileSync('./modules/' + moduleFolder + '/module.config.js').toString()
                // dont try this at home.... this will be fixed
                eval('config = ' + config.replace('export default ', ''))

                let moduleConfig = config;
                // let moduleConfig = require(modulesFolder + '/' + moduleFolder + '/module.config.js').default;
                if(moduleConfig.enabled == true){
                    this.modules[moduleConfig.name] = moduleConfig
                }else{
                    this.disabledModules[moduleConfig.name] = moduleConfig
                }
            }
        })

    }
}
