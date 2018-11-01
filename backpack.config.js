const path = require('path')

module.exports = {
    webpack: (config, options, webpack) => {
        config.output.path = path.join(path.resolve(process.cwd()), 'server')
        config.entry.main = [ './server/server.js' ]

        return config
    }
}
