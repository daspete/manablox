
const modules = process.env.ENABLED_MODULES.split(',')
const socketControllers = []


modules.forEach((moduleName) => {
    try {
        let socketController = require('@modules/' + moduleName + '/sockets/controller.js').default
        socketControllers.push(socketController)
    }catch(e){}
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
