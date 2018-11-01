
let connections = []

export default class {

    constructor(io){
        this.io = io;
    }

    OnConnect(socket){
        console.log('new client connected to Users socket')
    }

    OnDisconnect(socket){
        console.log('client disconnected from Users socket')
    }

}
