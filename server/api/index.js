const express = require('express');
const router = express.Router();


const modules = process.env.ENABLED_MODULES.split(',')

modules.forEach((moduleName) => {
    try {
        router.use(`/${ moduleName }`, require('@modules/' + moduleName + '/api/routes.js'))
    }catch(e){}
})


module.exports = router;
