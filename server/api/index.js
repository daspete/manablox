const fs = require('fs')
const path = require('path')

const express = require('express');
const router = express.Router();

const modulePath = path.resolve('modules')
const moduleFolders = fs.readdirSync(modulePath)

moduleFolders.forEach((_module) => {
    let moduleFolderName = _module;
    let moduleName = _module.toLowerCase()

    try {
        router.use(`/${ moduleName }`, require('@modules/' + moduleFolderName + '/api/routes.js'))
    }catch(e){}
})


module.exports = router;
