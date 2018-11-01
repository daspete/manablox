const fs = require('fs')
const path = require('path')

const express = require('express');
const router = express.Router();

let currentPath = path.resolve(process.cwd());
let apiRoutesPath = currentPath + '/api/routes/'
let apiRoutesFiles = fs.readdirSync(apiRoutesPath)

apiRoutesFiles.forEach((file) => {
    if(file.endsWith('.js')){
        let routeName = file.replace('.js', '').toLowerCase()
        router.use('/' + routeName, require('./routes/' + file))
    }
})


module.exports = router;
