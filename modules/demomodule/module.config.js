module.exports = {
    name: 'demo', // used as project alias, like : ~demo/
    folder: 'demomodule', // the folder name of the module

    enabled: true, // toggle module status

    api: {
        endpoint: 'demo'
    },

    frontend: true,

    admin: {
        endpoint: 'demo',
        title: 'Demo Module',
        icon: 'page'
    },

    socket: true,

    designsystem: false
}
