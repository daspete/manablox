const path = require('path')

module.exports = {
    webpack: (config, options, webpack) => {
        config.output.path = path.join(path.resolve(process.cwd()), 'server')

        config.entry.main = [ './server/server.js' ]

        config.module.rules[0].exclude.push(path.join(path.resolve(process.cwd()), 'client'))
        config.module.rules[0].exclude.push(path.join(path.resolve(process.cwd()), 'modules/admin/client'))

        config.resolve = {
            alias: {
                '@app': path.resolve(__dirname),
                '@server': path.resolve(__dirname + '/server'),
                '@client': path.resolve(__dirname + '/client'),
                '@modules': path.resolve(__dirname + '/modules')
            }
        }

        return config
    }
}
