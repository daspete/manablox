import Vue from 'vue'

class Events {
    constructor(options){
        this.options = options;

        this.events = [];
    }

    AddEvent(name, callback){
        let alreadyDefinedEvents = this.FindEvent(name, callback);
        if(alreadyDefinedEvents.length) return;
        this.events.push({ name, callback });
    }

    RemoveEvent(name, callback = null){
        let events = this.FindEvent(name, callback);
        if(!events.length) return;
        this.DeleteEvents(events);
    }

    FindEvent(name, callback = null){
        if(callback == null){
            return this.events.filter((event) => { return event.name == name });
        } else {
            return this.events.filter((event) => { return event.name == name && event.callback == callback });
        }
    }

    RemoveAllEvents(name = null){
        if(name == null) return this.DeleteEvents(this.events);

        let events = this.events.filter((event) => { return event.name == name });
        if(!events.length) return;
        this.DeleteEvents(events);
    }

    DeleteEvents(events){
        events.forEach((event) => {
            this.events.splice(this.events.indexOf(event), 1);
        });
    }



    async Emit(name, data = {}){
        let events = this.FindEvent(name);

        events.forEach((event) => {
            event.callback(data);
        });
    }
}







const EventsPlugin = {
    install(_Vue, options){
        _Vue.prototype.$events = new Events(_Vue, options)
    }
}

Vue.use(EventsPlugin);
