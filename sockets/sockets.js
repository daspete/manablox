import fs from 'fs'
import path from 'path'

let currentPath = path.resolve(process.cwd());
let controllerPath = currentPath + '/sockets/controllers/'
let controllerFiles = fs.readdirSync(controllerPath)
let controllers = []
controllerFiles.forEach((file) => {
    if(file.endsWith('.js')){
        let controller = require('./controllers/' + file).default
        controllers.push(controller)
    }
})



class Sockets {

    constructor(io){
        this.io = io
        this.controllers = []

        this.io.on('connection', (socket) => { this.OnConnection(socket) })

        controllers.forEach((Controller) => {
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
