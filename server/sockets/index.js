const ModuleLoader = require('~approot/helpers/ModuleLoader.js')
const moduleLoader = new ModuleLoader()
let modules = moduleLoader.modules
let moduleNames = Object.keys(modules)

const socketControllers = []


moduleNames.forEach((moduleName) => {
    let currentModule = modules[moduleName]

    if(currentModule.socket && currentModule.socket.controller){
        try {
            let socketController = require(`@modules/${ currentModule.folder }/sockets/controller.js`)
            socketControllers.push(socketController)
        }catch(e){console.log(e)}
    }
})

class Sockets {

    constructor(io){
        this.io = io
        this.controllers = []

        this.io.on('connection', (socket) => { this.OnConnection(socket) })

        socketControllers.forEach((Controller) => {
            this.controllers.push(new Controller(this.io))
        })
    }

    OnConnection(socket){
        console.log('new connection', socket.id)

        this.controllers.forEach((controller) => {
            socket.on('disconnect', () => { controller.OnDisconnect(socket) })

            controller.OnConnect(socket)
        })
    }

}

export default Sockets
