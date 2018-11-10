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
                let moduleConfig = require(modulesFolder + '/' + moduleFolder + '/module.config.js').default;
                if(moduleConfig.enabled == true){
                    this.modules[moduleConfig.name] = moduleConfig
                }else{
                    this.disabledModules[moduleConfig.name] = moduleConfig
                }
            }
        })

    }
}
