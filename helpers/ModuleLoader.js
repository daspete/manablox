class ModuleLoader {

    constructor(){
        this.modules = {}
        this.disabledModules = {}

        try{
            this.moduleContext = require.context('~approot/modules', true, /module\.config\.js$/)

            this.moduleContext.keys().forEach((configContext) => {
                let currentModule = this.moduleContext(configContext).default

                if(currentModule.enabled == true){
                    this.modules[currentModule.name] = currentModule
                }else{
                    this.disabledModules[currentModule.name] = currentModule
                }
            })
        }catch(e){console.log(e)}
    }

}

export default ModuleLoader
