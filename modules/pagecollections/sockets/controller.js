
let connections = []

export default class {

    constructor(io){
        this.io = io;
    }

    OnConnect(socket){
        console.log('new client connected to the collections socket')
    }

    OnDisconnect(socket){
        console.log('client disconnected from the collections socket')
    }

}
