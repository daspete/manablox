const express = require('express')
const router = express.Router()
const passport = require('passport')

const CollectionModel = require('@modules/collections/db/CollectionModel')
const AuthMiddleware = passport.authenticate('jwt', { session: false })

router.get('/', async (req, res, next) => {
    try{
        res.json(await CollectionModel.GetFullArrayTree())
    }catch(err){
        return res.status(500).json({ message: err.errmsg })
    }
})

router.post('/', async (req, res, next) => {
    let parent = null;

    if(req.body.parentId){
        try{
            parent = await CollectionModel.findOne({ _id: req.body.parentId });
        }catch(err){
            return res.status(500).json({ message: err.errmsg })
        }
    }

    try{
        let collection = await CollectionModel.create(req.body)

        if(parent) await parent.appendChild(collection)

        res.json(collection);
    }catch(err){
        return res.status(500).json({ message: err.errmsg })
    }
})

module.exports = router
