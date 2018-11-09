module.exports = class {

    constructor(){
        this.modules = {}

        try{
            this.moduleContext = require.context('~approot/modules', true, /module\.config\.js$/)

            this.moduleContext.keys().forEach((configContext) => {
                let currentModule = this.moduleContext(configContext)
                if(currentModule.enabled == true) this.modules[currentModule.name] = currentModule
            })
        }catch(e){console.log(e)}

    }

}
