const express = require('express')
const router = express.Router()
const passport = require('passport')

const DataObjectModel = require('../../database/models/DataObject')

const AuthMiddleware = passport.authenticate('jwt', { session: false })

router.get('/', async (req, res, next) => {
    try{
        // let dataObjects = await DataObjectModel.find()
        // res.json(dataObjects)
        res.json(await DataObjectModel.GetFullArrayTree())
    }catch(err){
        return res.status(500).json({ message: err.errmsg })
    }
})

router.post('/', async (req, res, next) => {
    let parent = null;

    if(req.body.parentId){
        try{
            parent = await DataObjectModel.findOne({ _id: req.body.parentId });
        }catch(err){
            console.log(err)
            return res.status(500).json({ message: err.errmsg })
        }
    }

    try{
        let dataObject = await DataObjectModel.create(req.body)

        if(parent){
            await parent.appendChild(dataObject)
        }

        res.json(dataObject);
    }catch(err){
        console.log(err);
        return res.status(500).json({ message: err.errmsg })
    }






})

module.exports = router
